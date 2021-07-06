import { Router } from "express";
import { middleware as query } from "querymen";
import { middleware as body } from "bodymen";
import { create, index, show, update, destroy } from "./controller";
import { schema } from "./model";
export Webpages, { schema } from "./model";

const router = new Router();
const {
  code,
  pageLink,
  title,
  page,
  features,
  meta,
  sections, gallery,
  hasGallery,
  hasFeatures,
  hasSections,
  hasMetaTags,
} = schema.tree;

/**
 * @api {post} /webpages Create webpages
 * @apiName CreateWebpages
 * @apiGroup Webpages
 * @apiParam code Webpages's code.
 * @apiParam description Webpages's description.
 * @apiSuccess {Object} webpages Webpages's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Webpages not found.
 */
router.post(
  "/",
  body({
    code,
    pageLink,
    title,
    page,
    features,
    meta,
    sections, gallery,
    hasGallery,
    hasFeatures,
    hasSections,
    hasMetaTags,
  }),
  create
);

/**
 * @api {get} /webpages Retrieve webpages
 * @apiName RetrieveWebpages
 * @apiGroup Webpages
 * @apiUse listParams
 * @apiSuccess {Object[]} webpages List of webpages.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/", query(), index);

/**
 * @api {get} /webpages/:id Retrieve webpages
 * @apiName RetrieveWebpages
 * @apiGroup Webpages
 * @apiSuccess {Object} webpages Webpages's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Webpages not found.
 */
router.get("/:id", show);

/**
 * @api {put} /webpages/:id Update webpages
 * @apiName UpdateWebpages
 * @apiGroup Webpages
 * @apiParam code Webpages's code.
 * @apiParam description Webpages's description.
 * @apiSuccess {Object} webpages Webpages's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Webpages not found.
 */
router.put(
  "/:id",
  body({
    code,
    pageLink,
    title,
    page,
    features,
    meta,
    sections, gallery,
    hasGallery,
    hasFeatures,
    hasSections,
    hasMetaTags,
  }),
  update
);

/**
 * @api {delete} /webpages/:id Delete webpages
 * @apiName DeleteWebpages
 * @apiGroup Webpages
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Webpages not found.
 */
router.delete("/:id", destroy);

export default router;
