import { Router } from "express";
import { middleware as query } from "querymen";
import { middleware as body } from "bodymen";
import { create, index, show, update, destroy } from "./controller";
import { schema } from "./model";
export CloudPlans, { schema } from "./model";

const router = new Router();
const {
  code,
  description,
  ram,
  cpu,
  hdd,
  bandwidth,
  validity,
  USD,
  INR,
  backupAddition,
  active,
  users,
} = schema.tree;

/**
 * @api {post} /cloudPlans Create cloud plans
 * @apiName CreateCloudPlans
 * @apiGroup CloudPlans
 * @apiParam code Cloud plans's code.
 * @apiParam description Cloud plans's description.
 * @apiSuccess {Object} cloudPlans Cloud plans's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Cloud plans not found.
 */
router.post(
  "/",
  body({
    code,
    description,
    ram,
    cpu,
    hdd,
    bandwidth,
    validity,
    USD,
    INR,
    backupAddition,
    active,
    users,
  }),
  create
);

/**
 * @api {get} /cloudPlans Retrieve cloud plans
 * @apiName RetrieveCloudPlans
 * @apiGroup CloudPlans
 * @apiUse listParams
 * @apiSuccess {Object[]} cloudPlans List of cloud plans.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/", query(), index);

/**
 * @api {get} /cloudPlans/:id Retrieve cloud plans
 * @apiName RetrieveCloudPlans
 * @apiGroup CloudPlans
 * @apiSuccess {Object} cloudPlans Cloud plans's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Cloud plans not found.
 */
router.get("/:id", show);

/**
 * @api {put} /cloudPlans/:id Update cloud plans
 * @apiName UpdateCloudPlans
 * @apiGroup CloudPlans
 * @apiParam code Cloud plans's code.
 * @apiParam description Cloud plans's description.
 * @apiSuccess {Object} cloudPlans Cloud plans's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Cloud plans not found.
 */
router.put(
  "/:id",
  body({
    code,
    description,
    ram,
    cpu,
    hdd,
    bandwidth,
    validity,
    USD,
    INR,
    backupAddition,
    active,
    users,
  }),
  update
);

/**
 * @api {delete} /cloudPlans/:id Delete cloud plans
 * @apiName DeleteCloudPlans
 * @apiGroup CloudPlans
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Cloud plans not found.
 */
router.delete("/:id", destroy);

export default router;
