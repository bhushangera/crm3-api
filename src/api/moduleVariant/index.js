import { Router } from "express";
import { middleware as query } from "querymen";
import { middleware as body } from "bodymen";
import { create, index, show, update, destroy } from "./controller";
import { schema } from "./model";
export ModuleVariant, { schema } from "./model";

const router = new Router();
const {
  uuid,
  entityId,
  entityCode,
  categoryId,
  category,
  categoryDescription,
  categoryCodeId,
  categoryCode,
  categoryCodeDescription,
  image,
  code,
  description,
  remarks,
  active,
  operativeFactorId,
  operativeFactor,
  carcassRates,
  shutterRates,
  billingUnit,
  carcass,
  shutter,
} = schema.tree;

router.post(
  "/",
  body({
    uuid,
    entityId,
    entityCode,
    categoryId,
    category,
    categoryDescription,
    categoryCodeId,
    categoryCode,
    categoryCodeDescription,
    image,
    code,
    description,
    remarks,
    active,
    operativeFactorId,
    operativeFactor,
    carcassRates,
    shutterRates,
    billingUnit,
    carcass,
    shutter,
  }),
  create
);

router.get("/", query(), index);

router.get("/:id", show);

router.put(
  "/:id",
  body({
    uuid,
    entityId,
    entityCode,
    categoryId,
    category,
    categoryDescription,
    categoryCodeId,
    categoryCode,
    categoryCodeDescription,
    image,
    code,
    description,
    remarks,
    active,
    operativeFactorId,
    operativeFactor,
    carcassRates,
    shutterRates,
    billingUnit,
    carcass,
    shutter,
  }),
  update
);

router.delete("/:id", destroy);

export default router;
