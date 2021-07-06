import { Router } from "express";
import { middleware as query } from "querymen";
import { middleware as body } from "bodymen";
import { create, index, show, update, destroy } from "./controller";
import { schema } from "./model";
export Banner, { schema } from "./model";

const router = new Router();
const { image, title, text1, text2, btnText, pageCode, btnLink } = schema.tree;

/**
 * @api {post} /banner Create banner
 * @apiName CreateBanner
 * @apiGroup Banner
 * @apiParam image Banner's image.
 * @apiParam text1 Banner's text1.
 * @apiParam text2 Banner's text2.
 * @apiParam btnLink Banner's btnLink.
 * @apiSuccess {Object} banner Banner's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Banner not found.
 */
router.post(
  "/",
  body({ image, title, text1, text2, btnText, pageCode, btnLink }),
  create
);

/**
 * @api {get} /banner Retrieve banners
 * @apiName RetrieveBanners
 * @apiGroup Banner
 * @apiUse listParams
 * @apiSuccess {Object[]} banners List of banners.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/", query(), index);

/**
 * @api {get} /banner/:id Retrieve banner
 * @apiName RetrieveBanner
 * @apiGroup Banner
 * @apiSuccess {Object} banner Banner's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Banner not found.
 */
router.get("/:id", show);

/**
 * @api {put} /banner/:id Update banner
 * @apiName UpdateBanner
 * @apiGroup Banner
 * @apiParam image Banner's image.
 * @apiParam text1 Banner's text1.
 * @apiParam text2 Banner's text2.
 * @apiParam btnLink Banner's btnLink.
 * @apiSuccess {Object} banner Banner's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Banner not found.
 */
router.put(
  "/:id",
  body({ image, title, text1, text2, btnText, pageCode, btnLink }),
  update
);

/**
 * @api {delete} /banner/:id Delete banner
 * @apiName DeleteBanner
 * @apiGroup Banner
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Banner not found.
 */
router.delete("/:id", destroy);

export default router;
