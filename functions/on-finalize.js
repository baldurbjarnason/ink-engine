const path = require('path');
const fs = require('fs');
const engine = require('../')
const os = require('os');
const formats = require('../formats')
const sharp = require('sharp')
const fetch = require('node-fetch');
const jwt = require('jsonwebtoken')

const THUMBSIZE = 400


module.exports = setup

// Test by mocking the admin, bucket, and file endpoints.
// Use fetch-mock to test API server update.
// This setup needs to take a done callback that knows what to do with the book and what to do if there is an error.
function setup (admin) {
  return async function onFinalize (object, context) {
    const fileBucket = object.bucket;
    const filePath = object.name;
    const fileName = path.basename(filePath);
    const contentType = object.contentType;
    const [userType, userId, , pubId] = filePath.split('/')
    if (!userId || !pubId) return
    if (!formats[contentType]) return
    // The user id here has to be the sub/account id, not the profile id
    // The pubId should be the publication pathname, not its full URL
    const targetPath = [userType, userId, 'documents', pubId].join('/')
    const thumbnailPath = [userType, userId, 'thumbnails', pubId].join('/')
    const bucket = admin.storage().bucket(fileBucket);
    const tempFilePath = path.join(os.tmpdir(), fileName);
    await bucket.file(filePath).download({destination: tempFilePath});
    let book
    try {
      book = await engine(tempFilePath, extract, {type: contentType})
    } catch (err) {
      console.error(err)
      // In case of error, the original publication needs to be updated to note that importing the book failed.
      // Also needs to add the file to the resources list as an alternate as we do on success.
    }
    if (book) {
      // make api server request to update publication
      book.resources = book.resources.concat({
        type: "LinkedResource",
        rel: ["alternate"],
        url: `https://storage.googleapis.com/${fileBucket}/${filePath}`,
        encodingFormat: "contentType"
      })
      await updatePub({publication: pubId, payload: book, userId})
      // Then add to firestore as well?
      // const database = admin.firestore();
      // book.updated = admin.firestore.FieldValue.serverTimestamp()
      // book.created = admin.firestore.FieldValue.serverTimestamp()
      // book.id = pubId
      // database.collection('users').doc(userId).collection('publications').add(book)
    }
    fs.unlinkSync(tempFilePath);
    async function extract (file, resource, metadata) {
      // Should also generate thumbnails of all images.
      let thumb
      if (resource.encodingFormat.includes('image')) {
        try {
          thumb = await sharp(file.contents)
            .resize(THUMBSIZE, THUMBSIZE, { fit: "inside" })
            .jpeg({ quality: 60 })
            .toBuffer();
        } catch (err) {
          console.error(err)
        }
      }
      const filename = path.join(targetPath, resource.url)
      const storageFile = bucket.file(filename);
      await storageFile.save(file.contents, {
        metadata,
        resumable: false
      });
      if (thumb) {
        const thumbname = path.join(thumbnailPath, resource.url)
        const storageThumb = bucket.file(thumbname);
        await storageThumb.save(thumb, {
          metadata,
          resumable: false
        });
      }
      // This is not actually public. The `storage.googleapis.com` domain should tell the front end to load the asset via the storage API
      // Maybe by generating a signed URL and redirecting to it? Only if it's an image? Use redis to cache everything?
      // This is basically `https://storage.googleapis.com/:bucket/user/:user_id/publication/:pub_id/:path+`
      return `https://storage.googleapis.com/${fileBucket}/${filename}`
    }
  }
}


async function updatePub ({publication, payload, userId}) {
  try {
    await fetch(`${process.env.API_SERVER}${publication}`, {
      method: "PATCH",
      body: JSON.stringify(payload),
      headers: new window.Headers({
        "content-type": "application/json",
        Authorization: `Bearer ${generateToken(userId)}`
      })
    });
  } catch (err) {
    err.httpMethod = "POST/Create Profile";
    console.error("fetch error:", err);
  }
}


function generateToken (userId) {
  const expiresIn = "30m";
  return jwt.sign({ sub: userId }, process.env.SECRETORKEY, {
    algorithm: "HS256",
    expiresIn,
    audience: process.env.AUDIENCE,
    issuer: process.env.ISSUER
  });
}