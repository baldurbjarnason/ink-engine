const tap = require("tap");
// const process = require("../");
const epub = require("../src/formats/epub");
const fs = require("fs");
const path = require("path");
// const os = require("os");

const epubPath = path.join(__dirname, "fixtures/moby-dick.epub");

tap.test("epub process", async test => {
  for await (const vfile of epub({
    data: fs.readFileSync(path.join(__dirname, "fixtures/test-epub-js.epub"))
  })) {
    if (!vfile.data) {
      test.matchSnapshot(vfile, "epub book result");
    } else {
      test.matchSnapshot(vfile.contents, "epub file " + vfile.path);
      test.matchSnapshot(
        vfile.data.resource,
        "epub resource " + vfile.data.resource.url
      );
    }
  }
});

tap.test("epub process - sanitise false", async test => {
  for await (const vfile of epub({
    filename: epubPath
  })) {
    if (!vfile.data) {
      test.matchSnapshot(vfile, "epub book 2 result");
    } else {
      test.matchSnapshot(
        Buffer.from(vfile.contents),
        "epub file 2 " + vfile.path
      );
      test.matchSnapshot(
        vfile.data.resource,
        "epub resource 2 " + vfile.data.resource.url
      );
    }
  }
});
