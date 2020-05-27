const unified = require("unified");
const transformer = require("./transformer");
const html = require("rehype-stringify");

module.exports = function getProcessor(options) {
  return unified()
    .use(transformer, options)
    .use(html);
};
