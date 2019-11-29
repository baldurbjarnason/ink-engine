const tap = require("tap");
const parseToC = require("../src/formats/epub-nav.js");
const fs = require("fs");
const path = require("path");

tap.test("parseToC - epub2", async test => {
  const chapter = fs.readFileSync(
    path.join(__dirname, "./fixtures/demo-epub/pg55456-images/OEBPS/toc.ncx"),
    "utf8"
  );
  const result = await parseToC(
    chapter,
    "https://example.com/fixtures/demo-epub/pg55456-images/OEBPS/toc.ncx"
  );
  test.matchSnapshot(result, "parseToC - epub2");
});
tap.test("parseToC - epub3", async test => {
  const chapter = fs.readFileSync(
    path.join(
      __dirname,
      "./fixtures/demo-epub/childrens-literature/EPUB/nav.xhtml"
    ),
    "utf8"
  );
  const result = await parseToC(
    chapter,
    "https://example.com/fixtures/demo-epub/childrens-literature/EPUB/nav.xhtml"
  );
  test.matchSnapshot(result, "parseToC - epub3");
});

tap.test("parseToC - epub3 - 2", async test => {
  const result = await parseToC(
    `<?xml version="1.0" encoding="utf-8"?>
  <!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops"
    lang="html-lang">
    <head>
      <title>Children's Literature</title>
      <link href="css/epub.css" rel="stylesheet" type="text/css"/>
      <link href="css/nav.css" rel="stylesheet" type="text/css"/>
    </head>
    <body>
      <nav epub:type="toc" id="toc">
        <ol id="tocList">
          <li id="np-313">
            <a href="s04.xhtml#pgepubid00492">SECTION IV FAIRY STORIES—MODERN FANTASTIC TALES</a>
          </li>
        </ol>
      </nav>
    </body>
  </html>
  `,
    "https://example.com/fixtures/demo-epub/childrens-literature/EPUB/nav.xhtml"
  );
  test.matchSnapshot(result, "parseToC - epub3 - 2");
});
tap.test("parseToC - epub3 - 3", async test => {
  const result = await parseToC(
    `<?xml version="1.0" encoding="utf-8"?>
  <!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops">
    <head>
      <title>Children's Literature</title>
      <link href="css/epub.css" rel="stylesheet" type="text/css"/>
      <link href="css/nav.css" rel="stylesheet" type="text/css"/>
    </head>
    <body>
      <nav epub:type="toc" id="toc" xml:lang="en">
        <h2>THE CONTENTS</h2>
        <ol id="tocList">
          <li id="np-313">
            <a href="s04.xhtml#pgepubid00492">SECTION IV FAIRY STORIES—MODERN FANTASTIC TALES</a>
          </li>
        </ol>
      </nav>
    </body>
  </html>
  `,
    "https://example.com/fixtures/demo-epub/childrens-literature/EPUB/nav.xhtml"
  );
  test.matchSnapshot(result, "parseToC - epub3 - 3");
});
