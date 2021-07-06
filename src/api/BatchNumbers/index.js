import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export BatchNumbers, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /BatchNumbers Create batch numbers
 * @apiName CreateBatchNumbers
 * @apiGroup BatchNumbers
 * @apiParam code Batch numbers's code.
 * @apiParam description Batch numbers's description.
 * @apiSuccess {Object} batchNumbers Batch numbers's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Batch numbers not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /BatchNumbers Retrieve batch numbers
 * @apiName RetrieveBatchNumbers
 * @apiGroup BatchNumbers
 * @apiUse listParams
 * @apiSuccess {Object[]} batchNumbers List of batch numbers.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /BatchNumbers/:id Retrieve batch numbers
 * @apiName RetrieveBatchNumbers
 * @apiGroup BatchNumbers
 * @apiSuccess {Object} batchNumbers Batch numbers's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Batch numbers not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /BatchNumbers/:id Update batch numbers
 * @apiName UpdateBatchNumbers
 * @apiGroup BatchNumbers
 * @apiParam code Batch numbers's code.
 * @apiParam description Batch numbers's description.
 * @apiSuccess {Object} batchNumbers Batch numbers's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Batch numbers not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /BatchNumbers/:id Delete batch numbers
 * @apiName DeleteBatchNumbers
 * @apiGroup BatchNumbers
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Batch numbers not found.
 */
router.delete('/:id',
  destroy)

export default router
