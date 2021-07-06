import { Router } from "express";
import { middleware as query } from "querymen";
import { middleware as body } from "bodymen";
import { create, index, show, update, destroy } from "./controller";
import { schema } from "./model";
export EntityCategory, { schema } from "./model";

const router = new Router();
const {
  code,
  uuid,
  description,
  entityCode,
  entityId,
  groupId,
  groupCode,
  hasCategoryCodes,
  image,
  active,
} = schema.tree;

router.post(
  "/",
  body({
    code,
    uuid,
    description,
    entityId,
    groupId,
    groupCode,
    entityCode,
    hasCategoryCodes,
    image,
    active,
  }),
  create
);

router.get("/", query(), index);

router.get("/:id", show);

router.put(
  "/:id",
  body({
    code,
    uuid,
    description,
    entityId,
    groupId,
    groupCode,
    entityCode,
    hasCategoryCodes,
    image,
    active,
  }),
  update
);

/**
 * @api {delete} /entityCategory/:id Delete entity category
 * @apiName DeleteEntityCategory
 * @apiGroup EntityCategory
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Entity category not found.
 */
router.delete("/:id", destroy);

export default router;
