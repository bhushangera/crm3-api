import { Router } from "express";
import { middleware as query } from "querymen";
import { middleware as body } from "bodymen";
import { create, index, show, update, destroy } from "./controller";
import { schema } from "./model";
export PaymentModes, { schema } from "./model";

const router = new Router();
const { code, description, surcharge, min, max, active } = schema.tree;

/**
 * @api {post} /PaymentModes Create payment modes
 * @apiName CreatePaymentModes
 * @apiGroup PaymentModes
 * @apiParam code Payment modes's code.
 * @apiParam description, surcharge, min , max, active Payment modes's description, surcharge, min , max, active.
 * @apiSuccess {Object} paymentModes Payment modes's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Payment modes not found.
 */
router.post(
  "/",
  body({ code, description, surcharge, min, max, active }),
  create
);

/**
 * @api {get} /PaymentModes Retrieve payment modes
 * @apiName RetrievePaymentModes
 * @apiGroup PaymentModes
 * @apiUse listParams
 * @apiSuccess {Object[]} paymentModes List of payment modes.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/", query(), index);

/**
 * @api {get} /PaymentModes/:id Retrieve payment modes
 * @apiName RetrievePaymentModes
 * @apiGroup PaymentModes
 * @apiSuccess {Object} paymentModes Payment modes's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Payment modes not found.
 */
router.get("/:id", show);

/**
 * @api {put} /PaymentModes/:id Update payment modes
 * @apiName UpdatePaymentModes
 * @apiGroup PaymentModes
 * @apiParam code Payment modes's code.
 * @apiParam description, surcharge, min , max, active Payment modes's description, surcharge, min , max, active.
 * @apiSuccess {Object} paymentModes Payment modes's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Payment modes not found.
 */
router.put(
  "/:id",
  body({ code, description, surcharge, min, max, active }),
  update
);

/**
 * @api {delete} /PaymentModes/:id Delete payment modes
 * @apiName DeletePaymentModes
 * @apiGroup PaymentModes
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Payment modes not found.
 */
router.delete("/:id", destroy);

export default router;
