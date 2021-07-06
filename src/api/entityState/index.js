import { Router } from "express";
import { middleware as query } from "querymen";
import { middleware as body } from "bodymen";
import { create, index, show, update, destroy } from "./controller";
import { schema } from "./model";
export EntityState, { schema } from "./model";

const router = new Router();
const {
  entityId,
  entityCode,
  entity,
  entityDescription,
  code,
  description,
  active,
  hasStatusCodes,
} = schema.tree;

/**
 * @api {post} /entityStates Create entity state
 * @apiName CreateEntityState
 * @apiGroup EntityState
 * @apiParam code Entity state's code.
 * @apiParam description Entity state's description.
 * @apiSuccess {Object} entityState Entity state's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Entity state not found.
 */
router.post(
  "/",
  body({
    entityId,
    entityCode,
    entity,
    entityDescription,
    code,
    description,
    active,
    hasStatusCodes,
  }),
  create
);

/**
 * @api {get} /entityStates Retrieve entity states
 * @apiName RetrieveEntityStates
 * @apiGroup EntityState
 * @apiUse listParams
 * @apiSuccess {Object[]} entityStates List of entity states.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/", query(), index);

/**
 * @api {get} /entityStates/:id Retrieve entity state
 * @apiName RetrieveEntityState
 * @apiGroup EntityState
 * @apiSuccess {Object} entityState Entity state's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Entity state not found.
 */
router.get("/:id", show);

/**
 * @api {put} /entityStates/:id Update entity state
 * @apiName UpdateEntityState
 * @apiGroup EntityState
 * @apiParam code Entity state's code.
 * @apiParam description Entity state's description.
 * @apiSuccess {Object} entityState Entity state's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Entity state not found.
 */
router.put(
  "/:id",
  body({
    entityId,
    entityCode,
    entity,
    entityDescription,
    code,
    description,
    active,
    hasStatusCodes,
  }),
  update
);

/**
 * @api {delete} /entityStates/:id Delete entity state
 * @apiName DeleteEntityState
 * @apiGroup EntityState
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Entity state not found.
 */
router.delete("/:id", destroy);

export default router;
