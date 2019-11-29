const postcss = require("postcss");
const purify = require("./postcss-purify");
const prefixer = require("postcss-prefix-selector");
const selectorParser = require("postcss-selector-parser");
function processor(root) {
  root.walkTags(tagNode => {
    if (tagNode.value === "body") {
      tagNode.replaceWith(selectorParser.tag({ value: "ink-body" }));
    } else if (tagNode.value === "html") {
      tagNode.replaceWith(selectorParser.tag({ value: "ink-html" }));
    }
  });
}
const selectorProcessor = selectorParser(processor);
const replaceRootsWithCustomElements = postcss.plugin(
  "classValidator",
  options => {
    return root => {
      root.walkRules(rule => {
        rule.selector = selectorProcessor.processSync(rule.selector);
      });
    };
  }
);

module.exports = async function processCSS(css, base, prefix = "#ink-engine") {
  const result = await postcss([
    purify({ base }),
    prefixer({ prefix }),
    replaceRootsWithCustomElements()
  ]).process(css, { from: base, to: base });
  return result.css;
};
