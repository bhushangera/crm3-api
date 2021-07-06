import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Warehouse, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /Warehouse Create warehouse
 * @apiName CreateWarehouse
 * @apiGroup Warehouse
 * @apiParam code Warehouse's code.
 * @apiParam description Warehouse's description.
 * @apiSuccess {Object} warehouse Warehouse's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Warehouse not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /Warehouse Retrieve warehouses
 * @apiName RetrieveWarehouses
 * @apiGroup Warehouse
 * @apiUse listParams
 * @apiSuccess {Object[]} warehouses List of warehouses.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /Warehouse/:id Retrieve warehouse
 * @apiName RetrieveWarehouse
 * @apiGroup Warehouse
 * @apiSuccess {Object} warehouse Warehouse's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Warehouse not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /Warehouse/:id Update warehouse
 * @apiName UpdateWarehouse
 * @apiGroup Warehouse
 * @apiParam code Warehouse's code.
 * @apiParam description Warehouse's description.
 * @apiSuccess {Object} warehouse Warehouse's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Warehouse not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /Warehouse/:id Delete warehouse
 * @apiName DeleteWarehouse
 * @apiGroup Warehouse
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Warehouse not found.
 */
router.delete('/:id',
  destroy)

export default router
