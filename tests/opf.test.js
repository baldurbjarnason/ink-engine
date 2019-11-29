const tap = require("tap");
const parseOPF = require("../src/formats/opf");
const fs = require("fs");
const path = require("path");

tap.test("parseOPF - epub2", async test => {
  const bookMeta = fs.readFileSync(
    path.join(
      __dirname,
      "./fixtures/demo-epub/pg55456-images/OEBPS/content.opf"
    ),
    "utf8"
  );
  const result = await parseOPF(
    bookMeta,
    "demo-epub/pg55456-images/OEBPS/content.opf"
  );
  test.matchSnapshot(result, "parseOPF - epub2");
});
tap.test("parseOPF - epub3", async test => {
  const bookMeta = fs.readFileSync(
    path.join(
      __dirname,
      "./fixtures/demo-epub/childrens-literature/EPUB/package.opf"
    ),
    "utf8"
  );
  const result = await parseOPF(
    bookMeta,
    "demo-epub/childrens-literature/EPUB/package.opf"
  );
  test.matchSnapshot(result, "parseOPF - epub3");
});
