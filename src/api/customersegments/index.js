import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Customersegments, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /customersegments Create customersegments
 * @apiName CreateCustomersegments
 * @apiGroup Customersegments
 * @apiParam code Customersegments's code.
 * @apiParam description Customersegments's description.
 * @apiSuccess {Object} customersegments Customersegments's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Customersegments not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /customersegments Retrieve customersegments
 * @apiName RetrieveCustomersegments
 * @apiGroup Customersegments
 * @apiUse listParams
 * @apiSuccess {Object[]} customersegments List of customersegments.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /customersegments/:id Retrieve customersegments
 * @apiName RetrieveCustomersegments
 * @apiGroup Customersegments
 * @apiSuccess {Object} customersegments Customersegments's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Customersegments not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /customersegments/:id Update customersegments
 * @apiName UpdateCustomersegments
 * @apiGroup Customersegments
 * @apiParam code Customersegments's code.
 * @apiParam description Customersegments's description.
 * @apiSuccess {Object} customersegments Customersegments's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Customersegments not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /customersegments/:id Delete customersegments
 * @apiName DeleteCustomersegments
 * @apiGroup Customersegments
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Customersegments not found.
 */
router.delete('/:id',
  destroy)

export default router
