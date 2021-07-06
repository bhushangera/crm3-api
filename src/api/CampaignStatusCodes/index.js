import { Router } from "express";
import { middleware as query } from "querymen";
import { middleware as body } from "bodymen";
import { create, index, show, update, destroy } from "./controller";
import { schema } from "./model";
export CampaignStatusCodes, { schema } from "./model";

const router = new Router();
const {
  code,
  description,
  sortOrder,
  icon,
  colorId,
  background,
  foreground,
} = schema.tree;

/**
 * @api {post} /CampaignStatusCodes Create campaign status codes
 * @apiName CreateCampaignStatusCodes
 * @apiGroup CampaignStatusCodes
 * @apiParam code Campaign status codes's code.
 * @apiParam description Campaign status codes's description.
 * @apiSuccess {Object} campaignStatusCodes Campaign status codes's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Campaign status codes not found.
 */
router.post(
  "/",
  body({ code, description, sortOrder, icon, colorId, background, foreground }),
  create
);

/**
 * @api {get} /CampaignStatusCodes Retrieve campaign status codes
 * @apiName RetrieveCampaignStatusCodes
 * @apiGroup CampaignStatusCodes
 * @apiUse listParams
 * @apiSuccess {Object[]} campaignStatusCodes List of campaign status codes.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/", query(), index);

/**
 * @api {get} /CampaignStatusCodes/:id Retrieve campaign status codes
 * @apiName RetrieveCampaignStatusCodes
 * @apiGroup CampaignStatusCodes
 * @apiSuccess {Object} campaignStatusCodes Campaign status codes's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Campaign status codes not found.
 */
router.get("/:id", show);

/**
 * @api {put} /CampaignStatusCodes/:id Update campaign status codes
 * @apiName UpdateCampaignStatusCodes
 * @apiGroup CampaignStatusCodes
 * @apiParam code Campaign status codes's code.
 * @apiParam description Campaign status codes's description.
 * @apiSuccess {Object} campaignStatusCodes Campaign status codes's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Campaign status codes not found.
 */
router.put(
  "/:id",
  body({ code, description, sortOrder, icon, colorId, background, foreground }),
  update
);

/**
 * @api {delete} /CampaignStatusCodes/:id Delete campaign status codes
 * @apiName DeleteCampaignStatusCodes
 * @apiGroup CampaignStatusCodes
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Campaign status codes not found.
 */
router.delete("/:id", destroy);

export default router;
