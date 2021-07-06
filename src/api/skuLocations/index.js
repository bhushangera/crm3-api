import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export SkuLocations, { schema } from './model'

const router = new Router()
const { SKUId, SKU, partyId, partyDetails, SUId, SUCode, SUPId, SUPCode, partitionSize } = schema.tree

/**
 * @api {post} /skuLocations Create sku locations
 * @apiName CreateSkuLocations
 * @apiGroup SkuLocations
 * @apiParam SKUId Sku locations's SKUId.
 * @apiParam SKU Sku locations's SKU.
 * @apiParam partyId Sku locations's partyId.
 * @apiParam partyDetails Sku locations's partyDetails.
 * @apiParam SUId Sku locations's SUId.
 * @apiParam SUCode Sku locations's SUCode.
 * @apiParam SUPId Sku locations's SUPId.
 * @apiParam SUPCode Sku locations's SUPCode.
 * @apiParam partitionSize Sku locations's partitionSize.
 * @apiSuccess {Object} skuLocations Sku locations's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Sku locations not found.
 */
router.post('/',
  body({ SKUId, SKU, partyId, partyDetails, SUId, SUCode, SUPId, SUPCode, partitionSize }),
  create)

/**
 * @api {get} /skuLocations Retrieve sku locations
 * @apiName RetrieveSkuLocations
 * @apiGroup SkuLocations
 * @apiUse listParams
 * @apiSuccess {Object[]} skuLocations List of sku locations.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /skuLocations/:id Retrieve sku locations
 * @apiName RetrieveSkuLocations
 * @apiGroup SkuLocations
 * @apiSuccess {Object} skuLocations Sku locations's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Sku locations not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /skuLocations/:id Update sku locations
 * @apiName UpdateSkuLocations
 * @apiGroup SkuLocations
 * @apiParam SKUId Sku locations's SKUId.
 * @apiParam SKU Sku locations's SKU.
 * @apiParam partyId Sku locations's partyId.
 * @apiParam partyDetails Sku locations's partyDetails.
 * @apiParam SUId Sku locations's SUId.
 * @apiParam SUCode Sku locations's SUCode.
 * @apiParam SUPId Sku locations's SUPId.
 * @apiParam SUPCode Sku locations's SUPCode.
 * @apiParam partitionSize Sku locations's partitionSize.
 * @apiSuccess {Object} skuLocations Sku locations's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Sku locations not found.
 */
router.put('/:id',
  body({ SKUId, SKU, partyId, partyDetails, SUId, SUCode, SUPId, SUPCode, partitionSize }),
  update)

/**
 * @api {delete} /skuLocations/:id Delete sku locations
 * @apiName DeleteSkuLocations
 * @apiGroup SkuLocations
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Sku locations not found.
 */
router.delete('/:id',
  destroy)

export default router
