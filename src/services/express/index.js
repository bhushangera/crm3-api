import express from "express";
import cors from "cors";
import compression from "compression";
import bodyParser from "body-parser";
import { errorHandler as queryErrorHandler } from "querymen";
import { errorHandler as bodyErrorHandler } from "bodymen";
const multer = require("multer");
const Razorpay = require("razorpay");

export default (apiRoot, routes) => {
  const app = express();

  app.use(
    cors({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type,X-Auth-Token, Accept",
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    })
  );
  // app.use(cors())

  // app.use(bodyParser.urlencoded({ extended: false }));
  // app.use(bodyParser.json());
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
  app.use(apiRoot, routes);
  app.use(queryErrorHandler());
  app.use(bodyErrorHandler());
  app.use(express.static("public"));
  // app.set('view-engine', 'html');
  // app.use(express.static(__dirname + '/public'));

  const MIME_TYPE_MAP = {
    "image/png": "png",
    "image/jpeg": "jpg",
    "image/jpg": "jpg",
    "application/pdf": "pdf",
    "application/msword": "doc",
    "application/vnd.ms-excel": "xls",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": "xlsx",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
      "docx",
  };

  var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "public/images/uploads");
    },
    filename: (req, file, cb) => {
      // const name = file.fieldname + '-' + Date.now();
      const name = file.originalname.toLowerCase().split(" ").join("-");
      const ext = MIME_TYPE_MAP[file.mimetype];
      cb(null, name + "-" + Date.now() + "." + ext);
    },
  });
  var upload = multer({
    storage: storage,
    limits: { fileSize: 1024 * 1024 * 5 },
  }).single("image");

  app.post("/uploads", upload, (req, res, next) => {
    if (!req.file) {
      res.send("please upload a file");
    } else {
      res.send(req.file);
    }
    // res.json({"result" , req.file.filename});
  });

  app.get("/", function (req, res) {
    res.render("index", {});
  });



  return app;
};
