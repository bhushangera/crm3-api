import { Router } from "express";
import { middleware as query } from "querymen";
import { middleware as body } from "bodymen";
import { create, index, show, update, destroy } from "./controller";
import { schema } from "./model";
export Timeshifts, { schema } from "./model";

const router = new Router();
const {
  code,
  description,
  startTime,
  endTime,
  breakStartTime,
  breakEndTime,
  otHrs,
  active,
} = schema.tree;

/**
 * @api {post} /timeshifts Create timeshifts
 * @apiName CreateTimeshifts
 * @apiGroup Timeshifts
 * @apiParam code Timeshifts's code.
 * @apiParam description Timeshifts's description.
 * @apiSuccess {Object} timeshifts Timeshifts's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Timeshifts not found.
 */
router.post(
  "/",
  body({
    code,
    description,
    startTime,
    endTime,
    breakStartTime,
    breakEndTime,
    otHrs,
    active,
  }),
  create
);

/**
 * @api {get} /timeshifts Retrieve timeshifts
 * @apiName RetrieveTimeshifts
 * @apiGroup Timeshifts
 * @apiUse listParams
 * @apiSuccess {Object[]} timeshifts List of timeshifts.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/", query(), index);

/**
 * @api {get} /timeshifts/:id Retrieve timeshifts
 * @apiName RetrieveTimeshifts
 * @apiGroup Timeshifts
 * @apiSuccess {Object} timeshifts Timeshifts's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Timeshifts not found.
 */
router.get("/:id", show);

/**
 * @api {put} /timeshifts/:id Update timeshifts
 * @apiName UpdateTimeshifts
 * @apiGroup Timeshifts
 * @apiParam code Timeshifts's code.
 * @apiParam description Timeshifts's description.
 * @apiSuccess {Object} timeshifts Timeshifts's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Timeshifts not found.
 */
router.put(
  "/:id",
  body({
    code,
    description,
    startTime,
    endTime,
    breakStartTime,
    breakEndTime,
    otHrs,
    active,
  }),
  update
);

/**
 * @api {delete} /timeshifts/:id Delete timeshifts
 * @apiName DeleteTimeshifts
 * @apiGroup Timeshifts
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Timeshifts not found.
 */
router.delete("/:id", destroy);

export default router;
