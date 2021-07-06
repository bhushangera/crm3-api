import { Router } from "express";
import { middleware as query } from "querymen";
import { middleware as body } from "bodymen";
import { create, index, show, update, destroy } from "./controller";
import { schema } from "./model";
export Plans, { schema } from "./model";

const router = new Router();
const {
  id,
  code,
  description,
  sortOrder,
  monthlyCost,
  minCommitment,
  bonus,
  features,
  active,
  terms,
} = schema.tree;

/**
 * @api {post} /plans Create plans
 * @apiName CreatePlans
 * @apiGroup Plans
 * @apiParam code Plans's code.
 * @apiParam description Plans's description.
 * @apiSuccess {Object} plans Plans's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Plans not found.
 */
router.post(
  "/",
  body({
    id,
    code,
    description,
    sortOrder,
    monthlyCost,
    minCommitment,
    bonus,
    features,
    active,
    terms,
  }),
  create
);

/**
 * @api {get} /plans Retrieve plans
 * @apiName RetrievePlans
 * @apiGroup Plans
 * @apiUse listParams
 * @apiSuccess {Object[]} plans List of plans.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/", query(), index);

/**
 * @api {get} /plans/:id Retrieve plans
 * @apiName RetrievePlans
 * @apiGroup Plans
 * @apiSuccess {Object} plans Plans's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Plans not found.
 */
router.get("/:id", show);

/**
 * @api {put} /plans/:id Update plans
 * @apiName UpdatePlans
 * @apiGroup Plans
 * @apiParam code Plans's code.
 * @apiParam description Plans's description.
 * @apiSuccess {Object} plans Plans's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Plans not found.
 */
router.put(
  "/:id",
  body({
    id,
    code,
    description,
    monthlyCost,
    sortOrder,
    minCommitment,
    bonus,
    features,
    active,
    terms,
  }),
  update
);

/**
 * @api {delete} /plans/:id Delete plans
 * @apiName DeletePlans
 * @apiGroup Plans
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Plans not found.
 */
router.delete("/:id", destroy);

export default router;
