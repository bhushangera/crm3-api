import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export SmsTransactions, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /SMSTransactions Create sms transactions
 * @apiName CreateSmsTransactions
 * @apiGroup SmsTransactions
 * @apiParam code Sms transactions's code.
 * @apiParam description Sms transactions's description.
 * @apiSuccess {Object} smsTransactions Sms transactions's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Sms transactions not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /SMSTransactions Retrieve sms transactions
 * @apiName RetrieveSmsTransactions
 * @apiGroup SmsTransactions
 * @apiUse listParams
 * @apiSuccess {Object[]} smsTransactions List of sms transactions.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /SMSTransactions/:id Retrieve sms transactions
 * @apiName RetrieveSmsTransactions
 * @apiGroup SmsTransactions
 * @apiSuccess {Object} smsTransactions Sms transactions's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Sms transactions not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /SMSTransactions/:id Update sms transactions
 * @apiName UpdateSmsTransactions
 * @apiGroup SmsTransactions
 * @apiParam code Sms transactions's code.
 * @apiParam description Sms transactions's description.
 * @apiSuccess {Object} smsTransactions Sms transactions's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Sms transactions not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /SMSTransactions/:id Delete sms transactions
 * @apiName DeleteSmsTransactions
 * @apiGroup SmsTransactions
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Sms transactions not found.
 */
router.delete('/:id',
  destroy)

export default router
