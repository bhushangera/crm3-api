import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Operations, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /Operations Create operations
 * @apiName CreateOperations
 * @apiGroup Operations
 * @apiParam code Operations's code.
 * @apiParam description Operations's description.
 * @apiSuccess {Object} operations Operations's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Operations not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /Operations Retrieve operations
 * @apiName RetrieveOperations
 * @apiGroup Operations
 * @apiUse listParams
 * @apiSuccess {Object[]} operations List of operations.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /Operations/:id Retrieve operations
 * @apiName RetrieveOperations
 * @apiGroup Operations
 * @apiSuccess {Object} operations Operations's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Operations not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /Operations/:id Update operations
 * @apiName UpdateOperations
 * @apiGroup Operations
 * @apiParam code Operations's code.
 * @apiParam description Operations's description.
 * @apiSuccess {Object} operations Operations's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Operations not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /Operations/:id Delete operations
 * @apiName DeleteOperations
 * @apiGroup Operations
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Operations not found.
 */
router.delete('/:id',
  destroy)

export default router
