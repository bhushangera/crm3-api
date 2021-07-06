import { Router } from "express";
import { middleware as query } from "querymen";
import { middleware as body } from "bodymen";
import { create, index, show, update, destroy } from "./controller";
import { schema } from "./model";
export CategoryEntities, { schema } from "./model";

const router = new Router();
const { code, description, sortOrder, active } = schema.tree;

/**
 * @api {post} /CategoryEntities Create category entities
 * @apiName CreateCategoryEntities
 * @apiGroup CategoryEntities
 * @apiParam code Category entities's code.
 * @apiParam description, sortOrder,
active, Category entities's description, sortOrder,
active,.
 * @apiSuccess {Object} categoryEntities Category entities's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Category entities not found.
 */
router.post("/", body({ code, description, sortOrder, active }), create);

/**
 * @api {get} /CategoryEntities Retrieve category entities
 * @apiName RetrieveCategoryEntities
 * @apiGroup CategoryEntities
 * @apiUse listParams
 * @apiSuccess {Object[]} categoryEntities List of category entities.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/", query(), index);

/**
 * @api {get} /CategoryEntities/:id Retrieve category entities
 * @apiName RetrieveCategoryEntities
 * @apiGroup CategoryEntities
 * @apiSuccess {Object} categoryEntities Category entities's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Category entities not found.
 */
router.get("/:id", show);

/**
 * @api {put} /CategoryEntities/:id Update category entities
 * @apiName UpdateCategoryEntities
 * @apiGroup CategoryEntities
 * @apiParam code Category entities's code.
 * @apiParam description, sortOrder,
active, Category entities's description, sortOrder,
active,.
 * @apiSuccess {Object} categoryEntities Category entities's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Category entities not found.
 */
router.put("/:id", body({ code, description, sortOrder, active }), update);

/**
 * @api {delete} /CategoryEntities/:id Delete category entities
 * @apiName DeleteCategoryEntities
 * @apiGroup CategoryEntities
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Category entities not found.
 */
router.delete("/:id", destroy);

export default router;
