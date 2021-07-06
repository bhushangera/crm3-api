import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export SerialNumbers, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /SerialNumbers Create serial numbers
 * @apiName CreateSerialNumbers
 * @apiGroup SerialNumbers
 * @apiParam code Serial numbers's code.
 * @apiParam description Serial numbers's description.
 * @apiSuccess {Object} serialNumbers Serial numbers's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Serial numbers not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /SerialNumbers Retrieve serial numbers
 * @apiName RetrieveSerialNumbers
 * @apiGroup SerialNumbers
 * @apiUse listParams
 * @apiSuccess {Object[]} serialNumbers List of serial numbers.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /SerialNumbers/:id Retrieve serial numbers
 * @apiName RetrieveSerialNumbers
 * @apiGroup SerialNumbers
 * @apiSuccess {Object} serialNumbers Serial numbers's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Serial numbers not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /SerialNumbers/:id Update serial numbers
 * @apiName UpdateSerialNumbers
 * @apiGroup SerialNumbers
 * @apiParam code Serial numbers's code.
 * @apiParam description Serial numbers's description.
 * @apiSuccess {Object} serialNumbers Serial numbers's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Serial numbers not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /SerialNumbers/:id Delete serial numbers
 * @apiName DeleteSerialNumbers
 * @apiGroup SerialNumbers
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Serial numbers not found.
 */
router.delete('/:id',
  destroy)

export default router
