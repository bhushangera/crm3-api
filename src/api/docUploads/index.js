import { Router } from 'express'
import { middleware as query } from 'querymen'
import { create, index, show, update, destroy } from './controller'
const multer = require('multer')

const router = new Router()


const MIME_TYPE_MAP = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/jpg": "jpg",
  "application/pdf": "pdf",
  "application/msword": "doc",
  "application/vnd.ms-excel":"xls",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":"xlsx",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document":"docx",
};

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/documents')
  },
  filename: (req, file, cb) => {
    const name = file.originalname
      .toLowerCase()
      .split(" ")
      .join("-");
    const ext = MIME_TYPE_MAP[file.mimetype];
    cb(null, name + "-" + Date.now() + "." + ext);
  }
});
var upload = multer({storage: storage}).single('image');
router.post('/', upload, (req,res,next) => {
res.send(req.file);
// res.json({"result" , req.file.filename});
});

export default router
