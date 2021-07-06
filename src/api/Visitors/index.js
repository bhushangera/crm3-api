import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Visitors, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /Visitors Create visitors
 * @apiName CreateVisitors
 * @apiGroup Visitors
 * @apiParam code Visitors's code.
 * @apiParam description Visitors's description.
 * @apiSuccess {Object} visitors Visitors's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Visitors not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /Visitors Retrieve visitors
 * @apiName RetrieveVisitors
 * @apiGroup Visitors
 * @apiUse listParams
 * @apiSuccess {Object[]} visitors List of visitors.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /Visitors/:id Retrieve visitors
 * @apiName RetrieveVisitors
 * @apiGroup Visitors
 * @apiSuccess {Object} visitors Visitors's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Visitors not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /Visitors/:id Update visitors
 * @apiName UpdateVisitors
 * @apiGroup Visitors
 * @apiParam code Visitors's code.
 * @apiParam description Visitors's description.
 * @apiSuccess {Object} visitors Visitors's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Visitors not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /Visitors/:id Delete visitors
 * @apiName DeleteVisitors
 * @apiGroup Visitors
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Visitors not found.
 */
router.delete('/:id',
  destroy)

export default router
