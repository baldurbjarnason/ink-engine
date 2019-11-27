
const fs = require('fs');
const unzip = require('unzipper');
const path = require('path');
const parseOPF = require('./opf.js')
const vfile = require('vfile')

const JSTYPES = [ "text/javascript", "text/ecmascript", "text/javascript1.0", "text/javascript1.1", "text/javascript1.2", "text/javascript1.3", "text/javascript1.4", "text/javascript1.5", "text/jscript", "text/livescript", "text/x-javascript", "text/x-ecmascript", "application/x-javascript", "application/x-ecmascript", "application/javascript", "application/ecmascript"]

module.exports = epub

/**
 * 
 * @param {string} file 
 * @param {(import("vfile").VFile) => Promise<string} extract 
 */
async function epub (file, extract) {
  /**
  * @type {Object.<string, string>}
  */
  const urls = {}
  let container
  await fs.createReadStream(file)
    .pipe(unzip.Parse())
    .on('entry', async entry => {
      if (entry.path === "META-INF/container.xml") {
        const content = await entry.buffer();
        container = content.toString()
      } else {
        entry.autodrain();
      }
    })
    .promise()
  // find OPF file from container
  const opfPath = container.match(/full-path="([^"]+)"/)[1];
  // Read OPF file from zip
  let book
  await fs.createReadStream(file)
  .pipe(unzip.Parse())
  .on('entry', async entry => {
    if (entry.path === opfPath) {
      const content = await entry.buffer();
      book = parseOPF(content.toString(), opfPath)
    } else {
      entry.autodrain();
    }
  })
  .promise()
  // convert to publication
  // Use as reference when unzipping, deciding whether to sanitize or not.
  const bookFile = vfile({
    data: {
      mediaType: {
        type: "application/json"
      }
    },
    contents: JSON.stringify(book),
    path: path.join(file, 'index.json')
  })
  urls[bookFile.path] = await extract(bookFile)
  for await (const entry of fs.createReadStream(file).pipe(unzip.Parse())) {
    const resource = getResource(book, entry.path)
    if (resource && !JSTYPES.includes(resource.encodingFormat)) {
      const contents = await entry.buffer();
      const entryFile = vfile({path: path.join(file, 'entry.path'), contents, data: {mediaType: {type: resource.encodingFormat}}})
      urls[entryFile.path] = await extract(entryFile)
    }
    entry.autodrain();
  }
  book.resources = book.resources.map(updateURL)
  book.readingOrder = book.readingOrder.map(updateURL)
  return book
  function updateURL (resource) {
    resource.url = urls[resource.url]
    return resource
  }
}


function getResource(book, entryPath) {
  return book.resources.filter(item => item.url === `/${entryPath}`)
}