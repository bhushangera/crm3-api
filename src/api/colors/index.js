import { Router } from "express";
import { middleware as query } from "querymen";
import { middleware as body } from "bodymen";
import { create, index, show, update, destroy } from "./controller";
import { schema } from "./model";
export Colors, { schema } from "./model";

const router = new Router();
const {
  code,
  background,
  foreground,
  fh,
  fs,
  fl,
  fa,
  bh,
  bs,
  bl,
  ba,
} = schema.tree;

/**
 * @api {post} /colors Create colors
 * @apiName CreateColors
 * @apiGroup Colors
 * @apiParam code Colors's code.
 * @apiParam background Colors's background.
 * @apiParam foreground, fh,
fs,
fl,
fa,
bh,
bs,
bl,
ba, Colors's foreground, fh,
fs,
fl,
fa,
bh,
bs,
bl,
ba,.
 * @apiSuccess {Object} colors Colors's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Colors not found.
 */
router.post(
  "/",
  body({ code, background, foreground, fh, fs, fl, fa, bh, bs, bl, ba }),
  create
);

/**
 * @api {get} /colors Retrieve colors
 * @apiName RetrieveColors
 * @apiGroup Colors
 * @apiUse listParams
 * @apiSuccess {Object[]} colors List of colors.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/", query(), index);

/**
 * @api {get} /colors/:id Retrieve colors
 * @apiName RetrieveColors
 * @apiGroup Colors
 * @apiSuccess {Object} colors Colors's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Colors not found.
 */
router.get("/:id", show);

/**
 * @api {put} /colors/:id Update colors
 * @apiName UpdateColors
 * @apiGroup Colors
 * @apiParam code Colors's code.
 * @apiParam background Colors's background.
 * @apiParam foreground, fh,
fs,
fl,
fa,
bh,
bs,
bl,
ba, Colors's foreground, fh,
fs,
fl,
fa,
bh,
bs,
bl,
ba,.
 * @apiSuccess {Object} colors Colors's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Colors not found.
 */
router.put(
  "/:id",
  body({ code, background, foreground, fh, fs, fl, fa, bh, bs, bl, ba }),
  update
);

/**
 * @api {delete} /colors/:id Delete colors
 * @apiName DeleteColors
 * @apiGroup Colors
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Colors not found.
 */
router.delete("/:id", destroy);

export default router;
