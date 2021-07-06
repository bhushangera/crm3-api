import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Businessunits, { schema } from './model'

const router = new Router()
const {
  companyId,
  companyName,
  unitName,
  shortName,
  building,
  street,
  address,
  cityId,
  city,
  stateId,
  state,
  countryId,
  country,
  pinCode,
  email,
  landline,
  mobile,
  logo,
  gstin,
  pan,
  tan,
  bankBranch,
  bankName,
  branchAddress,
  bankAccount,
  bankACTitle,
  IFSC,
  MICR, headerTemplate, footerTemplate, terms,
  active,
} = schema.tree

/**
 * @api {post} /businessunits Create businessunits
 * @apiName CreateBusinessunits
 * @apiGroup Businessunits
 * @apiParam companyId Businessunits's companyId.
 * @apiParam companyName Businessunits's companyName.
 * @apiParam unitName Businessunits's unitName.
 * @apiParam shortName Businessunits's shortName.
 * @apiParam building Businessunits's building.
 * @apiParam street Businessunits's street.
 * @apiParam address Businessunits's address.
 * @apiParam cityId Businessunits's cityId.
 * @apiParam city Businessunits's city.
 * @apiParam stateId Businessunits's stateId.
 * @apiParam state Businessunits's state.
 * @apiParam countryId Businessunits's countryId.
 * @apiParam country Businessunits's country.
 * @apiParam pinCode Businessunits's pinCode.
 * @apiParam email Businessunits's email.
 * @apiParam landline Businessunits's landline.
 * @apiParam mobile Businessunits's mobile.
 * @apiParam logo Businessunits's logo.
 * @apiParam gstin Businessunits's gstin.
 * @apiParam bankName Businessunits's bankName.
 * @apiParam branchAddress Businessunits's branchAddress.
 * @apiParam bankAccount Businessunits's bankAccount.
 * @apiParam IFSC Businessunits's IFSC.
 * @apiParam MICR Businessunits's MICR.
 * @apiParam active Businessunits's active.
 * @apiSuccess {Object} businessunits Businessunits's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Businessunits not found.
 */
router.post('/',
  body({
    companyId,
    companyName,
    unitName,
    shortName,
    building,
    street,
    address,
    cityId,
    city,
    stateId,
    state,
    countryId,
    country,
    pinCode,
    email,
    landline,
    mobile,
    logo,
    gstin,
    pan,
    tan,
    bankBranch,
    bankName,
    branchAddress,
    bankAccount,
    bankACTitle,
    IFSC,
    MICR, headerTemplate, footerTemplate, terms,
    active,
  }),
  create)

/**
 * @api {get} /businessunits Retrieve businessunits
 * @apiName RetrieveBusinessunits
 * @apiGroup Businessunits
 * @apiUse listParams
 * @apiSuccess {Object[]} businessunits List of businessunits.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /businessunits/:id Retrieve businessunits
 * @apiName RetrieveBusinessunits
 * @apiGroup Businessunits
 * @apiSuccess {Object} businessunits Businessunits's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Businessunits not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /businessunits/:id Update businessunits
 * @apiName UpdateBusinessunits
 * @apiGroup Businessunits
 * @apiParam companyId Businessunits's companyId.
 * @apiParam companyName Businessunits's companyName.
 * @apiParam unitName Businessunits's unitName.
 * @apiParam shortName Businessunits's shortName.
 * @apiParam building Businessunits's building.
 * @apiParam street Businessunits's street.
 * @apiParam address Businessunits's address.
 * @apiParam cityId Businessunits's cityId.
 * @apiParam city Businessunits's city.
 * @apiParam stateId Businessunits's stateId.
 * @apiParam state Businessunits's state.
 * @apiParam countryId Businessunits's countryId.
 * @apiParam country Businessunits's country.
 * @apiParam pinCode Businessunits's pinCode.
 * @apiParam email Businessunits's email.
 * @apiParam landline Businessunits's landline.
 * @apiParam mobile Businessunits's mobile.
 * @apiParam logo Businessunits's logo.
 * @apiParam gstin Businessunits's gstin.
 * @apiParam bankName Businessunits's bankName.
 * @apiParam branchAddress Businessunits's branchAddress.
 * @apiParam bankAccount Businessunits's bankAccount.
 * @apiParam IFSC Businessunits's IFSC.
 * @apiParam MICR Businessunits's MICR.
 * @apiParam active Businessunits's active.
 * @apiSuccess {Object} businessunits Businessunits's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Businessunits not found.
 */
router.put('/:id',
  body({
    companyId,
    companyName,
    unitName,
    shortName,
    building,
    street,
    address,
    cityId,
    city,
    stateId,
    state,
    countryId,
    country,
    pinCode,
    email,
    landline,
    mobile,
    logo,
    gstin,
    pan,
    tan,
    bankBranch,
    bankName,
    branchAddress,
    bankAccount,
    bankACTitle,
    IFSC,
    MICR, headerTemplate, footerTemplate, terms,
    active,
  }),
  update)

/**
 * @api {delete} /businessunits/:id Delete businessunits
 * @apiName DeleteBusinessunits
 * @apiGroup Businessunits
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Businessunits not found.
 */
router.delete('/:id',
  destroy)

export default router
