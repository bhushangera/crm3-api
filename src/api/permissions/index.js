import { Router } from "express";
import { middleware as query } from "querymen";
import { middleware as body } from "bodymen";
import { create, index, show, update, destroy } from "./controller";
import { schema } from "./model";
export Permissions, { schema } from "./model";

const router = new Router();
const { title, roleId, fmId, code, description } = schema.tree;

/**
 * @api {post} /permissions Create permissions
 * @apiName CreatePermissions
 * @apiGroup Permissions
 * @apiParam title Permissions's title.
 * @apiParam level Permissions's level.
 * @apiParam parentId Permissions's parentId.
 * @apiParam isSelected Permissions's isSelected.
 * @apiParam name Permissions's name.
 * @apiParam children Permissions's children.
 * @apiSuccess {Object} permissions Permissions's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Permissions not found.
 */
router.post("/", body({ title, roleId, fmId, code, description }), create);

/**
 * @api {get} /permissions Retrieve permissions
 * @apiName RetrievePermissions
 * @apiGroup Permissions
 * @apiUse listParams
 * @apiSuccess {Object[]} permissions List of permissions.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/", query(), index);

/**
 * @api {get} /permissions/:id Retrieve permissions
 * @apiName RetrievePermissions
 * @apiGroup Permissions
 * @apiSuccess {Object} permissions Permissions's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Permissions not found.
 */
router.get("/:id", show);

/**
 * @api {put} /permissions/:id Update permissions
 * @apiName UpdatePermissions
 * @apiGroup Permissions
 * @apiParam title Permissions's title.
 * @apiParam level Permissions's level.
 * @apiParam parentId Permissions's parentId.
 * @apiParam isSelected Permissions's isSelected.
 * @apiParam name Permissions's name.
 * @apiParam children Permissions's children.
 * @apiSuccess {Object} permissions Permissions's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Permissions not found.
 */
router.put("/:id", body({ title, roleId, fmId, code, description }), update);

/**
 * @api {delete} /permissions/:id Delete permissions
 * @apiName DeletePermissions
 * @apiGroup Permissions
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Permissions not found.
 */
router.delete("/:id", destroy);

export default router;
