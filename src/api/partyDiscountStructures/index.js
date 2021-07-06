import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export PartyDiscountStructures, { schema } from './model'

const router = new Router()
const {
  partyId,
  MakeId,
  MakeCode,
  MakeImage,
  discount,
} = schema.tree

/**
 * @api {post} /partyDiscountStructures Create party discount structures
 * @apiName CreatePartyDiscountStructures
 * @apiGroup PartyDiscountStructures
 * @apiParam partyId, dfId Party discount structures's partyId, dfId.
 * @apiParam dfDetails Party discount structures's dfDetails.
 * @apiParam fromDate Party discount structures's fromDate.
 * @apiParam toDate Party discount structures's toDate.
 * @apiParam active Party discount structures's active.
 * @apiSuccess {Object} partyDiscountStructures Party discount structures's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Party discount structures not found.
 */
router.post('/',
  body({
    partyId,
    MakeId,
    MakeCode,
    MakeImage,
    discount,
  }),
  create)

/**
 * @api {get} /partyDiscountStructures Retrieve party discount structures
 * @apiName RetrievePartyDiscountStructures
 * @apiGroup PartyDiscountStructures
 * @apiUse listParams
 * @apiSuccess {Object[]} partyDiscountStructures List of party discount structures.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /partyDiscountStructures/:id Retrieve party discount structures
 * @apiName RetrievePartyDiscountStructures
 * @apiGroup PartyDiscountStructures
 * @apiSuccess {Object} partyDiscountStructures Party discount structures's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Party discount structures not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /partyDiscountStructures/:id Update party discount structures
 * @apiName UpdatePartyDiscountStructures
 * @apiGroup PartyDiscountStructures
 * @apiParam partyId, dfId Party discount structures's partyId, dfId.
 * @apiParam dfDetails Party discount structures's dfDetails.
 * @apiParam fromDate Party discount structures's fromDate.
 * @apiParam toDate Party discount structures's toDate.
 * @apiParam active Party discount structures's active.
 * @apiSuccess {Object} partyDiscountStructures Party discount structures's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Party discount structures not found.
 */
router.put('/:id',
  body({
    partyId,
    MakeId,
    MakeCode,
    MakeImage,
    discount,
   }),
  update)

/**
 * @api {delete} /partyDiscountStructures/:id Delete party discount structures
 * @apiName DeletePartyDiscountStructures
 * @apiGroup PartyDiscountStructures
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Party discount structures not found.
 */
router.delete('/:id',
  destroy)

export default router
