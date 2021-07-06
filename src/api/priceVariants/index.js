import { Router } from "express";
import { middleware as query } from "querymen";
import { middleware as body } from "bodymen";
import { create, index, show, update, destroy } from "./controller";
import { schema } from "./model";
export PriceVariants, { schema } from "./model";

const router = new Router();
const {
  materialId,
  code,
  description,
  base,
  back,
  frontLamination,
  backLamination,
  upholsty,
  cushion,
  frame,
  active,
} = schema.tree;

/**
 * @api {post} /priceVariants Create price variants
 * @apiName CreatePriceVariants
 * @apiGroup PriceVariants
 * @apiParam code Price variants's code.
 * @apiParam description Price variants's description.
 * @apiSuccess {Object} priceVariants Price variants's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Price variants not found.
 */
router.post(
  "/",
  body({
    materialId,
    code,
    description,
    base,
    back,
    frontLamination,
    backLamination,
    upholsty,
    cushion,
    frame,
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
    code,
    description,
    base,
    back,
    frontLamination,
    backLamination,
    upholsty,
    cushion,
    frame,
    active,
  }),
  update
);

router.delete("/:id", destroy);

export default router;
