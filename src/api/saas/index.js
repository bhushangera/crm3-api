import { Router } from "express";
import { middleware as query } from "querymen";
import { middleware as body } from "bodymen";
import { create, index, show, update, destroy } from "./controller";
import { schema } from "./model";
export Saas, { schema } from "./model";

const router = new Router();
const { licenseId, license } = schema.tree;

/**
 * @api {post} /saas Create saas
 * @apiName CreateSaas
 * @apiGroup Saas
 * @apiParam code Saas's code.
 * @apiParam description Saas's description.
 * @apiSuccess {Object} saas Saas's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Saas not found.
 */
router.post(
  "/",
  body({
    licenseId,
    license,
  }),
  create
);

/**
 * @api {get} /saas Retrieve saas
 * @apiName RetrieveSaas
 * @apiGroup Saas
 * @apiUse listParams
 * @apiSuccess {Object[]} saas List of saas.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/", query(), index);

/**
 * @api {get} /saas/:id Retrieve saas
 * @apiName RetrieveSaas
 * @apiGroup Saas
 * @apiSuccess {Object} saas Saas's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Saas not found.
 */
router.get("/:id", show);

/**
 * @api {put} /saas/:id Update saas
 * @apiName UpdateSaas
 * @apiGroup Saas
 * @apiParam code Saas's code.
 * @apiParam description Saas's description.
 * @apiSuccess {Object} saas Saas's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Saas not found.
 */
router.put(
  "/:id",
  body({
    licenseId,
    license,
  }),
  update
);

/**
 * @api {delete} /saas/:id Delete saas
 * @apiName DeleteSaas
 * @apiGroup Saas
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Saas not found.
 */
router.delete("/:id", destroy);

export default router;
