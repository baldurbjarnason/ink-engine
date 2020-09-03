const docx = require("./docx");
const epub = require("./epub");
const markup = require("./markup");
const pdf = require("./pdf");

async function* process (mediaType, options) {
  let processor
  switch (mediaType) {
    case "epub":
    case "application/epub+zip":
      processor = epub
      break;
    case "docx":
    case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
      processor = docx
      break;
    case "html":
    case "text/html":
      processor = markup
      break;
    case "pdf":
    case "application/pdf":
      processor = pdf
      break;
    default:
      processor = pdf
      break;
  }
  yield* processor(options)
}

module.exports = process