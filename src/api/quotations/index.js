import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Quotations, { schema } from './model'

const router = new Router()
const {
  sNo,
  originalSNo,
  counterId,
  uuid,
  buId,
  entityId,
  entityCode,
  quotDate,
  scrollNo,
  validFor,
  validity,
  createdById,
  createdBy,
  type,
  origRefId,
  revisionNo,
  slug,
  stateId,
  state,
  statusId,
  status,
  pdNo,
  refEmpId,
  refEmpName,
  managerId,
  managerName,
  reportsToUUID,
  reportsToName,
  designerId,
  designerName,
  generateBy,
  dealId,
  leadId,
  campaignId,
  itemId, itemCode,
  reasonId,
  reasonCode,
  reason,
  partyId,
  partyName,
  GSTIN,
  address,
  verifiedById,
  verifiedAt,
  approvedById,
  approvedByName,
  approvedAt,
  lostPartyId,
  lostPartyName,
  refPartyId,
  refPartyName,
  remarks,
  blocks,
  additional,
  addAppliances,
  appliances,
  apDiscount,
  appliance,
  wwDiscount,
  woodworking,
  additioniscount,
  addition,
  hwDiscount,
  fittings,
  includePacking,
  packingBy,
  packingFactor,
  packing,
  cartage,
  installation,
  splDiscount,
  includeTax
} = schema.tree

/**
 * @api {post} /quotations Create quotations
 * @apiName CreateQuotations
 * @apiGroup Quotations
 * @apiParam code Quotations's code.
 * @apiParam description Quotations's description.
 * @apiSuccess {Object} quotations Quotations's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Quotations not found.
 */
router.post(
  '/',
  body({
    sNo,
    originalSNo,
    counterId,
    uuid,
    buId,
    entityId,
    entityCode,
    quotDate,
    scrollNo,
    validFor,
    validity,
    createdById,
    createdBy,
    type,
    origRefId,
    revisionNo,
    slug,
    stateId,
    state,
    statusId,
    status,
    pdNo,
    refEmpId,
    refEmpName,
    managerId,
    managerName,
    reportsToUUID,
    reportsToName,
    designerId,
    designerName,
    generateBy,
    dealId,
    leadId,
    campaignId,
    itemId,
    itemCode,
    reasonId,
    reasonCode,
    reason,
    partyId,
    partyName,
    GSTIN,
    address,
    verifiedById,
    verifiedAt,
    approvedById,
    approvedByName,
    approvedAt,
    lostPartyId,
    lostPartyName,
    refPartyId,
    refPartyName,
    remarks,
    blocks,
    additional,
    addAppliances,
    appliances,
    apDiscount,
    appliance,
    wwDiscount,
    woodworking,
    additioniscount,
    addition,
    hwDiscount,
    fittings,
    includePacking,
    packingBy,
    packingFactor,
    packing,
    cartage,
    installation,
    splDiscount,
    includeTax
  }),
  create
)

/**
 * @api {get} /quotations Retrieve quotations
 * @apiName RetrieveQuotations
 * @apiGroup Quotations
 * @apiUse listParams
 * @apiSuccess {Object[]} quotations List of quotations.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/', query(), index)

/**
 * @api {get} /quotations/:id Retrieve quotations
 * @apiName RetrieveQuotations
 * @apiGroup Quotations
 * @apiSuccess {Object} quotations Quotations's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Quotations not found.
 */
router.get('/:id', show)

/**
 * @api {put} /quotations/:id Update quotations
 * @apiName UpdateQuotations
 * @apiGroup Quotations
 * @apiParam code Quotations's code.
 * @apiParam description Quotations's description.
 * @apiSuccess {Object} quotations Quotations's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Quotations not found.
 */
router.put(
  '/:id',
  body({
    sNo,
    originalSNo,
    counterId,
    uuid,
    buId,
    entityId,
    entityCode,
    quotDate,
    scrollNo,
    validFor,
    validity,
    createdById,
    createdBy,
    type,
    origRefId,
    revisionNo,
    slug,
    stateId,
    state,
    statusId,
    status,
    pdNo,
    refEmpId,
    refEmpName,
    managerId,
    managerName,
    reportsToUUID,
    reportsToName,
    designerId,
    designerName,
    generateBy,
    dealId,
    leadId,
    campaignId,
    itemId,
    itemCode,
    reasonId,
    reasonCode,
    reason,
    partyId,
    partyName,
    GSTIN,
    address,
    verifiedById,
    verifiedAt,
    approvedById,
    approvedByName,
    approvedAt,
    lostPartyId,
    lostPartyName,
    refPartyId,
    refPartyName,
    remarks,
    blocks,
    additional,
    addAppliances,
    appliances,
    apDiscount,
    appliance,
    wwDiscount,
    woodworking,
    additioniscount,
    addition,
    hwDiscount,
    fittings,
    includePacking,
    packingBy,
    packingFactor,
    packing,
    cartage,
    installation,
    splDiscount,
    includeTax
  }),
  update
)

/**
 * @api {delete} /quotations/:id Delete quotations
 * @apiName DeleteQuotations
 * @apiGroup Quotations
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Quotations not found.
 */
router.delete('/:id', destroy)

export default router
