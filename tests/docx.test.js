const tap = require("tap");
const docx = require("../src/formats/docx");
// const fs = require("fs");
const path = require("path");
const os = require("os");

tap.cleanSnapshot = s => {
  const tempdir = os.tmpdir();
  const reg = new RegExp(`"${tempdir}[^"]+"`, "g");
  return s.replace(reg, '"TMPDIR"');
};

const docxPath = path.join(__dirname, "fixtures/test.docx");

tap.test("docx process", async test => {
  for await (const vfile of docx({
    filename: docxPath
  })) {
    if (!vfile.data) {
      test.matchSnapshot(vfile, "docx first result");
    } else {
      test.matchSnapshot(vfile.contents, "docx file " + vfile.path);
      test.matchSnapshot(
        vfile.data.resource,
        "docx resource " + vfile.data.resource.url
      );
    }
  }
});
