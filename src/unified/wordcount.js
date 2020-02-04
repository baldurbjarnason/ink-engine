const size = require("unist-util-size");
const toString = require("nlcst-to-string");

function attacher(options) {
  return transformer;
  function transformer(node, file) {
    return count(node, file, options);
  }
}

module.exports = attacher;

function count(node, file) {
  console.log("Keywords:");
  const keywords = file.data.keywords.map(keyword =>
    toString(keyword.matches[0].node)
  );
  console.log(keywords);
  const keyphrases = file.data.keyphrases.map(phrase =>
    phrase.matches[0].nodes.map(value => toString(value)).join("")
  );
  console.log("Key-phrases:");
  console.log(keyphrases);
  file.data = Object.assign(
    {},
    file.data,
    {
      wordcount: size(node, "WordNode")
    },
    { keywords, keyphrases }
  );
}
