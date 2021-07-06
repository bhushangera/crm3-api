import { Router } from "express";
import { middleware as query } from "querymen";
import { middleware as body } from "bodymen";
import { create, index, show, update, destroy } from "./controller";
import { schema } from "./model";
export Leads, { schema } from "./model";

const router = new Router();
const {
  id,
  uuid,
  leadId,
  scrollNo,
  leadByUserId,
  leadByUserName,
  date,
  leadDetails,
  buId,
  businessUnit,
  title,
  avatar,
  name,
  lastName,
  mobile,
  email,
  custType,
  companyCategoryId,
  companyCategory,
  companyCategoryCode,
  companyName,
  legalName,
  sectorCategoryId,
  sectorCategoryCode,
  address,
  entityId,
  entityCode,
  stateId,
  stateCode,
  category,
  categoryCodeId,
  categoryId,
  categoryCode,
  statusId,
  statusCode,
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
  managerId, reportsToUUID, reportsTo,
  manager,
  teamId,
  team,
  isProspect,
  converted,
  lostPartyId,
  lostParty,
  slug,
  budget,
  probability,
} = schema.tree;

/**
 * @api {post} /leads Create leads
 * @apiName CreateLeads
 * @apiGroup Leads
 * @apiParam name Leads's name.
 * @apiParam mobile Leads's mobile.
 * @apiParam email Leads's email.
 * @apiParam city Leads's city.
 * @apiParam for Leads's for.
 * @apiSuccess {Object} leads Leads's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Leads not found.
 */
router.post(
  "/",
  body({
    id,
    uuid,
    leadId,
    scrollNo,
    leadByUserId,
    leadByUserName,
    date,
    leadDetails,
    buId,
    businessUnit,
    title,
    avatar,
    name,
    lastName,
    mobile,
    email,
    custType,
    companyCategoryId,
    companyCategory,
    companyCategoryCode,
    companyName,
    legalName,
    sectorCategoryId,
    sectorCategoryCode,
    address,
    entityId,
    entityCode,
    stateId,
    stateCode,
    category,
    categoryCodeId,
    categoryId,
    categoryCode,
    statusId,
    statusCode,
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
    managerId, reportsToUUID, reportsTo,
    manager,
    teamId,
    team,
    isProspect,
    converted,
    lostPartyId,
    lostParty,
    slug,
    budget,
    probability,
  }),
  create
);

/**
 * @api {get} /leads Retrieve leads
 * @apiName RetrieveLeads
 * @apiGroup Leads
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of leads.
 * @apiSuccess {Object[]} rows List of leads.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/", query(), index);

/**
 * @api {get} /leads/:id Retrieve leads
 * @apiName RetrieveLeads
 * @apiGroup Leads
 * @apiSuccess {Object} leads Leads's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Leads not found.
 */
router.get("/:id", show);

/**
 * @api {put} /leads/:id Update leads
 * @apiName UpdateLeads
 * @apiGroup Leads
 * @apiParam name Leads's name.
 * @apiParam mobile Leads's mobile.
 * @apiParam email Leads's email.
 * @apiParam city Leads's city.
 * @apiParam for Leads's for.
 * @apiSuccess {Object} leads Leads's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Leads not found.
 */
router.put(
  "/:id",
  body({
    id,
    uuid,
    leadId,
    scrollNo,
    leadByUserId,
    leadByUserName,
    date,
    leadDetails,
    buId,
    businessUnit,
    title,
    avatar,
    name,
    lastName,
    mobile,
    email,
    custType,
    companyCategoryId,
    companyCategory,
    companyCategoryCode,
    companyName,
    legalName,
    sectorCategoryId,
    sectorCategoryCode,
    address,
    entityId,
    entityCode,
    stateId,
    stateCode,
    category,
    categoryCodeId,
    categoryId,
    categoryCode,
    statusId,
    statusCode,
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
    managerId, reportsToUUID, reportsTo,
    manager,
    teamId,
    team,
    isProspect,
    converted,
    lostPartyId,
    lostParty,
    slug,
    budget,
    probability,
  }),
  update
);

/**
 * @api {delete} /leads/:id Delete leads
 * @apiName DeleteLeads
 * @apiGroup Leads
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Leads not found.
 */
router.delete("/:id", destroy);

export default router;
