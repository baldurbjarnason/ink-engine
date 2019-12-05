const tap = require("tap");
// const unified = require("../src/unified");
const Parser = require("../src/unified/parse");

const parser = new Parser().Parser;
const vfile = require("vfile");

tap.test("processCSS", async test => {
  const html = `<?xml version="1.0" encoding="utf-8"?>
  <!DOCTYPE html><html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops" xml:lang="en"
  lang="en"><head>
  <style>body {position: fixed; background-color: red;}</style>
  </head><body>
  <br>
  <h1>Test</h1>
  <p><img src="/image.png" /></p>
  </body></html>`;

  const file = vfile({
    contents: html,
    path: "testpath"
  });
  file.data = {
    resource: {
      encodingFormat: "application/xhtml+xml"
    }
  };
  const result = await parser(null, html);
  test.matchSnapshot(result, "parse xhtml, invalid");
});
