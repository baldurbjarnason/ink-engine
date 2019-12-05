const tap = require("tap");
const setup = require("../functions/on-finalize");
const fs = require("fs");
const path = require("path");
const os = require("os");

const epubPath = path.join(__dirname, "fixtures/test-epub.epub");
tap.cleanSnapshot = s => {
  const tempdir = os.tmpdir();
  const reg = new RegExp(`"${tempdir}[^"]+`, "g");
  return s.replace(reg, "");
};

tap.test("upload finalize", async test => {
  // Mocks
  const admin = {
    storage() {
      return {
        bucket() {
          return bucket;
        }
      };
    }
  };

  const bucket = {
    file(filename) {
      return {
        download({ destination }) {
          // copy test file to destination
          return fs.promises.copyFile(epubPath, destination);
        },
        save(contents, options) {
          test.matchSnapshot(contents, "epub finalize " + filename);
          test.matchSnapshot(options, "epub finalize options " + filename);
        }
      };
    }
  };
  const finalise = setup(admin, done);
  await finalise({
    name: "user/user-123/publications/test-1234/test-epub.epub",
    bucket: "test-bucket",
    contentType: "application/epub+zip"
  });
  function done(err, result) {
    test.notOk(err);
    test.matchSnapshot(result, "epub first result");
  }
});

const docxPath = path.join(__dirname, "fixtures/test.docx");

tap.test("upload finalize docx", async test => {
  // Mocks
  const admin = {
    storage() {
      return {
        bucket() {
          return bucket;
        }
      };
    }
  };

  const bucket = {
    file(filename) {
      return {
        download({ destination }) {
          // copy test file to destination
          return fs.promises.copyFile(docxPath, destination);
        },
        save(contents, options) {
          test.matchSnapshot(contents, "docx finalize " + filename);
          test.matchSnapshot(options, "docx finalize options " + filename);
        }
      };
    }
  };
  const finalise = setup(admin, done);
  await finalise({
    name: "user/user-123/publications/test-1234/test.docx",
    bucket: "test-bucket",
    contentType:
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  });
  function done(err, result) {
    test.notOk(err);
    test.matchSnapshot(result, "docx first result");
  }
});
