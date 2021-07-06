import { Router } from "express";
import { middleware as query } from "querymen";
import { middleware as body } from "bodymen";
import { create, index, show, update, destroy } from "./controller";
import { schema } from "./model";
export PlanRenewals, { schema } from "./model";

const router = new Router();
const {
  licenseId,
  tenure,
  validity,
  startDate,
  endDate,
  active,
  amount,
  paid,
  paymentDate,
  paymentDetails,
} = schema.tree;

/**
 * @api {post} /planRenewals Create plan renewals
 * @apiName CreatePlanRenewals
 * @apiGroup PlanRenewals
 * @apiParam code Plan renewals's code.
 * @apiParam description Plan renewals's description.
 * @apiSuccess {Object} planRenewals Plan renewals's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Plan renewals not found.
 */
router.post(
  "/",
  body({
    licenseId,
    tenure,
    validity,
    startDate,
    endDate,
    active,
    amount,
    paid,
    paymentDate,
    paymentDetails,
  }),
  create
);

/**
 * @api {get} /planRenewals Retrieve plan renewals
 * @apiName RetrievePlanRenewals
 * @apiGroup PlanRenewals
 * @apiUse listParams
 * @apiSuccess {Object[]} planRenewals List of plan renewals.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/", query(), index);

/**
 * @api {get} /planRenewals/:id Retrieve plan renewals
 * @apiName RetrievePlanRenewals
 * @apiGroup PlanRenewals
 * @apiSuccess {Object} planRenewals Plan renewals's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Plan renewals not found.
 */
router.get("/:id", show);

/**
 * @api {put} /planRenewals/:id Update plan renewals
 * @apiName UpdatePlanRenewals
 * @apiGroup PlanRenewals
 * @apiParam code Plan renewals's code.
 * @apiParam description Plan renewals's description.
 * @apiSuccess {Object} planRenewals Plan renewals's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Plan renewals not found.
 */
router.put(
  "/:id",
  body({
    licenseId,
    tenure,
    validity,
    startDate,
    endDate,
    active,
    amount,
    paid,
    paymentDate,
    paymentDetails,
  }),
  update
);

/**
 * @api {delete} /planRenewals/:id Delete plan renewals
 * @apiName DeletePlanRenewals
 * @apiGroup PlanRenewals
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Plan renewals not found.
 */
router.delete("/:id", destroy);

export default router;
