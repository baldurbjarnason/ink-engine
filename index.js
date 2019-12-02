const formats = require("./src/formats");
const path = require("path");

module.exports = function process(filePath, extract, options = {}) {
  if (formats[options.type]) {
    return formats[options.type](filePath, extract, options);
  } else {
    const ext = path.extname(filePath).replace(".", "");
    return formats[ext](filePath, extract, options);
  }
};
