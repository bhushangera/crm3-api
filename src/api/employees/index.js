import { Router } from "express";
import { middleware as query } from "querymen";
import { middleware as body } from "bodymen";
import { create, index, show, update, destroy } from "./controller";
import { schema } from "./model";
export Employees, { schema } from "./model";

const router = new Router();
const {
  uuid,
  scrollNo,
  empId,
  entityId,
  entity,
  stateId,
  stateCode,
  statusId,
  statusCode,
  categoryId,
  category,
  categoryCodeId,
  categoryCode,
  title,
  name,
  lastName,
  avatar,
  profilePicture,
  buId,
  unitName,
  deptId,
  department,
  reportsToId, reportsToUUID,
  reportsTo,
  mailbox,
  empName,
  designationId,
  designationCode,
  designation,
  leavePolicy,
  territoryId,
  territory,
  address,
  contact,
  education,
  idProofs,
} = schema.tree;

/**
 * @api {post} /employees Create employees
 * @apiName CreateEmployees
 * @apiGroup Employees
 * @apiParam userId Employees's userId.
 * @apiParam title Employees's title.
 * @apiParam name Employees's name.
 * @apiParam lastname Employees's lastname.
 * @apiParam email Employees's email.
 * @apiSuccess {Object} employees Employees's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Employees not found.
 */
router.post(
  "/",
  body({
    uuid,
    scrollNo,
    empId,
    entityId,
    entity,
    stateId,
    stateCode,
    statusId,
    statusCode,
    categoryId,
    category,
    categoryCodeId,
    categoryCode,
    title,
    name,
    lastName,
    avatar,
    profilePicture,
    buId,
    unitName,
    deptId,
    department,
    reportsToId, reportsToUUID,
    reportsTo,
    mailbox,
    empName,
    designationId,
    designationCode,
    designation,
    leavePolicy,
    territoryId,
    territory,
    address,
    contact,
    education,
    idProofs,
  }),
  create
);

/**
 * @api {get} /employees Retrieve employees
 * @apiName RetrieveEmployees
 * @apiGroup Employees
 * @apiUse listParams
 * @apiSuccess {Object[]} employees List of employees.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/", query(), index);

/**
 * @api {get} /employees/:id Retrieve employees
 * @apiName RetrieveEmployees
 * @apiGroup Employees
 * @apiSuccess {Object} employees Employees's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Employees not found.
 */
router.get("/:id", show);

/**
 * @api {put} /employees/:id Update employees
 * @apiName UpdateEmployees
 * @apiGroup Employees
 * @apiParam userId Employees's userId.
 * @apiParam title Employees's title.
 * @apiParam name Employees's name.
 * @apiParam lastname Employees's lastname.
 * @apiParam email Employees's email.
 * @apiSuccess {Object} employees Employees's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Employees not found.
 */
router.put(
  "/:id",
  body({
    uuid,
    scrollNo,
    empId,
    entityId,
    entity,
    stateId,
    stateCode,
    statusId,
    statusCode,
    categoryId,
    category,
    categoryCodeId,
    categoryCode,
    title,
    name,
    lastName,
    avatar,
    profilePicture,
    buId,
    unitName,
    deptId,
    department,
    reportsToId, reportsToUUID,
    reportsTo,
    mailbox,
    empName,
    designationId,
    designationCode,
    designation,
    leavePolicy,
    territoryId,
    territory,
    address,
    contact,
    education,
    idProofs,
  }),
  update
);

/**
 * @api {delete} /employees/:id Delete employees
 * @apiName DeleteEmployees
 * @apiGroup Employees
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Employees not found.
 */
router.delete("/:id", destroy);

export default router;
