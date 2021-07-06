import { Router } from "express";
import { middleware as query } from "querymen";
import { middleware as body } from "bodymen";
import { create, index, show, update, destroy } from "./controller";
import { schema } from "./model";
export StatusReasons, { schema } from "./model";

const router = new Router();
const { code, sortOrder, description, statusId, statusCode } = schema.tree;

router.post(
  "/",
  body({ code, sortOrder, description, statusId, statusCode }),
  create
);

router.get("/", query(), index);

router.get("/:id", show);

router.put(
  "/:id",
  body({ code, sortOrder, description, statusId, statusCode }),
  update
);

router.delete("/:id", destroy);

export default router;
