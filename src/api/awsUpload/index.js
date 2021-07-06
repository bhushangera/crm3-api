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
  const s3FileURL = process.env.AWS_Uploaded_File_URL_LINK;

  let s3bucket = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
  });

  var params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: Date.now() + file.originalname,
    Body: file.buffer,
    ContentType: file.mimetype,
    ACL: "public-read",
  };

  s3bucket.upload(params, function (err, data) {
    if (err) {
      res.status(500).json({ error: true, Message: err });
    } else {
      var fileDetails = {
        fieldname: req.file.filename || 'filename',
        originalname: req.file.originalname,
        encoding: req.file.encoding,
        mimetype: req.file.mimetype,
        destination: req.file.destination,
        filename: req.file.filename,
        path: req.file.path,
        size: req.file.size,
        // amazon
        ETag: data.ETag,
        VersionId: data.VersionId,
        Location: data.Location,
        key: data.Key,
        Bucket: data.Bucket
      };

      res.send(Object.assign({}, fileDetails))
      // res.send(data)
      // var newFileUploaded = {
      //   description: req.body.description,
      //   fileLink: s3FileURL + file.originalname,
      //   s3_key: params.Key
      // };
      // // var document = new DOCUMENT(newFileUploaded);
      // document.save(function (error, newFile) {
      //   if (error) {
      //     throw error;
      //   }
      // });
    }
  });
});

// router.route("/:id").delete((req, res, next) => {
//   DOCUMENT.findByIdAndRemove(req.params.id, (err, result) => {
//     if (err) {
//       return next(err);
//     }
//     //Now Delete the file from AWS-S3
//     // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#deleteObject-property
//     let s3bucket = new AWS.S3({
//       accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//       secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//       region: process.env.AWS_REGION,
//     });

//     let params = {
//       Bucket: process.env.AWS_BUCKET_NAME,
//       Key: result.s3_key,
//     };

//     s3bucket.deleteObject(params, (err, data) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.send({
//           status: "200",
//           responseType: "string",
//           response: "success",
//         });
//       }
//     });
//   });
// });

module.exports = router;
