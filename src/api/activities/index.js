import { Router } from "express";
import { middleware as query } from "querymen";
import { middleware as body } from "bodymen";
import { create, index, show, update, destroy } from "./controller";
import { schema } from "./model";
export Activities, { schema } from "./model";

const router = new Router();
const {
  userId,
  userName,
  manager,
  relativeId,
  relEntity,
  entity,
  entityState,
  entityCategory,
  statusCode,
  categoryCode,
  activityDate,
  description,
  setReminder,
  reminderDate,
  reminderNotificationDate,
  reminderMessage,
  from,
  to,
  subject,
  html,
  attachments,
} = schema.tree;

/**
 * @api {post} /activities Create activities
 * @apiName CreateActivities
 * @apiGroup Activities
 * @apiParam code Activities's code.
 * @apiParam description Activities's description.
 * @apiSuccess {Object} activities Activities's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Activities not found.
 */
router.post(
  "/",
  body({
    userId,
    userName,
    manager,
    relativeId,
    relEntity,
    entity,
    entityState,
    entityCategory,
    statusCode,
    categoryCode,
    activityDate,
    description,
    setReminder,
    reminderDate,
    reminderNotificationDate,
    reminderMessage,
    from,
    to,
    subject,
    html,
    attachments,
  }),
  create
);

/**
 * @api {get} /activities Retrieve activities
 * @apiName RetrieveActivities
 * @apiGroup Activities
 * @apiUse listParams
 * @apiSuccess {Object[]} activities List of activities.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/", query(), index);

/**
 * @api {get} /activities/:id Retrieve activities
 * @apiName RetrieveActivities
 * @apiGroup Activities
 * @apiSuccess {Object} activities Activities's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Activities not found.
 */
router.get("/:id", show);

/**
 * @api {put} /activities/:id Update activities
 * @apiName UpdateActivities
 * @apiGroup Activities
 * @apiParam code Activities's code.
 * @apiParam description Activities's description.
 * @apiSuccess {Object} activities Activities's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Activities not found.
 */
router.put(
  "/:id",
  body({
    userId,
    userName,
    manager,
    relativeId,
    relEntity,
    entity,
    entityState,
    entityCategory,
    statusCode,
    categoryCode,
    activityDate,
    description,
    setReminder,
    reminderDate,
    reminderNotificationDate,
    reminderMessage,
    from,
    to,
    subject,
    html,
    attachments,
  }),
  update
);

/**
 * @api {delete} /activities/:id Delete activities
 * @apiName DeleteActivities
 * @apiGroup Activities
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Activities not found.
 */
router.delete("/:id", destroy);

export default router;
