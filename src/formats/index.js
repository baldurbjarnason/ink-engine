const docx = require("./docx");
const epub = require("./epub");

module.exports = {
  "application/epub+zip": epub,
  epub: epub,
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": docx,
  docx: docx
};
