
const os = require('os');
const fs = require('fs');
const path = require('path');
const mammoth = require("mammoth");
const purify = require('../dompurify')
const Readable = require('stream').Readable
const util = require('util');
const rimraf = util.promisify(require('rimraf'))

module.exports = async function docx (filepath, extract, {sanitize = true}) {
  const html = await mammoth.convertToHtml({path: filepath})
  const md = await mammoth.convertToHtml({path: filepath})
  const book = {
    name: path.basename(filepath, '.docx'),
    resource: [
      {
        "url": "/index.html",
        "rel": ["alternate"],
        "encodingFormat": "text/html"
      },
      {
        "url": "/index.md",
        "rel": ["alternate"],
        "encodingFormat": "text/markdown"
      }],
      readingOrder: [
        {
          "url": "/index.html",
          "rel": [],
          "encodingFormat": "text/html"
        }]
  }
  const urls = {}
  // convert to publication
  // Use as reference when unzipping, deciding whether to sanitize or not.

  const clean = purify(wrap(html.value, book.name), 'index.html')
  const tempDirectory = path.join(os.tmpdir(), path.basename(filepath), '/');
  await fs.promises.writeFile(path.join(tempDirectory, 'index.html'), clean)
  await fs.promises.writeFile(path.join(tempDirectory, 'index.md'), md)
  for (const resource of book.resources) {
    const stream = fs.createReadStream(path.join(tempDirectory, resource.url))
    urls[resource.url] = await extract(stream, {contentType: resource.encodingFormat})
  }
  const bookStream = new Readable({
    read (size) {
      this.push(JSON.stringify(book))
      this.push(null)
    }
  })
  urls[path.join(filepath, 'index.json')] = await extract(bookStream, {contentType: "application/json"} );
  
  book.resources = book.resources.map(updateURL)
  book.readingOrder = book.readingOrder.map(updateURL)
  console.log(tempDirectory, rimraf)
  // await rimraf(tempDirectory)
  return book
  function updateURL (resource) {
    resource.url = urls[resource.url]
    return resource
  }
}

function wrap (body, title) {
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
  `
}