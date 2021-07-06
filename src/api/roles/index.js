import { Router } from "express";
import { middleware as query } from "querymen";
import { middleware as body } from "bodymen";
import { create, index, show, update, destroy } from "./controller";
import { schema } from "./model";
export Roles, { schema } from "./model";

const router = new Router();
const { code, description, crud, features } = schema.tree;

/**
 * @api {post} /roles Create roles
 * @apiName CreateRoles
 * @apiGroup Roles
 * @apiParam title Roles's title.
 * @apiParam features Roles's features.
 * @apiParam isCoreRole Roles's isCoreRole.
 * @apiSuccess {Object} roles Roles's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Roles not found.
 */
router.post(
  "/",
  body({
    code,
    description,
    crud,
    features,
  }),
  create
);

/**
 * @api {get} /roles Retrieve roles
 * @apiName RetrieveRoles
 * @apiGroup Roles
 * @apiUse listParams
 * @apiSuccess {Object[]} roles List of roles.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/", query(), index);

/**
 * @api {get} /roles/:id Retrieve roles
 * @apiName RetrieveRoles
 * @apiGroup Roles
 * @apiSuccess {Object} roles Roles's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Roles not found.
 */
router.get("/:id", show);

/**
 * @api {put} /roles/:id Update roles
 * @apiName UpdateRoles
 * @apiGroup Roles
 * @apiParam title Roles's title.
 * @apiParam features Roles's features.
 * @apiParam isCoreRole Roles's isCoreRole.
 * @apiSuccess {Object} roles Roles's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Roles not found.
 */
router.put(
  "/:id",
  body({
    code,
    description,
    crud,
    features,
  }),
  update
);

/**
 * @api {delete} /roles/:id Delete roles
 * @apiName DeleteRoles
 * @apiGroup Roles
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Roles not found.
 */
router.delete("/:id", destroy);

export default router;
