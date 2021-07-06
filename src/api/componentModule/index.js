import { Router } from "express";
import { middleware as query } from "querymen";
import { middleware as body } from "bodymen";
import { create, index, show, update, destroy } from "./controller";
import { schema } from "./model";
export ComponentModule, { schema } from "./model";

const router = new Router();
const {
  uuid,
  componentArticleId,
  componentMaterialId,
  moduleEntityId,
  moduleEntityCategoryId,
  moduleCategoryCodeId,
  moduleArticleId,
  moduleMaterialId,
  moduleArticleCode,
  moduleArticleDescription,
  moduleArticleImage,
  qty,
  isFOC,
} = schema.tree;

/**
 * @api {post} /componentModule Create component module
 * @apiName CreateComponentModule
 * @apiGroup ComponentModule
 * @apiParam code Component module's code.
 * @apiParam description Component module's description.
 * @apiSuccess {Object} componentModule Component module's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Component module not found.
 */
router.post(
  "/",
  body({
    uuid,
    componentArticleId,
    componentMaterialId,
    moduleEntityId,
    moduleEntityCategoryId,
    moduleCategoryCodeId,
    moduleArticleId,
    moduleMaterialId,
    moduleArticleCode,
    moduleArticleDescription,
    moduleArticleImage,
    qty,
    isFOC,
  }),
  create
);

/**
 * @api {get} /componentModule Retrieve component modules
 * @apiName RetrieveComponentModules
 * @apiGroup ComponentModule
 * @apiUse listParams
 * @apiSuccess {Object[]} componentModules List of component modules.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/", query(), index);

/**
 * @api {get} /componentModule/:id Retrieve component module
 * @apiName RetrieveComponentModule
 * @apiGroup ComponentModule
 * @apiSuccess {Object} componentModule Component module's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Component module not found.
 */
router.get("/:id", show);

/**
 * @api {put} /componentModule/:id Update component module
 * @apiName UpdateComponentModule
 * @apiGroup ComponentModule
 * @apiParam code Component module's code.
 * @apiParam description Component module's description.
 * @apiSuccess {Object} componentModule Component module's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Component module not found.
 */
router.put(
  "/:id",
  body({
    uuid,
    componentArticleId,
    componentMaterialId,
    moduleEntityId,
    moduleEntityCategoryId,
    moduleCategoryCodeId,
    moduleArticleId,
    moduleMaterialId,
    moduleArticleCode,
    moduleArticleDescription,
    moduleArticleImage,
    qty,
    isFOC,
  }),
  update
);

/**
 * @api {delete} /componentModule/:id Delete component module
 * @apiName DeleteComponentModule
 * @apiGroup ComponentModule
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Component module not found.
 */
router.delete("/:id", destroy);

export default router;
