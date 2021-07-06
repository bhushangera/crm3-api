import { Router } from "express";
import { middleware as query } from "querymen";
import { middleware as body } from "bodymen";
import { create, index, show, update, destroy } from "./controller";
import { schema } from "./model";
export ShadeSwatches, { schema } from "./model";

const router = new Router();
const {
  uuid,
  makeId,
  makeCode,
  makeDescription,
  logo,
  color,
  code,
  description,
  image,
  slug,
  isEdgeband, matt,
  hgl,
  shgl,
  vnr,
  spl,
  edgeBands,
} = schema.tree;

router.post(
  "/",
  body({
    uuid,
    makeId,
    makeCode,
    makeDescription,
    logo,
    color,
    code,
    description,
    image,
    slug,
    isEdgeband, matt,
    hgl,
    shgl,
    vnr,
    spl,
    edgeBands,
  }),
  create
);

router.get("/", query(), index);

router.get("/:id", show);

router.put(
  "/:id",
  body({
    uuid,
    makeId,
    makeCode,
    makeDescription,
    logo,
    color,
    code,
    description,
    image,
    slug,
    isEdgeband, matt,
    hgl,
    shgl,
    vnr,
    spl,
    edgeBands,
  }),
  update
);

router.delete("/:id", destroy);

export default router;
