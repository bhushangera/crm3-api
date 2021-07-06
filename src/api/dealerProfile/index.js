import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export DealerProfile, { schema } from './model'

const router = new Router()
const { userId, firmName, firmType, contactPerson, designation, mobile, landline, website, businessEmail, building, street, address, city, state, country, GSTIN, bank, account, branch, branchAddress, IFSC, MICR, pinCode } = schema.tree

/**
 * @api {post} /dealerProfile Create dealer profile
 * @apiName CreateDealerProfile
 * @apiGroup DealerProfile
 * @apiParam userId Dealer profile's userId.
 * @apiParam firmName Dealer profile's firmName.
 * @apiParam firmType Dealer profile's firmType.
 * @apiParam contactPerson Dealer profile's contactPerson.
 * @apiParam designation Dealer profile's designation.
 * @apiParam mobile Dealer profile's mobile.
 * @apiParam landline Dealer profile's landline.
 * @apiParam website Dealer profile's website.
 * @apiParam businessEmail Dealer profile's businessEmail.
 * @apiParam building Dealer profile's building.
 * @apiParam street Dealer profile's street.
 * @apiParam address Dealer profile's address.
 * @apiParam city Dealer profile's city.
 * @apiParam state Dealer profile's state.
 * @apiParam country Dealer profile's country.
 * @apiParam GSTIN Dealer profile's GSTIN.
 * @apiParam bank Dealer profile's bank.
 * @apiParam account Dealer profile's account.
 * @apiParam branch Dealer profile's branch.
 * @apiParam branchAddress Dealer profile's branchAddress.
 * @apiParam IFSC Dealer profile's IFSC.
 * @apiParam MICR Dealer profile's MICR.
 * @apiParam pinCode Dealer profile's pinCode.
 * @apiSuccess {Object} dealerProfile Dealer profile's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Dealer profile not found.
 */
router.post('/',
  body({ userId, firmName, firmType, contactPerson, designation, mobile, landline, website, businessEmail, building, street, address, city, state, country, GSTIN, bank, account, branch, branchAddress, IFSC, MICR, pinCode }),
  create)

/**
 * @api {get} /dealerProfile Retrieve dealer profiles
 * @apiName RetrieveDealerProfiles
 * @apiGroup DealerProfile
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of dealer profiles.
 * @apiSuccess {Object[]} rows List of dealer profiles.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /dealerProfile/:id Retrieve dealer profile
 * @apiName RetrieveDealerProfile
 * @apiGroup DealerProfile
 * @apiSuccess {Object} dealerProfile Dealer profile's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Dealer profile not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /dealerProfile/:id Update dealer profile
 * @apiName UpdateDealerProfile
 * @apiGroup DealerProfile
 * @apiParam userId Dealer profile's userId.
 * @apiParam firmName Dealer profile's firmName.
 * @apiParam firmType Dealer profile's firmType.
 * @apiParam contactPerson Dealer profile's contactPerson.
 * @apiParam designation Dealer profile's designation.
 * @apiParam mobile Dealer profile's mobile.
 * @apiParam landline Dealer profile's landline.
 * @apiParam website Dealer profile's website.
 * @apiParam businessEmail Dealer profile's businessEmail.
 * @apiParam building Dealer profile's building.
 * @apiParam street Dealer profile's street.
 * @apiParam address Dealer profile's address.
 * @apiParam city Dealer profile's city.
 * @apiParam state Dealer profile's state.
 * @apiParam country Dealer profile's country.
 * @apiParam GSTIN Dealer profile's GSTIN.
 * @apiParam bank Dealer profile's bank.
 * @apiParam account Dealer profile's account.
 * @apiParam branch Dealer profile's branch.
 * @apiParam branchAddress Dealer profile's branchAddress.
 * @apiParam IFSC Dealer profile's IFSC.
 * @apiParam MICR Dealer profile's MICR.
 * @apiParam pinCode Dealer profile's pinCode.
 * @apiSuccess {Object} dealerProfile Dealer profile's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Dealer profile not found.
 */
router.put('/:id',
  body({ userId, firmName, firmType, contactPerson, designation, mobile, landline, website, businessEmail, building, street, address, city, state, country, GSTIN, bank, account, branch, branchAddress, IFSC, MICR, pinCode }),
  update)

/**
 * @api {delete} /dealerProfile/:id Delete dealer profile
 * @apiName DeleteDealerProfile
 * @apiGroup DealerProfile
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Dealer profile not found.
 */
router.delete('/:id',
  destroy)

export default router
