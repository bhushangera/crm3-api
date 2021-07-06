import { Router } from "express";
import { middleware as query } from "querymen";
import { middleware as body } from "bodymen";
import { create, index, show, update, destroy } from "./controller";
import { schema } from "./model";
export LeavePolicies, { schema } from "./model";

const router = new Router();
const {
  code,
  description,
  entity,
  entityState,
  entityCategory,
  statusCode,
  leaves,
} = schema.tree;

/**
 * @api {post} /LeavePolicies Create leave policies
 * @apiName CreateLeavePolicies
 * @apiGroup LeavePolicies
 * @apiParam code Leave policies's code.
 * @apiParam description Leave policies's description.
 * @apiSuccess {Object} leavePolicies Leave policies's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Leave policies not found.
 */
router.post(
  "/",
  body({
    code,
    description,
    entity,
    entityState,
    entityCategory,
    statusCode,
    leaves,
  }),
  create
);

/**
 * @api {get} /LeavePolicies Retrieve leave policies
 * @apiName RetrieveLeavePolicies
 * @apiGroup LeavePolicies
 * @apiUse listParams
 * @apiSuccess {Object[]} leavePolicies List of leave policies.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/", query(), index);

/**
 * @api {get} /LeavePolicies/:id Retrieve leave policies
 * @apiName RetrieveLeavePolicies
 * @apiGroup LeavePolicies
 * @apiSuccess {Object} leavePolicies Leave policies's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Leave policies not found.
 */
router.get("/:id", show);

/**
 * @api {put} /LeavePolicies/:id Update leave policies
 * @apiName UpdateLeavePolicies
 * @apiGroup LeavePolicies
 * @apiParam code Leave policies's code.
 * @apiParam description Leave policies's description.
 * @apiSuccess {Object} leavePolicies Leave policies's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Leave policies not found.
 */
router.put(
  "/:id",
  body({
    code,
    description,
    entity,
    entityState,
    entityCategory,
    statusCode,
    leaves,
  }),
  update
);

/**
 * @api {delete} /LeavePolicies/:id Delete leave policies
 * @apiName DeleteLeavePolicies
 * @apiGroup LeavePolicies
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Leave policies not found.
 */
router.delete("/:id", destroy);

export default router;
