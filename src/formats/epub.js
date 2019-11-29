const fs = require("fs");
const unzip = require("unzipper");
const path = require("path");
const os = require("os");
const parseOPF = require("./opf.js");
const purify = require("../dompurify");
const Readable = require("stream").Readable;
const util = require("util");
const rimraf = util.promisify(require("rimraf"));
const processCSS = require("../postcss");
const parseToC = require("./epub-nav");

const JSTYPES = [
  "text/javascript",
  "text/ecmascript",
  "text/javascript1.0",
  "text/javascript1.1",
  "text/javascript1.2",
  "text/javascript1.3",
  "text/javascript1.4",
  "text/javascript1.5",
  "text/jscript",
  "text/livescript",
  "text/x-javascript",
  "text/x-ecmascript",
  "application/x-javascript",
  "application/x-ecmascript",
  "application/javascript",
  "application/ecmascript"
];

module.exports = epub;

/**
 *
 * @param {string} file
 * @param {(import("vfile").VFile) => Promise<string} extract
 */
async function epub(file, extract, { sanitize = true }) {
  /**
   * @type {Object.<string, string>}
   */
  const urls = {};
  let container;
  await fs
    .createReadStream(file)
    .pipe(unzip.Parse())
    .on("entry", async entry => {
      if (entry.path === "META-INF/container.xml") {
        const content = await entry.buffer();
        container = content.toString();
      } else {
        entry.autodrain();
      }
    })
    .promise();
  // find OPF file from container
  const opfPath = container.match(/full-path="([^"]+)"/)[1];
  // Read OPF file from zip
  let book;
  let toc;
  await fs
    .createReadStream(file)
    .pipe(unzip.Parse())
    .on("entry", async entry => {
      if (entry.path === opfPath) {
        const content = await entry.buffer();
        book = parseOPF(content.toString(), opfPath);
      } else {
        entry.autodrain();
      }
    })
    .promise();
  // convert to publication
  // Use as reference when unzipping, deciding whether to sanitize or not.
  const bookStream = new Readable({
    read(size) {
      this.push(JSON.stringify(book));
      this.push(null);
    }
  });
  urls[path.join(file, "index.json")] = await extract(bookStream, {
    contentType: "application/json"
  });

  const tempDirectory = path.join(os.tmpdir(), path.basename(file), "/");
  const extractor = unzip.Extract({ path: tempDirectory });
  fs.createReadStream(file).pipe(extractor);
  await extractor.promise();
  if (sanitize) {
    for (const resource of book.resources) {
      if (
        resource.encodingFormat.includes("html") ||
        resource.encodingFormat.includes("svg")
      ) {
        const file = await fs.promises.readFile(
          path.join(tempDirectory, resource.url),
          "utf8"
        );
        const clean = purify(file, resource.url, resource.encodingFormat);
        const stream = new Readable({
          read(size) {
            this.push(clean);
            this.push(null);
          }
        });
        urls[resource.url] = await extract(stream, {
          contentType: resource.encodingFormat
        });
        if (resource.rel.includes("contents") || resource.rel.includes("ncx")) {
          toc = parseToC(clean, resource.url);
        }
      } else if (resource.encodingFormat.includes("css")) {
        const file = await fs.promises.readFile(
          path.join(tempDirectory, resource.url),
          "utf8"
        );
        const clean = await processCSS(file, resource.url);
        const stream = new Readable({
          read(size) {
            this.push(clean);
            this.push(null);
          }
        });
        urls[resource.url] = await extract(stream, {
          contentType: resource.encodingFormat
        });
      } else if (!JSTYPES.includes(resource.encodingFormat)) {
        const stream = fs.createReadStream(
          path.join(tempDirectory, resource.url)
        );
        urls[resource.url] = await extract(stream, {
          contentType: resource.encodingFormat
        });
      }
    }
  } else {
    for (const resource of book.resources) {
      const stream = fs.createReadStream(
        path.join(tempDirectory, resource.url)
      );
      urls[resource.url] = await extract(stream, {
        contentType: resource.encodingFormat
      });
    }
  }
  book.resources = book.resources.map(updateURL);
  book.readingOrder = book.readingOrder.map(updateURL);
  console.log(tempDirectory, rimraf, toc);
  // await rimraf(tempDirectory)
  return book;
  function updateURL(resource) {
    resource.url = urls[resource.url];
    return resource;
  }
}
