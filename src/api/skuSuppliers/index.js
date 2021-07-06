import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export SkuSuppliers, { schema } from './model'

const router = new Router()
const { SKUId, partyId, leadTime, ratingId, stars, rating, priority } = schema.tree

/**
 * @api {post} /skuSuppliers Create sku suppliers
 * @apiName CreateSkuSuppliers
 * @apiGroup SkuSuppliers
 * @apiParam SKUId Sku suppliers's SKUId.
 * @apiParam partyId Sku suppliers's partyId.
 * @apiParam leadTime Sku suppliers's leadTime.
 * @apiParam ratingId Sku suppliers's ratingId.
 * @apiParam stars Sku suppliers's stars.
 * @apiParam rating Sku suppliers's rating.
 * @apiParam priority Sku suppliers's priority.
 * @apiSuccess {Object} skuSuppliers Sku suppliers's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Sku suppliers not found.
 */
router.post('/',
  body({ SKUId, partyId, leadTime, ratingId, stars, rating, priority }),
  create)

/**
 * @api {get} /skuSuppliers Retrieve sku suppliers
 * @apiName RetrieveSkuSuppliers
 * @apiGroup SkuSuppliers
 * @apiUse listParams
 * @apiSuccess {Object[]} skuSuppliers List of sku suppliers.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /skuSuppliers/:id Retrieve sku suppliers
 * @apiName RetrieveSkuSuppliers
 * @apiGroup SkuSuppliers
 * @apiSuccess {Object} skuSuppliers Sku suppliers's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Sku suppliers not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /skuSuppliers/:id Update sku suppliers
 * @apiName UpdateSkuSuppliers
 * @apiGroup SkuSuppliers
 * @apiParam SKUId Sku suppliers's SKUId.
 * @apiParam partyId Sku suppliers's partyId.
 * @apiParam leadTime Sku suppliers's leadTime.
 * @apiParam ratingId Sku suppliers's ratingId.
 * @apiParam stars Sku suppliers's stars.
 * @apiParam rating Sku suppliers's rating.
 * @apiParam priority Sku suppliers's priority.
 * @apiSuccess {Object} skuSuppliers Sku suppliers's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Sku suppliers not found.
 */
router.put('/:id',
  body({ SKUId, partyId, leadTime, ratingId, stars, rating, priority }),
  update)

/**
 * @api {delete} /skuSuppliers/:id Delete sku suppliers
 * @apiName DeleteSkuSuppliers
 * @apiGroup SkuSuppliers
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Sku suppliers not found.
 */
router.delete('/:id',
  destroy)

export default router
