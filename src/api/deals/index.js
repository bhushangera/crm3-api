import { Router } from "express";
import { middleware as query } from "querymen";
import { middleware as body } from "bodymen";
import { create, index, show, update, destroy } from "./controller";
import { schema } from "./model";
export Deals, { schema } from "./model";

const router = new Router();
const {
  uuid,
  scrollNo,
  dealId,
  description,
  dealDetails,
  generateFrom,
  leadId,
  lead,
  party,
  partyId,
  userId,
  userName,
  teamId,
  team,
  teamLeaderId,
  teamLeader,
  managerId,
  manager,
  date,
  budget,
  probability,
  entityId,
  entityCode,
  stateId,
  state,
  statusId,
  status,
  categoryId,
  category,
  categoryCodeId,
  categoryCode,
  bestCase,
  worstCase,
  productCategoryId,
  productCategory,
  productCategoryCodeId,
  productCategoryCode,
  sourceId,
  sourceCode,
  sourceCategoryId,
  sourceCategoryCode,
  campiagnId,
  campaignCode,
  refPartyId,
} = schema.tree;

/**
 * @api {post} /deals Create deals
 * @apiName CreateDeals
 * @apiGroup Deals
 * @apiParam code Deals's code.
 * @apiParam description Deals's description.
 * @apiSuccess {Object} deals Deals's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Deals not found.
 */
router.post(
  "/",
  body({
    uuid,
    scrollNo,
    dealId,
    description,
    dealDetails,
    generateFrom,
    leadId,
    lead,
    party,
    partyId,
    userId,
    userName,
    teamId,
    team,
    teamLeaderId,
    teamLeader,
    managerId,
    manager,
    date,
    budget,
    probability,
    entityId,
    entityCode,
    stateId,
    state,
    statusId,
    status,
    categoryId,
    category,
    categoryCodeId,
    categoryCode,
    bestCase,
    worstCase,
    productCategoryId,
    productCategory,
    productCategoryCodeId,
    productCategoryCode,
    sourceId,
    sourceCode,
    sourceCategoryId,
    sourceCategoryCode,
    campiagnId,
    campaignCode,
    refPartyId,
  }),
  create
);

/**
 * @api {get} /deals Retrieve deals
 * @apiName RetrieveDeals
 * @apiGroup Deals
 * @apiUse listParams
 * @apiSuccess {Object[]} deals List of deals.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/", query(), index);

/**
 * @api {get} /deals/:id Retrieve deals
 * @apiName RetrieveDeals
 * @apiGroup Deals
 * @apiSuccess {Object} deals Deals's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Deals not found.
 */
router.get("/:id", show);

/**
 * @api {put} /deals/:id Update deals
 * @apiName UpdateDeals
 * @apiGroup Deals
 * @apiParam code Deals's code.
 * @apiParam description Deals's description.
 * @apiSuccess {Object} deals Deals's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Deals not found.
 */
router.put(
  "/:id",
  body({
    uuid,
    scrollNo,
    dealId,
    description,
    dealDetails,
    generateFrom,
    leadId,
    lead,
    party,
    partyId,
    userId,
    userName,
    teamId,
    team,
    teamLeaderId,
    teamLeader,
    managerId,
    manager,
    date,
    budget,
    probability,
    entityId,
    entityCode,
    stateId,
    state,
    statusId,
    status,
    categoryId,
    category,
    categoryCodeId,
    categoryCode,
    bestCase,
    worstCase,
    productCategoryId,
    productCategory,
    productCategoryCodeId,
    productCategoryCode,
    sourceId,
    sourceCode,
    sourceCategoryId,
    sourceCategoryCode,
    campiagnId,
    campaignCode,
    refPartyId,
  }),
  update
);

/**
 * @api {delete} /deals/:id Delete deals
 * @apiName DeleteDeals
 * @apiGroup Deals
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Deals not found.
 */
router.delete("/:id", destroy);

export default router;
