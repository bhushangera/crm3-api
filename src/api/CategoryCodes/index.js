import { Router } from "express";
import { middleware as query } from "querymen";
import { middleware as body } from "bodymen";
import { create, index, show, update, destroy } from "./controller";
import { schema } from "./model";
export CategoryCodes, { schema } from "./model";

const router = new Router();
const {
  entityId,
  groupId,
  groupCode,
  entityCode,
  entityCategoryId,
  entityCategory,
  code,
  description,
  active,
  image, hasMaterials
} = schema.tree;

/**
 * @api {post} /CategoryCodes Create category codes
 * @apiName CreateCategoryCodes
 * @apiGroup CategoryCodes
 * @apiParam code Category codes's code.
 * @apiParam description Category codes's description.
 * @apiSuccess {Object} categoryCodes Category codes's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Category codes not found.
 */
router.post(
  "/",
  body({
    entityId,
    groupId,
    groupCode,
    entityCode,
    entityCategoryId,
    entityCategory,
    code,
    description,
    active,
    image, hasMaterials
  }),
  create
);

/**
 * @api {get} /CategoryCodes Retrieve category codes
 * @apiName RetrieveCategoryCodes
 * @apiGroup CategoryCodes
 * @apiUse listParams
 * @apiSuccess {Object[]} categoryCodes List of category codes.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/", query(), index);

/**
 * @api {get} /CategoryCodes/:id Retrieve category codes
 * @apiName RetrieveCategoryCodes
 * @apiGroup CategoryCodes
 * @apiSuccess {Object} categoryCodes Category codes's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Category codes not found.
 */
router.get("/:id", show);

/**
 * @api {put} /CategoryCodes/:id Update category codes
 * @apiName UpdateCategoryCodes
 * @apiGroup CategoryCodes
 * @apiParam code Category codes's code.
 * @apiParam description Category codes's description.
 * @apiSuccess {Object} categoryCodes Category codes's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Category codes not found.
 */
router.put(
  "/:id",
  body({
    entityId,
    groupId,
    groupCode,
    entityCode,
    entityCategoryId,
    entityCategory,
    code,
    description,
    active,
    image, hasMaterials
  }),
  update
);

/**
 * @api {delete} /CategoryCodes/:id Delete category codes
 * @apiName DeleteCategoryCodes
 * @apiGroup CategoryCodes
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Category codes not found.
 */
router.delete("/:id", destroy);

export default router;
