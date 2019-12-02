const os = require("os");
const fs = require("fs");
const path = require("path");
const mammoth = require("mammoth");
const purify = require("../dompurify");
const util = require("util");
const rimraf = util.promisify(require("rimraf"));
const vfile = require("vfile");
const options = {
  styleMap: [
    "p[style-name='Title'] => h1:fresh",
    "p[style-name='Quote'] => blockquote:fresh",
    "r[style-name='Emphasis'] => em:fresh",
    "p[style-name='Intense Quote'] => blockquote:fresh",
    "p[style-name='Section Title'] => h2:fresh",
    "p[style-name='Subsection Title'] => h3:fresh"
  ]
};

module.exports = async function docx(filepath, extract, { sanitize = true }) {
  const html = await mammoth.convertToHtml({ path: filepath }, options);
  const book = {
    name: path.basename(filepath, ".docx"),
    resources: [
      {
        url: "index.html",
        rel: ["alternate"],
        encodingFormat: "text/html"
      }
    ],
    readingOrder: [
      {
        url: "index.html",
        rel: [],
        encodingFormat: "text/html"
      }
    ]
  };
  const urls = {};
  // convert to publication
  // Use as reference when unzipping, deciding whether to sanitize or not.

  const clean = await purify(wrap(html.value, book.name), "index.html");
  const tempDirectory = path.join(os.tmpdir(), path.basename(filepath), "/");
  await fs.promises.writeFile(path.join(tempDirectory, "index.html"), clean);
  const htmlfile = vfile({
    contents: clean,
    path: "index.html",
    messages: html.messages
  });
  urls["index.html"] = await extract(htmlfile, book.resources[0], {
    contentType: "text/html"
  });
  const bookFile = vfile({
    contents: JSON.stringify(book),
    path: "index.json"
  });
  urls["index.json"] = await extract(bookFile, book, {
    contentType: "application/json"
  });

  book.resources = book.resources.map(updateURL);
  book.readingOrder = book.readingOrder.map(updateURL);
  await rimraf(tempDirectory);
  return book;
  function updateURL(resource) {
    resource.url = urls[resource.url];
    return resource;
  }
};

function wrap(body, title) {
  return `<!doctype html>
  <html>
  <head>
    <meta charset='utf-8'>
    <meta name='viewport' content='width=device-width,initial-scale=1.0'>
    <title>${title}</title>
  </head>
  <body id="body">
  ${body}
  </body>
  </html>
  `;
}
