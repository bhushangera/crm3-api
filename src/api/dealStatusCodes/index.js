import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export DealStatusCodes, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /dealStatusCodes Create deal status codes
 * @apiName CreateDealStatusCodes
 * @apiGroup DealStatusCodes
 * @apiParam code Deal status codes's code.
 * @apiParam description Deal status codes's description.
 * @apiSuccess {Object} dealStatusCodes Deal status codes's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Deal status codes not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /dealStatusCodes Retrieve deal status codes
 * @apiName RetrieveDealStatusCodes
 * @apiGroup DealStatusCodes
 * @apiUse listParams
 * @apiSuccess {Object[]} dealStatusCodes List of deal status codes.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /dealStatusCodes/:id Retrieve deal status codes
 * @apiName RetrieveDealStatusCodes
 * @apiGroup DealStatusCodes
 * @apiSuccess {Object} dealStatusCodes Deal status codes's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Deal status codes not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /dealStatusCodes/:id Update deal status codes
 * @apiName UpdateDealStatusCodes
 * @apiGroup DealStatusCodes
 * @apiParam code Deal status codes's code.
 * @apiParam description Deal status codes's description.
 * @apiSuccess {Object} dealStatusCodes Deal status codes's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Deal status codes not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /dealStatusCodes/:id Delete deal status codes
 * @apiName DeleteDealStatusCodes
 * @apiGroup DealStatusCodes
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Deal status codes not found.
 */
router.delete('/:id',
  destroy)

export default router
