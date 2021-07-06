import { Router } from "express";
import { middleware as query } from "querymen";
import { middleware as body } from "bodymen";
import { create, index, show, update, destroy } from "./controller";
import { schema } from "./model";
export UserPermissions, { schema } from "./model";

const router = new Router();
const { userId, roleId, permission, permissionName } = schema.tree;

/**
 * @api {post} /userPermissions Create user permissions
 * @apiName CreateUserPermissions
 * @apiGroup UserPermissions
 * @apiParam code User permissions's code.
 * @apiParam description User permissions's description.
 * @apiSuccess {Object} userPermissions User permissions's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 User permissions not found.
 */
router.post("/", body({ userId, roleId, permission, permissionName }), create);

/**
 * @api {get} /userPermissions Retrieve user permissions
 * @apiName RetrieveUserPermissions
 * @apiGroup UserPermissions
 * @apiUse listParams
 * @apiSuccess {Object[]} userPermissions List of user permissions.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/", query(), index);

/**
 * @api {get} /userPermissions/:id Retrieve user permissions
 * @apiName RetrieveUserPermissions
 * @apiGroup UserPermissions
 * @apiSuccess {Object} userPermissions User permissions's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 User permissions not found.
 */
router.get("/:id", show);

/**
 * @api {put} /userPermissions/:id Update user permissions
 * @apiName UpdateUserPermissions
 * @apiGroup UserPermissions
 * @apiParam code User permissions's code.
 * @apiParam description User permissions's description.
 * @apiSuccess {Object} userPermissions User permissions's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 User permissions not found.
 */
router.put(
  "/:id",
  body({ userId, roleId, permission, permissionName }),
  update
);

/**
 * @api {delete} /userPermissions/:id Delete user permissions
 * @apiName DeleteUserPermissions
 * @apiGroup UserPermissions
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 User permissions not found.
 */
router.delete("/:id", destroy);

export default router;
