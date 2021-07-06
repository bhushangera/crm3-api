import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export DeliveryNote, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /DeliveryNote Create delivery note
 * @apiName CreateDeliveryNote
 * @apiGroup DeliveryNote
 * @apiParam code Delivery note's code.
 * @apiParam description Delivery note's description.
 * @apiSuccess {Object} deliveryNote Delivery note's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Delivery note not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /DeliveryNote Retrieve delivery notes
 * @apiName RetrieveDeliveryNotes
 * @apiGroup DeliveryNote
 * @apiUse listParams
 * @apiSuccess {Object[]} deliveryNotes List of delivery notes.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /DeliveryNote/:id Retrieve delivery note
 * @apiName RetrieveDeliveryNote
 * @apiGroup DeliveryNote
 * @apiSuccess {Object} deliveryNote Delivery note's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Delivery note not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /DeliveryNote/:id Update delivery note
 * @apiName UpdateDeliveryNote
 * @apiGroup DeliveryNote
 * @apiParam code Delivery note's code.
 * @apiParam description Delivery note's description.
 * @apiSuccess {Object} deliveryNote Delivery note's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Delivery note not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /DeliveryNote/:id Delete delivery note
 * @apiName DeleteDeliveryNote
 * @apiGroup DeliveryNote
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Delivery note not found.
 */
router.delete('/:id',
  destroy)

export default router
