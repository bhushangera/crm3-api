import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export OrderScroll, { schema } from './model'

const router = new Router()
const { orderId, PI, PIId, MCode, image, Price, GSTAmount, Qty, totalAmount } = schema.tree

/**
 * @api {post} /orderScroll Create order scroll
 * @apiName CreateOrderScroll
 * @apiGroup OrderScroll
 * @apiParam orderId Order scroll's orderId.
 * @apiParam SKUId Order scroll's SKUId.
 * @apiParam PIId Order scroll's PIId.
 * @apiParam Price Order scroll's Price.
 * @apiParam discount Order scroll's discount.
 * @apiParam GST Order scroll's GST.
 * @apiParam GSTAmount Order scroll's GSTAmount.
 * @apiParam Qty Order scroll's Qty.
 * @apiParam shipping Order scroll's shipping.
 * @apiParam totalAmount Order scroll's totalAmount.
 * @apiSuccess {Object} orderScroll Order scroll's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Order scroll not found.
 */
router.post(
  '/',
  body({
    orderId,
    PI,
    PIId,
    MCode,
    image,
    Price,
    GSTAmount,
    Qty,
    totalAmount
  }),
  create
)

/**
 * @api {get} /orderScroll Retrieve order scrolls
 * @apiName RetrieveOrderScrolls
 * @apiGroup OrderScroll
 * @apiUse listParams
 * @apiSuccess {Object[]} orderScrolls List of order scrolls.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/', query(), index)

/**
 * @api {get} /orderScroll/:id Retrieve order scroll
 * @apiName RetrieveOrderScroll
 * @apiGroup OrderScroll
 * @apiSuccess {Object} orderScroll Order scroll's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Order scroll not found.
 */
router.get('/:id', show)

/**
 * @api {put} /orderScroll/:id Update order scroll
 * @apiName UpdateOrderScroll
 * @apiGroup OrderScroll
 * @apiParam orderId Order scroll's orderId.
 * @apiParam SKUId Order scroll's SKUId.
 * @apiParam PIId Order scroll's PIId.
 * @apiParam Price Order scroll's Price.
 * @apiParam discount Order scroll's discount.
 * @apiParam GST Order scroll's GST.
 * @apiParam GSTAmount Order scroll's GSTAmount.
 * @apiParam Qty Order scroll's Qty.
 * @apiParam shipping Order scroll's shipping.
 * @apiParam totalAmount Order scroll's totalAmount.
 * @apiSuccess {Object} orderScroll Order scroll's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Order scroll not found.
 */
router.put(
  '/:id',
  body({
    orderId,
    PI,
    PIId,
    MCode,
    image,
    Price,
    GSTAmount,
    Qty,
    totalAmount
  }),
  update
)

/**
 * @api {delete} /orderScroll/:id Delete order scroll
 * @apiName DeleteOrderScroll
 * @apiGroup OrderScroll
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Order scroll not found.
 */
router.delete('/:id', destroy)

export default router
