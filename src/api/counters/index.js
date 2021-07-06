import { Router } from "express";
import { middleware as query } from "querymen";
import { middleware as body } from "bodymen";
import { create, index, show, update, destroy } from "./controller";
import { schema } from "./model";
export Counters, { schema } from "./model";

const router = new Router();
const {
  code,
  prefix, description, welcomeText,
  start,
  entityGroupId,
  entityGroupCode,
  entityGroupDescription,
  entityId,
  entityCode,
  entityDescription,
  categoryId,
  categoryCode,
  stateId,
  stateCode,
  stateDescription,
  statusId,
  statusCode,
  statusDescription,
  validity,
  enabled,
  terms, logo, address, showWelcomeText, bu, enableSKU, updateSKU,
} = schema.tree;

/**
 * @api {post} /counters Create counters
 * @apiName CreateCounters
 * @apiGroup Counters
 * @apiParam code Counters's code.
 * @apiParam prefix Counters's prefix.
 * @apiParam description Counters's description.
 * @apiParam start Counters's start.
 * @apiParam active Counters's active.
 * @apiSuccess {Object} counters Counters's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Counters not found.
 */
router.post(
  "/",
  body({
    code,
    prefix, description, welcomeText,
    start,
    entityGroupId,
    entityGroupCode,
    entityGroupDescription,
    entityId,
    entityCode,
    entityDescription,
    categoryId,
    categoryCode,
    stateId,
    stateCode,
    stateDescription,
    statusId,
    statusCode,
    statusDescription,
    validity,
    enabled,
    terms, logo, address, showWelcomeText, bu, enableSKU, updateSKU,
  }),
  create
);

/**
 * @api {get} /counters Retrieve counters
 * @apiName RetrieveCounters
 * @apiGroup Counters
 * @apiUse listParams
 * @apiSuccess {Object[]} counters List of counters.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/", query(), index);

/**
 * @api {get} /counters/:id Retrieve counters
 * @apiName RetrieveCounters
 * @apiGroup Counters
 * @apiSuccess {Object} counters Counters's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Counters not found.
 */
router.get("/:id", show);

/**
 * @api {put} /counters/:id Update counters
 * @apiName UpdateCounters
 * @apiGroup Counters
 * @apiParam code Counters's code.
 * @apiParam prefix Counters's prefix.
 * @apiParam description Counters's description.
 * @apiParam start Counters's start.
 * @apiParam active Counters's active.
 * @apiSuccess {Object} counters Counters's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Counters not found.
 */
router.put(
  "/:id",
  body({
    code,
    prefix, description, welcomeText,
    start,
    entityGroupId,
    entityGroupCode,
    entityGroupDescription,
    entityId,
    entityCode,
    entityDescription,
    categoryId,
    categoryCode,
    stateId,
    stateCode,
    stateDescription,
    statusId,
    statusCode,
    statusDescription,
    validity,
    enabled,
    terms, logo, address, showWelcomeText, bu, enableSKU, updateSKU,
  }),
  update
);

/**
 * @api {delete} /counters/:id Delete counters
 * @apiName DeleteCounters
 * @apiGroup Counters
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Counters not found.
 */
router.delete("/:id", destroy);

export default router;
