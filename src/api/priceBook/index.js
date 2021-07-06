import { Router } from "express";
import { middleware as query } from "querymen";
import { middleware as body } from "bodymen";
import { create, index, show, update, destroy } from "./controller";
import { schema } from "./model";
export PriceBook, { schema } from "./model";

const router = new Router();
const {
  materialId,
  uuid,
  code,
  description,
  varaintId,
  variant,
  materialCost,
  factoryRate,
  safeRate,
  duties,
  exportRate,
  stdDiscount,
  discType,
  discount,
  listRate,
  active,
} = schema.tree;

router.post(
  "/",
  body({
    materialId,
    uuid,
    code,
    description,
    varaintId,
    variant,
    materialCost,
    factoryRate,
    safeRate,
    duties,
    exportRate,
    stdDiscount,
    discType,
    discount,
    listRate,
    active,
  }),
  create
);

router.get("/", query(), index);

router.get("/:id", show);

router.put(
  "/:id",
  body({
    materialId,
    uuid,
    code,
    description,
    varaintId,
    variant,
    materialCost,
    factoryRate,
    safeRate,
    duties,
    exportRate,
    stdDiscount,
    discType,
    discount,
    listRate,
    active,
  }),
  update
);

router.delete("/:id", destroy);

export default router;
