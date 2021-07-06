import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Consumables, { schema } from './model'

const router = new Router()
const { code, description, type, isHinge, isGlue, isEBGlue, rate, gst } = schema.tree

/**
 * @api {post} /consumables Create consumables
 * @apiName CreateConsumables
 * @apiGroup Consumables
 * @apiParam code Consumables's code.
 * @apiParam description Consumables's description.
 * @apiSuccess {Object} consumables Consumables's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Consumables not found.
 */
router.post('/',
  body({ code, description, type, isHinge, isGlue, isEBGlue, rate, gst }),
  create)

/**
 * @api {get} /consumables Retrieve consumables
 * @apiName RetrieveConsumables
 * @apiGroup Consumables
 * @apiUse listParams
 * @apiSuccess {Object[]} consumables List of consumables.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /consumables/:id Retrieve consumables
 * @apiName RetrieveConsumables
 * @apiGroup Consumables
 * @apiSuccess {Object} consumables Consumables's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Consumables not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /consumables/:id Update consumables
 * @apiName UpdateConsumables
 * @apiGroup Consumables
 * @apiParam code Consumables's code.
 * @apiParam description Consumables's description.
 * @apiSuccess {Object} consumables Consumables's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Consumables not found.
 */
router.put('/:id',
  body({ code, description, type, isHinge, isGlue, isEBGlue, rate, gst }),
  update)

/**
 * @api {delete} /consumables/:id Delete consumables
 * @apiName DeleteConsumables
 * @apiGroup Consumables
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Consumables not found.
 */
router.delete('/:id',
  destroy)

export default router
