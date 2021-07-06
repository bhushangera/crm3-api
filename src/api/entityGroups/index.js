import { Router } from "express";
import { middleware as query } from "querymen";
import { middleware as body } from "bodymen";
import { create, index, show, update, destroy } from "./controller";
import { schema } from "./model";
export EntityGroups, { schema } from "./model";

const router = new Router();
const {
  code,
  uuid,
  description,
  sortOrder,
  icon,
  colorId,
  background,
  foreground,
  groupType,
  image,
  active,
} = schema.tree;

router.post(
  "/",
  body({
    code,
    uuid,
    description,
    sortOrder,
    icon,
    colorId,
    background,
    foreground,
    groupType,
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
    sortOrder,
    icon,
    colorId,
    background,
    foreground,
    groupType,
    image,
    active,
  }),
  update
);

router.delete("/:id", destroy);

export default router;
