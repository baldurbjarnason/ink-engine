// This file needs to load the test pdf, import pdf.js and use it as an async iterator to get all of the vfiles, taking a snapshot of each.

const tap = require("tap");
// const process = require("../");
const pdf = require("../src/formats/pdf.js");
const fs = require("fs");
const path = require("path");
// const os = require("os");

const pdfPath = path.join(__dirname, "fixtures/test-file.pdf");

tap.test("pdf process", async test => {
  const file = await fs.promises.readFile(pdfPath);
  for await (const vfile of pdf({ data: file, filename: "test.pdf" })) {
    test.matchSnapshot(vfile.contents, "pdf file test-file.pdf contents");
    test.matchSnapshot(vfile.path, "pdf file test-file.pdf path");
  }
});
