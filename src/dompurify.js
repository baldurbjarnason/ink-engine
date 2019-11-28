const createDOMPurify = require('dompurify');
const { JSDOM } = require('jsdom');
const testProp = require("./allowed-css-props.js");
const validDataUrl = require('valid-data-url')

const purifyConfig = {
  KEEP_CONTENT: false,
  IN_PLACE: true,
  WHOLE_DOCUMENT: true,
  ALLOW_TAGS: ["reader-highlight"],
  FORBID_TAGS: ["meta", "form", "title"],
  FORBID_ATTR: ["srcset", "action", "background", "poster"]
};

// In theory this should work for SVG images as well.
module.exports = function purifyChapter(
  chapter,
  chapterPath,
  contentType = "text/html"
) {
  const resourceURL = new URL(chapterPath, 'https://example.com/');
  let dom;
  try {
    dom = new JSDOM(chapter, {
      contentType
    });
  } catch (err) {
    // console.log(err);
    dom = new JSDOM(chapter, {
      contentType: "text/html"
    });
  }
  const window = dom.window;
  const clean = purify(resourceURL, window)
  return dom.serialize(clean)
}

function purify (resourceURL, window) {
  const DOMPurify = createDOMPurify(window);
  // Based on sample from https://github.com/cure53/DOMPurify/tree/master/demos, same license as DOMPurify

  function processURL(prop) {
    const href = /url\("?([^)|"]+)(?!data:)/gim.exec(prop)[1];
    const url = new URL(href, resourceURL);
    if (
      url.host === resourceURL.host &&
      url.protocol === resourceURL.protocol
    ) {
      return `url("${href}")`;
    } else {
      return null;
    }
  }

  function addStyles(output, styles) {
    for (var prop = styles.length - 1; prop >= 0; prop--) {
      const regex = /url\("?([^)|"]+)(?!data:)/gim;
      if (styles[styles[prop]] && regex.test(styles[styles[prop]])) {
        var url = processURL(styles[styles[prop]]);
        styles[styles[prop]] = url;
      }
      if (
        styles[styles[prop]] &&
        typeof styles[styles[prop]] === "string" &&
        testProp(styles[prop])
      ) {
        output.push(styles[prop] + ":" + styles[styles[prop]] + ";");
      }
    }
  }

  function addCSSRules(output, cssRules) {
    for (var index = cssRules.length - 1; index >= 0; index--) {
      var rule = cssRules[index];
      // check for rules with selector
      if (rule.type === 1 && rule.selectorText) {
        output.push(rule.selectorText + "{");
        if (rule.style) {
          addStyles(output, rule.style);
        }
        output.push("}");
        // check for @media rules
      }
    }
  }

  DOMPurify.addHook("uponSanitizeElement", function(node, data) {
    if (data.tagName === "style") {
      var output = [];
      addCSSRules(output, node.sheet.cssRules);
      node.textContent = output.join("\n");
    }
    if (
      node.getAttributeNS &&
      node.getAttributeNS("http://www.idpf.org/2007/ops", "type")
    ) {
      node.dataset.epubType = node.getAttributeNS(
        "http://www.idpf.org/2007/ops",
        "type"
      );
    }
  });
  DOMPurify.addHook("afterSanitizeAttributes", function(node) {
    if (node.hasAttribute("style")) {
      var styles = node.style;
      var output = [];
      for (var prop = styles.length - 1; prop >= 0; prop--) {
        // we re-write each property-value pair to remove invalid CSS
        const regex = /url\("?([^)|"]+)(?!data:)/gim;
        if (node.style[styles[prop]] && regex.test(node.style[styles[prop]])) {
          node.style[styles[prop]] = processURL(node.style[styles[prop]]);
        }
        if (node.style[styles[prop]]) {
          output.push(styles[prop] + ":" + node.style[styles[prop]] + ";");
        }
      }
      // re-add styles in case any are left
      if (output.length) {
        node.setAttribute("style", output.join(""));
      } else {
        node.removeAttribute("style");
      }
    }
    // All src urls must be relative. This will have to be improved once we start expanding our format support
    if (node.hasAttribute("src") && (!testPath(node.getAttribute("src"), resourceURL) || validDataUrl(node.getAttribute("src")))) {
      node.removeAttribute("src")
    }
    if (node.hasAttribute("href") && !testPath(node.getAttribute("href"), resourceURL)) {
      node.removeAttribute("href")
    }
  });
  return DOMPurify.sanitize(
    window.document.documentElement,
    purifyConfig
  );

}

function testPath (path, resourceURL) {
  const base = new URL(resourceURL, "http://example.com")
  const url = new URL(path, base)
  // If the hostname doesn't equal that of the base URL we provided, then it is a full URL and so not supported
  return url.hostname === base.hostname
}
