import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export PaymentTerms, { schema } from './model'

const router = new Router()
const { code, description, days, active } = schema.tree

/**
 * @api {post} /PaymentTerms Create payment terms
 * @apiName CreatePaymentTerms
 * @apiGroup PaymentTerms
 * @apiParam code Payment terms's code.
 * @apiParam description, days, active Payment terms's description, days, active.
 * @apiSuccess {Object} paymentTerms Payment terms's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Payment terms not found.
 */
router.post('/',
  body({ code, description, days, active }),
  create)

/**
 * @api {get} /PaymentTerms Retrieve payment terms
 * @apiName RetrievePaymentTerms
 * @apiGroup PaymentTerms
 * @apiUse listParams
 * @apiSuccess {Object[]} paymentTerms List of payment terms.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /PaymentTerms/:id Retrieve payment terms
 * @apiName RetrievePaymentTerms
 * @apiGroup PaymentTerms
 * @apiSuccess {Object} paymentTerms Payment terms's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Payment terms not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /PaymentTerms/:id Update payment terms
 * @apiName UpdatePaymentTerms
 * @apiGroup PaymentTerms
 * @apiParam code Payment terms's code.
 * @apiParam description, days, active Payment terms's description, days, active.
 * @apiSuccess {Object} paymentTerms Payment terms's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Payment terms not found.
 */
router.put('/:id',
  body({ code, description, days, active }),
  update)

/**
 * @api {delete} /PaymentTerms/:id Delete payment terms
 * @apiName DeletePaymentTerms
 * @apiGroup PaymentTerms
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Payment terms not found.
 */
router.delete('/:id',
  destroy)

export default router
