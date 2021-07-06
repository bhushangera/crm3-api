import { Router } from "express";
import { middleware as query } from "querymen";
import { middleware as body } from "bodymen";
import { create, index, show, update, destroy } from "./controller";
import { schema } from "./model";
import SendMail from "./model";
export SendMail, { schema } from "./model";

const router = new Router();
const {
  mailDate,
  from,
  senderId,
  to,
  receiverId,
  subject,
  text,
  deleted,
  read,
  receiverName,
} = schema.tree;

/**
 * @api {post} /sendMail Create send mail
 * @apiName CreateSendMail
 * @apiGroup SendMail
 * @apiParam mailDate Send mail's mailDate.
 * @apiParam from Send mail's from.
 * @apiParam senderId Send mail's senderId.
 * @apiParam to Send mail's to.
 * @apiParam receiverId Send mail's receiverId.
 * @apiParam subject Send mail's subject.
 * @apiParam body Send mail's body.
 * @apiParam deleted Send mail's deleted.
 * @apiParam read Send mail's read.
 * @apiSuccess {Object} sendMail Send mail's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Send mail not found.
 */
var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  host: process.env.HOST,
  port: process.env.EPORT,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  },
  tls: {
    rejectUnauthorized: false,
  },
});
transporter.verify(function (error, success) {
  console.log(process.env.EMAIL)
  console.log(process.env.EPORT)
  if (error) {
    console.log(error)
  } else {
    console.log("Server is ready to take our messages");
  }
});

router.post("/", function (req, res) {
  let object = new SendMail({
    mailDate: req.body.mailDate,
    from: req.body.from,
    senderId: req.body.senderId,
    to: req.body.to,
    receiverId: req.body.receiverId,
    receiverName: req.body.receiverName,
    subject: req.body.subject,
    text: req.body.text,
    deleted: req.body.deleted,
    read: req.body.read,
  });
  object
    .save()
    .then((data) => {
      res.send(data);
      const mailOptions = {
        from: data.from, // sender address
        to: data.to, // list of receivers
        subject: data.subject, // Subject line
        html: data.text, // plain text body
      };
      transporter.sendMail(mailOptions, function (err, info) {
        if (err) console.log(err);
        else console.log(info);
        res.send("email send successfully");
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while sending the email.",
      });
    });
  return;
});
/**
 * @api {get} /sendMail Retrieve send mails
 * @apiName RetrieveSendMails
 * @apiGroup SendMail
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of send mails.
 * @apiSuccess {Object[]} rows List of send mails.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/", query(), index);

/**
 * @api {get} /sendMail/:id Retrieve send mail
 * @apiName RetrieveSendMail
 * @apiGroup SendMail
 * @apiSuccess {Object} sendMail Send mail's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Send mail not found.
 */
router.get("/:id", show);

/**
 * @api {put} /sendMail/:id Update send mail
 * @apiName UpdateSendMail
 * @apiGroup SendMail
 * @apiParam mailDate Send mail's mailDate.
 * @apiParam from Send mail's from.
 * @apiParam senderId Send mail's senderId.
 * @apiParam to Send mail's to.
 * @apiParam receiverId Send mail's receiverId.
 * @apiParam subject Send mail's subject.
 * @apiParam body Send mail's body.
 * @apiParam deleted Send mail's deleted.
 * @apiParam read Send mail's read.
 * @apiSuccess {Object} sendMail Send mail's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Send mail not found.
 */
router.put(
  "/:id",
  body({
    mailDate,
    from,
    senderId,
    to,
    receiverId,
    subject,
    text,
    deleted,
    read,
    receiverName,
  }),
  update
);

/**
 * @api {delete} /sendMail/:id Delete send mail
 * @apiName DeleteSendMail
 * @apiGroup SendMail
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Send mail not found.
 */
router.delete("/:id", destroy);

export default router;
