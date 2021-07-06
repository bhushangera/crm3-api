import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export WorkOrders, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /WorkOrders Create work orders
 * @apiName CreateWorkOrders
 * @apiGroup WorkOrders
 * @apiParam code Work orders's code.
 * @apiParam description Work orders's description.
 * @apiSuccess {Object} workOrders Work orders's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Work orders not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /WorkOrders Retrieve work orders
 * @apiName RetrieveWorkOrders
 * @apiGroup WorkOrders
 * @apiUse listParams
 * @apiSuccess {Object[]} workOrders List of work orders.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /WorkOrders/:id Retrieve work orders
 * @apiName RetrieveWorkOrders
 * @apiGroup WorkOrders
 * @apiSuccess {Object} workOrders Work orders's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Work orders not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /WorkOrders/:id Update work orders
 * @apiName UpdateWorkOrders
 * @apiGroup WorkOrders
 * @apiParam code Work orders's code.
 * @apiParam description Work orders's description.
 * @apiSuccess {Object} workOrders Work orders's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Work orders not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /WorkOrders/:id Delete work orders
 * @apiName DeleteWorkOrders
 * @apiGroup WorkOrders
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Work orders not found.
 */
router.delete('/:id',
  destroy)

export default router
