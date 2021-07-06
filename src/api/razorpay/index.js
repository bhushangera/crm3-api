import { Router } from "express";
const Razorpay = require("razorpay");
const router = new Router();

const instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY,
  key_secret: process.env.RAZORPAY_SECRET,
});
// create order done
router.post("/createOrder", (req, res) => {
  // res.send(req.body)
  // return
  var options = {
    amount: req.body.amount,
    currency: "INR",
    receipt: req.body.receipt,
    payment_capture: "0",
  };
  instance.orders
    .create(options)
    .then((data) => {
      // success
      res.send(data);
    })
    .catch((error) => {
      res.send(error);
    });
});
// capture payment
router.post("/capturePayment", (req, res) => {
  // res.send(req.body)
  // return;
  instance.payments
    .capture(req.body.payment_id, req.body.amount)
    .then((data) => {
      // success
      res.send(data);
    })
    .catch((error) => {
      res.send(error);
    });
});
// verify payment
router.post("/verify", (req, res) => {
  instance.payments
    .fetch(req.body.payment_id)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.send(error);
    });
});
export default router;
