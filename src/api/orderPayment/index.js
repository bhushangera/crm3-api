import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export OrderPayment, { schema } from './model'

const router = new Router()
const { 
  orderId, orderAmount, paymentDate, paymentMode, ChequeNo, ChequeDate, ChequeDetails, OnlineTransactionId, amount, remarks, postedById, postedBy,
  } = schema.tree

/**
 * @api {post} /orderPayment Create order payment
 * @apiName CreateOrderPayment
 * @apiGroup OrderPayment
 * @apiParam orderId Order payment's orderId.
 * @apiParam orderAmount Order payment's orderAmount.
 * @apiParam paymentDate Order payment's paymentDate.
 * @apiParam paymentMode Order payment's paymentMode.
 * @apiParam ChequeNo Order payment's ChequeNo.
 * @apiParam ChequeDate Order payment's ChequeDate.
 * @apiParam ChequeDetails Order payment's ChequeDetails.
 * @apiParam OnlineTransactionId Order payment's OnlineTransactionId.
 * @apiParam amount Order payment's amount.
 * @apiParam remarks Order payment's remarks.
 * @apiParam postedById Order payment's postedById.
 * @apiParam postedBy Order payment's postedBy.
 * @apiParam  Order payment's .
 * @apiSuccess {Object} orderPayment Order payment's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Order payment not found.
 */
router.post('/',
  body({ 
    orderId, orderAmount, paymentDate, paymentMode, ChequeNo, ChequeDate, ChequeDetails, OnlineTransactionId, amount, remarks, postedById, postedBy
     }),
  create)

/**
 * @api {get} /orderPayment Retrieve order payments
 * @apiName RetrieveOrderPayments
 * @apiGroup OrderPayment
 * @apiUse listParams
 * @apiSuccess {Object[]} orderPayments List of order payments.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /orderPayment/:id Retrieve order payment
 * @apiName RetrieveOrderPayment
 * @apiGroup OrderPayment
 * @apiSuccess {Object} orderPayment Order payment's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Order payment not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /orderPayment/:id Update order payment
 * @apiName UpdateOrderPayment
 * @apiGroup OrderPayment
 * @apiParam orderId Order payment's orderId.
 * @apiParam orderAmount Order payment's orderAmount.
 * @apiParam paymentDate Order payment's paymentDate.
 * @apiParam paymentMode Order payment's paymentMode.
 * @apiParam ChequeNo Order payment's ChequeNo.
 * @apiParam ChequeDate Order payment's ChequeDate.
 * @apiParam ChequeDetails Order payment's ChequeDetails.
 * @apiParam OnlineTransactionId Order payment's OnlineTransactionId.
 * @apiParam amount Order payment's amount.
 * @apiParam remarks Order payment's remarks.
 * @apiParam postedById Order payment's postedById.
 * @apiParam postedBy Order payment's postedBy.
 * @apiParam  Order payment's .
 * @apiSuccess {Object} orderPayment Order payment's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Order payment not found.
 */
router.put('/:id',
  body({ 
    orderId, orderAmount, paymentDate, paymentMode, ChequeNo, ChequeDate, ChequeDetails, OnlineTransactionId, amount, remarks, postedById, postedBy
      }),
  update)

/**
 * @api {delete} /orderPayment/:id Delete order payment
 * @apiName DeleteOrderPayment
 * @apiGroup OrderPayment
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Order payment not found.
 */
router.delete('/:id',
  destroy)

export default router
