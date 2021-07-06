import { Router } from "express";
import { middleware as query } from "querymen";
import { middleware as body } from "bodymen";
import { create, index, show, update, destroy } from "./controller";
import { schema } from "./model";
export Designations, { schema } from "./model";

const router = new Router();
const {
  deptId,
  deptName,
  buId,
  buName,
  companyId,
  companyName,
  code,
  description,
  active,
} = schema.tree;

/**
 * @api {post} /designations Create designations
 * @apiName CreateDesignations
 * @apiGroup Designations
 * @apiParam code Designations's code.
 * @apiParam description Designations's description.
 * @apiSuccess {Object} designations Designations's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Designations not found.
 */
router.post(
  "/",
  body({
    deptId,
    deptName,
    buId,
    buName,
    companyId,
    companyName,
    code,
    description,
    active,
  }),
  create
);

/**
 * @api {get} /designations Retrieve designations
 * @apiName RetrieveDesignations
 * @apiGroup Designations
 * @apiUse listParams
 * @apiSuccess {Object[]} designations List of designations.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/", query(), index);

/**
 * @api {get} /designations/:id Retrieve designations
 * @apiName RetrieveDesignations
 * @apiGroup Designations
 * @apiSuccess {Object} designations Designations's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Designations not found.
 */
router.get("/:id", show);

/**
 * @api {put} /designations/:id Update designations
 * @apiName UpdateDesignations
 * @apiGroup Designations
 * @apiParam code Designations's code.
 * @apiParam description Designations's description.
 * @apiSuccess {Object} designations Designations's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Designations not found.
 */
router.put(
  "/:id",
  body({
    deptId,
    deptName,
    buId,
    buName,
    companyId,
    companyName,
    code,
    description,
    active,
  }),
  update
);

/**
 * @api {delete} /designations/:id Delete designations
 * @apiName DeleteDesignations
 * @apiGroup Designations
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Designations not found.
 */
router.delete("/:id", destroy);

export default router;
