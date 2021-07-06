import { Router } from "express";
import { middleware as query } from "querymen";
import { middleware as body } from "bodymen";
import { create, index, show, update, destroy } from "./controller";
import { schema } from "./model";
export Campaigns, { schema } from "./model";

const router = new Router();
const {
  buId,
  uuid,
  scrollNo,
  campId,
  unitName,
  code,
  description,
  splRemarks,
  sharewithEmpGroup,
  startDate,
  endDate,
  entityId,
  entityCode,
  stateId,
  stateCode,
  categoryId,
  category,
  statusId,
  status,
  categoryCodeId,
  categoryCode,
  managerId,
  venue,
  commercials,
  response,
  slug,
} = schema.tree;

/**
 * @api {post} /campaigns Create campaigns
 * @apiName CreateCampaigns
 * @apiGroup Campaigns
 * @apiParam code Campaigns's code.
 * @apiParam description Campaigns's description.
 * @apiSuccess {Object} campaigns Campaigns's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Campaigns not found.
 */
router.post(
  "/",
  body({
    buId,
    uuid,
    scrollNo,
    campId,
    unitName,
    code,
    description,
    splRemarks,
    sharewithEmpGroup,
    startDate,
    endDate,
    entityId,
    entityCode,
    stateId,
    stateCode,
    categoryId,
    category,
    statusId,
    status,
    categoryCodeId,
    categoryCode,
    managerId,
    venue,
    commercials,
    response,
    slug,
  }),
  create
);

/**
 * @api {get} /campaigns Retrieve campaigns
 * @apiName RetrieveCampaigns
 * @apiGroup Campaigns
 * @apiUse listParams
 * @apiSuccess {Object[]} campaigns List of campaigns.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/", query(), index);

/**
 * @api {get} /campaigns/:id Retrieve campaigns
 * @apiName RetrieveCampaigns
 * @apiGroup Campaigns
 * @apiSuccess {Object} campaigns Campaigns's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Campaigns not found.
 */
router.get("/:id", show);

/**
 * @api {put} /campaigns/:id Update campaigns
 * @apiName UpdateCampaigns
 * @apiGroup Campaigns
 * @apiParam code Campaigns's code.
 * @apiParam description Campaigns's description.
 * @apiSuccess {Object} campaigns Campaigns's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Campaigns not found.
 */
router.put(
  "/:id",
  body({
    buId,
    uuid,
    scrollNo,
    campId,
    unitName,
    code,
    description,
    splRemarks,
    sharewithEmpGroup,
    startDate,
    endDate,
    entityId,
    entityCode,
    stateId,
    stateCode,
    categoryId,
    category,
    statusId,
    status,
    categoryCodeId,
    categoryCode,
    managerId,
    venue,
    commercials,
    response,
    slug,
  }),
  update
);

/**
 * @api {delete} /campaigns/:id Delete campaigns
 * @apiName DeleteCampaigns
 * @apiGroup Campaigns
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Campaigns not found.
 */
router.delete("/:id", destroy);

export default router;
