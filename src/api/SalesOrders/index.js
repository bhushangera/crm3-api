import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export SalesOrders, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /SalesOrders Create sales orders
 * @apiName CreateSalesOrders
 * @apiGroup SalesOrders
 * @apiParam code Sales orders's code.
 * @apiParam description Sales orders's description.
 * @apiSuccess {Object} salesOrders Sales orders's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Sales orders not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /SalesOrders Retrieve sales orders
 * @apiName RetrieveSalesOrders
 * @apiGroup SalesOrders
 * @apiUse listParams
 * @apiSuccess {Object[]} salesOrders List of sales orders.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /SalesOrders/:id Retrieve sales orders
 * @apiName RetrieveSalesOrders
 * @apiGroup SalesOrders
 * @apiSuccess {Object} salesOrders Sales orders's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Sales orders not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /SalesOrders/:id Update sales orders
 * @apiName UpdateSalesOrders
 * @apiGroup SalesOrders
 * @apiParam code Sales orders's code.
 * @apiParam description Sales orders's description.
 * @apiSuccess {Object} salesOrders Sales orders's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Sales orders not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /SalesOrders/:id Delete sales orders
 * @apiName DeleteSalesOrders
 * @apiGroup SalesOrders
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Sales orders not found.
 */
router.delete('/:id',
  destroy)

export default router
