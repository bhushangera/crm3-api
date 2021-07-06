import { Router } from "express";
import { middleware as query } from "querymen";
import { middleware as body } from "bodymen";
import { create, index, show, update, destroy } from "./controller";
import { schema } from "./model";
export StatusEntities, { schema } from "./model";

const router = new Router();
const {
  code,
  description,
  sortOrder,
  icon,
  colorId,
  background,
  foreground,
  group,
  prefix,
  active,
} = schema.tree;

/**
 * @api {post} /statusEntities Create status entities
 * @apiName CreateStatusEntities
 * @apiGroup StatusEntities
 * @apiParam code Status entities's code.
 * @apiParam description, sortOrder,
active, statusEntityId,
statusEntityCode,, Status entities's description, sortOrder,
active, statusEntityId,
statusEntityCode,,.
 * @apiSuccess {Object} statusEntities Status entities's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Status entities not found.
 */
router.post(
  "/",
  body({
    code,
    description,
    sortOrder,
    icon,
    colorId,
    background,
    foreground,
    group,
    prefix,
    active,
  }),
  create
);

/**
 * @api {get} /statusEntities Retrieve status entities
 * @apiName RetrieveStatusEntities
 * @apiGroup StatusEntities
 * @apiUse listParams
 * @apiSuccess {Object[]} statusEntities List of status entities.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/", query(), index);

/**
 * @api {get} /statusEntities/:id Retrieve status entities
 * @apiName RetrieveStatusEntities
 * @apiGroup StatusEntities
 * @apiSuccess {Object} statusEntities Status entities's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Status entities not found.
 */
router.get("/:id", show);

/**
 * @api {put} /statusEntities/:id Update status entities
 * @apiName UpdateStatusEntities
 * @apiGroup StatusEntities
 * @apiParam code Status entities's code.
 * @apiParam description, sortOrder,
active, statusEntityId,
statusEntityCode,, Status entities's description, sortOrder,
active, statusEntityId,
statusEntityCode,,.
 * @apiSuccess {Object} statusEntities Status entities's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Status entities not found.
 */
router.put(
  "/:id",
  body({
    code,
    description,
    sortOrder,
    icon,
    colorId,
    background,
    foreground,
    group,
    prefix,
    active,
  }),
  update
);

/**
 * @api {delete} /statusEntities/:id Delete status entities
 * @apiName DeleteStatusEntities
 * @apiGroup StatusEntities
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Status entities not found.
 */
router.delete("/:id", destroy);

export default router;
