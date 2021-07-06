import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export PurchaseOrders, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /purchaseOrders Create purchase orders
 * @apiName CreatePurchaseOrders
 * @apiGroup PurchaseOrders
 * @apiParam code Purchase orders's code.
 * @apiParam description Purchase orders's description.
 * @apiSuccess {Object} purchaseOrders Purchase orders's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Purchase orders not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /purchaseOrders Retrieve purchase orders
 * @apiName RetrievePurchaseOrders
 * @apiGroup PurchaseOrders
 * @apiUse listParams
 * @apiSuccess {Object[]} purchaseOrders List of purchase orders.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /purchaseOrders/:id Retrieve purchase orders
 * @apiName RetrievePurchaseOrders
 * @apiGroup PurchaseOrders
 * @apiSuccess {Object} purchaseOrders Purchase orders's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Purchase orders not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /purchaseOrders/:id Update purchase orders
 * @apiName UpdatePurchaseOrders
 * @apiGroup PurchaseOrders
 * @apiParam code Purchase orders's code.
 * @apiParam description Purchase orders's description.
 * @apiSuccess {Object} purchaseOrders Purchase orders's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Purchase orders not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /purchaseOrders/:id Delete purchase orders
 * @apiName DeletePurchaseOrders
 * @apiGroup PurchaseOrders
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Purchase orders not found.
 */
router.delete('/:id',
  destroy)

export default router
