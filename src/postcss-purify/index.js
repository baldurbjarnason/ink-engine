const postcss = require('postcss')
const values = require('postcss-value-parser');
const testProp = require("../allowed-css-props.js");
const validDataUrl = require('valid-data-url')

// Some of the ideas here are from https://github.com/eramdam/postcss-sanitize/blob/master/index.js MIT License

const startParenthesis = /^\(/;
const endParenthesis = /\)$/;

const deleteEmptyRules = (rule) => {
  if (rule.nodes.length === 0)
    rule.remove();
};

module.exports = postcss.plugin('postcss-purify', ({base}) => {
  return (css, result) => {

    css.walkAtRules('import', (rule) => {
      const url = rule.params.replace(startParenthesis, '').replace(endParenthesis, '');
      if (!testPath(url, base)) {
        rule.remove();
      }
    });

    css.walkDecls(decl => {
      if (!testProp(decl.prop, decl.value)) {
        decl.remove();
      }

      const parsed = values(decl.value);
      parsed.walk((node) => {
        if (node.type === 'function' && node.value === 'url') {
          node.nodes.forEach((urlNode) => {
            if (!testPath(urlNode.value, base) || !validDataUrl(urlNode.value)) {
              urlNode.value = '';
            }
          });
        }
      });

      decl.value = parsed.toString();
    });

    css.walkRules(rule => deleteEmptyRules(rule));
  }
})

function testPath (path, resourceURL) {
  const base = new URL(resourceURL, "http://example.com")
  const url = new URL(path, base)
  // If the hostname doesn't equal that of the base URL we provided, then it is a full URL and so not supported
  return url.hostname === base.hostname
}