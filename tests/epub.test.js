const tap = require("tap");
// const process = require("../");
const Epub = require("../src/formats/EpubProcess");
const fs = require("fs");
const path = require("path");
// const os = require("os");

const epubPath = path.join(__dirname, "fixtures/moby-dick.epub");

tap.test("epub process", async test => {
  const processor = new Epub(
    path.join(__dirname, "fixtures/test-epub-js.epub"),
    { extract }
  );
  function extract(vfile, resource, metadata) {
    test.matchSnapshot(vfile.contents, "epub file " + resource.url);
    test.matchSnapshot(resource, "epub resource " + resource.url);
    return Promise.resolve("uploaded/" + resource.url);
  }
  const result = await processor.process();
  test.matchSnapshot(result, "epub book result");
});

tap.test("epub process - sanitise false", async test => {
  const processor = new Epub(epubPath, { extract });
  function extract(vfile, resource, metadata) {
    test.matchSnapshot(vfile.contents, "epub file 2 " + resource.url);
    test.matchSnapshot(resource, "epub resource 2 " + resource.url);
    return Promise.resolve("uploaded/" + resource.url);
  }
  const result = await processor.process();
  test.matchSnapshot(result, "epub book 2 result");
});
