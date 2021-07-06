import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export PartyStorageUnits, { schema } from './model'

const router = new Router()
const { partyId, partyDetails, SUTypeId, SUTypeCode, code, description } = schema.tree

/**
 * @api {post} /partyStorageUnits Create party storage units
 * @apiName CreatePartyStorageUnits
 * @apiGroup PartyStorageUnits
 * @apiParam partyId Party storage units's partyId.
 * @apiParam partyDetails Party storage units's partyDetails.
 * @apiParam SUTypeId Party storage units's SUTypeId.
 * @apiParam SUTypeCode Party storage units's SUTypeCode.
 * @apiParam code Party storage units's code.
 * @apiParam description Party storage units's description.
 * @apiSuccess {Object} partyStorageUnits Party storage units's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Party storage units not found.
 */
router.post('/',
  body({ partyId, partyDetails, SUTypeId, SUTypeCode, code, description }),
  create)

/**
 * @api {get} /partyStorageUnits Retrieve party storage units
 * @apiName RetrievePartyStorageUnits
 * @apiGroup PartyStorageUnits
 * @apiUse listParams
 * @apiSuccess {Object[]} partyStorageUnits List of party storage units.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /partyStorageUnits/:id Retrieve party storage units
 * @apiName RetrievePartyStorageUnits
 * @apiGroup PartyStorageUnits
 * @apiSuccess {Object} partyStorageUnits Party storage units's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Party storage units not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /partyStorageUnits/:id Update party storage units
 * @apiName UpdatePartyStorageUnits
 * @apiGroup PartyStorageUnits
 * @apiParam partyId Party storage units's partyId.
 * @apiParam partyDetails Party storage units's partyDetails.
 * @apiParam SUTypeId Party storage units's SUTypeId.
 * @apiParam SUTypeCode Party storage units's SUTypeCode.
 * @apiParam code Party storage units's code.
 * @apiParam description Party storage units's description.
 * @apiSuccess {Object} partyStorageUnits Party storage units's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Party storage units not found.
 */
router.put('/:id',
  body({ partyId, partyDetails, SUTypeId, SUTypeCode, code, description }),
  update)

/**
 * @api {delete} /partyStorageUnits/:id Delete party storage units
 * @apiName DeletePartyStorageUnits
 * @apiGroup PartyStorageUnits
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Party storage units not found.
 */
router.delete('/:id',
  destroy)

export default router
