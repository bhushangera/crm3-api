import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Enquiries, { schema } from './model'

const router = new Router()
const { 
  enqDate,
  userId,
  partyId,
  partyDetails,
  subject,
  dpCategoryId,
  dlrProductId,
  text,
  fixPartitions,
  loosePartitons,
  drwInnotech,
  drwTelescopic,
  drwQuaddro,
  bcDepth,
  wcDepth,
  fresh,
  piSent,
  confirmed,
  productName,
} = schema.tree

/**
 * @api {post} /enquiries Create enquiries
 * @apiName CreateEnquiries
 * @apiGroup Enquiries
 * @apiParam enqDate Enquiries's enqDate.
 * @apiParam userId Enquiries's userId.
 * @apiParam dpId Enquiries's dpId.
 * @apiParam dealerName Enquiries's dealerName.
 * @apiParam dealerDetails Enquiries's dealerDetails.
 * @apiParam subject Enquiries's subject.
 * @apiParam text Enquiries's text.
 * @apiParam status Enquiries's status.
 * @apiSuccess {Object} enquiries Enquiries's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Enquiries not found.
 */
router.post('/',
  body({ 
    enqDate,
    userId,
    partyId,
    partyDetails,
    subject,
    dpCategoryId,
    dlrProductId,
    text,
    fixPartitions,
    loosePartitons,
    drwInnotech,
    drwTelescopic,
    drwQuaddro,
    bcDepth,
    wcDepth,
    fresh,
    piSent,
    confirmed,
    productName,
   }),
  create)

/**
 * @api {get} /enquiries Retrieve enquiries
 * @apiName RetrieveEnquiries
 * @apiGroup Enquiries
 * @apiUse listParams
 * @apiSuccess {Object[]} enquiries List of enquiries.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /enquiries/:id Retrieve enquiries
 * @apiName RetrieveEnquiries
 * @apiGroup Enquiries
 * @apiSuccess {Object} enquiries Enquiries's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Enquiries not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /enquiries/:id Update enquiries
 * @apiName UpdateEnquiries
 * @apiGroup Enquiries
 * @apiParam enqDate Enquiries's enqDate.
 * @apiParam userId Enquiries's userId.
 * @apiParam dpId Enquiries's dpId.
 * @apiParam dealerName Enquiries's dealerName.
 * @apiParam dealerDetails Enquiries's dealerDetails.
 * @apiParam subject Enquiries's subject.
 * @apiParam text Enquiries's text.
 * @apiParam status Enquiries's status.
 * @apiSuccess {Object} enquiries Enquiries's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Enquiries not found.
 */
router.put('/:id',
  body({ 
    enqDate,
    userId,
    partyId,
    partyDetails,
    subject,
    dpCategoryId,
    dlrProductId,
    text,
    fixPartitions,
    loosePartitons,
    drwInnotech,
    drwTelescopic,
    drwQuaddro,
    bcDepth,
    wcDepth,
    fresh,
    piSent,
    confirmed,
    productName,
}),
  update)

/**
 * @api {delete} /enquiries/:id Delete enquiries
 * @apiName DeleteEnquiries
 * @apiGroup Enquiries
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Enquiries not found.
 */
router.delete('/:id',
  destroy)

export default router
