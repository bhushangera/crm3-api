import { Router } from "express";
import { middleware as query } from "querymen";
import { middleware as body } from "bodymen";
import { create, index, show, update, destroy } from "./controller";
import { schema } from "./model";
export TaxRates, { schema } from "./model";

const router = new Router();
const { code, descrption, IGST, CGST, SGST, active } = schema.tree;

/**
 * @api {post} /taxRates Create tax rates
 * @apiName CreateTaxRates
 * @apiGroup TaxRates
 * @apiParam code Tax rates's code.
 * @apiParam descrption Tax rates's descrption.
 * @apiSuccess {Object} taxRates Tax rates's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Tax rates not found.
 */
router.post("/", body({ code, descrption, IGST, CGST, SGST, active }), create);

/**
 * @api {get} /taxRates Retrieve tax rates
 * @apiName RetrieveTaxRates
 * @apiGroup TaxRates
 * @apiUse listParams
 * @apiSuccess {Object[]} taxRates List of tax rates.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/", query(), index);

/**
 * @api {get} /taxRates/:id Retrieve tax rates
 * @apiName RetrieveTaxRates
 * @apiGroup TaxRates
 * @apiSuccess {Object} taxRates Tax rates's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Tax rates not found.
 */
router.get("/:id", show);

/**
 * @api {put} /taxRates/:id Update tax rates
 * @apiName UpdateTaxRates
 * @apiGroup TaxRates
 * @apiParam code Tax rates's code.
 * @apiParam descrption Tax rates's descrption.
 * @apiSuccess {Object} taxRates Tax rates's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Tax rates not found.
 */
router.put(
  "/:id",
  body({ code, descrption, IGST, CGST, SGST, active }),
  update
);

/**
 * @api {delete} /taxRates/:id Delete tax rates
 * @apiName DeleteTaxRates
 * @apiGroup TaxRates
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Tax rates not found.
 */
router.delete("/:id", destroy);

export default router;
