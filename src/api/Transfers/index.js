import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Transfers, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /Transfers Create transfers
 * @apiName CreateTransfers
 * @apiGroup Transfers
 * @apiParam code Transfers's code.
 * @apiParam description Transfers's description.
 * @apiSuccess {Object} transfers Transfers's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Transfers not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /Transfers Retrieve transfers
 * @apiName RetrieveTransfers
 * @apiGroup Transfers
 * @apiUse listParams
 * @apiSuccess {Object[]} transfers List of transfers.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /Transfers/:id Retrieve transfers
 * @apiName RetrieveTransfers
 * @apiGroup Transfers
 * @apiSuccess {Object} transfers Transfers's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Transfers not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /Transfers/:id Update transfers
 * @apiName UpdateTransfers
 * @apiGroup Transfers
 * @apiParam code Transfers's code.
 * @apiParam description Transfers's description.
 * @apiSuccess {Object} transfers Transfers's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Transfers not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /Transfers/:id Delete transfers
 * @apiName DeleteTransfers
 * @apiGroup Transfers
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Transfers not found.
 */
router.delete('/:id',
  destroy)

export default router
