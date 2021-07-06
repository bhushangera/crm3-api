// 'use strict'
require("dotenv").config();
const express = require("express");
const router = express.Router();
const multer = require("multer");
var AWS = require("aws-sdk");

var storage = multer.memoryStorage();
var upload = multer({ storage: storage });

router.post("/", upload.single("image"), function (req, res) {
  const file = req.file;
  const s3FileURL = process.env.BUCKET_Uploaded_File_URL_LINK;

  let s3bucket = new AWS.S3({
    accessKeyId: process.env.BUCKET_ACCESS_KEY_ID,
    secretAccessKey: process.env.BUCKET_SECRET_ACCESS_KEY,
    region: process.env.BUCKET_REGION,
  });

  var params = {
    Bucket: process.env.BUCKET_BUCKET_NAME,
    Key: Date.now() + file.originalname,
    Body: file.buffer,
    ContentType: file.mimetype,
    ACL: "public-read",
  };

  s3bucket.upload(params, function (err, data) {
    if (err) {
      res.status(500).json({ error: true, Message: err });
    } else {
      // console.log(req.file)
      var fileDetails = {
        fieldname: req.file.fieldname || 'filename',
        originalname: req.file.originalname,
        encoding: req.file.encoding,
        mimetype: req.file.mimetype,
        // destination: req.file.destination,
        // filename: req.file.filename,
        // path: req.file.path,
        size: req.file.size,
        // amazon
        ETag: data.ETag,
        VersionId: data.VersionId,
        Location: data.Location,
        key: data.Key,
        Bucket: data.Bucket
      };
      res.send(Object.assign({}, fileDetails))
    }
  });
});



module.exports = router;
