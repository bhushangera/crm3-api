import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export PiStatusCodes, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /piStatusCodes Create pi status codes
 * @apiName CreatePiStatusCodes
 * @apiGroup PiStatusCodes
 * @apiParam code Pi status codes's code.
 * @apiParam description Pi status codes's description.
 * @apiSuccess {Object} piStatusCodes Pi status codes's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Pi status codes not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /piStatusCodes Retrieve pi status codes
 * @apiName RetrievePiStatusCodes
 * @apiGroup PiStatusCodes
 * @apiUse listParams
 * @apiSuccess {Object[]} piStatusCodes List of pi status codes.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /piStatusCodes/:id Retrieve pi status codes
 * @apiName RetrievePiStatusCodes
 * @apiGroup PiStatusCodes
 * @apiSuccess {Object} piStatusCodes Pi status codes's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Pi status codes not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /piStatusCodes/:id Update pi status codes
 * @apiName UpdatePiStatusCodes
 * @apiGroup PiStatusCodes
 * @apiParam code Pi status codes's code.
 * @apiParam description Pi status codes's description.
 * @apiSuccess {Object} piStatusCodes Pi status codes's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Pi status codes not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /piStatusCodes/:id Delete pi status codes
 * @apiName DeletePiStatusCodes
 * @apiGroup PiStatusCodes
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Pi status codes not found.
 */
router.delete('/:id',
  destroy)

export default router
