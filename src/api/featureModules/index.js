import { Router } from "express";
import { middleware as query } from "querymen";
import { middleware as body } from "bodymen";
import { create, index, show, update, destroy } from "./controller";
import { schema } from "./model";
export FeatureModules, { schema } from "./model";

const router = new Router();
const {
  code,
  sortOrder,
  label,
  description,
  dailyCost,
  active,
  isCore,
} = schema.tree;

router.post(
  "/",
  body({ code, sortOrder, label, description, dailyCost, active, isCore }),
  create
);

router.get("/", query(), index);

router.get("/:id", show);

router.put(
  "/:id",
  body({ code, sortOrder, label, description, dailyCost, active, isCore }),
  update
);

router.delete("/:id", destroy);

export default router;
