import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export SmsCounter, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /SMSCounter Create sms counter
 * @apiName CreateSmsCounter
 * @apiGroup SmsCounter
 * @apiParam code Sms counter's code.
 * @apiParam description Sms counter's description.
 * @apiSuccess {Object} smsCounter Sms counter's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Sms counter not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /SMSCounter Retrieve sms counters
 * @apiName RetrieveSmsCounters
 * @apiGroup SmsCounter
 * @apiUse listParams
 * @apiSuccess {Object[]} smsCounters List of sms counters.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /SMSCounter/:id Retrieve sms counter
 * @apiName RetrieveSmsCounter
 * @apiGroup SmsCounter
 * @apiSuccess {Object} smsCounter Sms counter's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Sms counter not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /SMSCounter/:id Update sms counter
 * @apiName UpdateSmsCounter
 * @apiGroup SmsCounter
 * @apiParam code Sms counter's code.
 * @apiParam description Sms counter's description.
 * @apiSuccess {Object} smsCounter Sms counter's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Sms counter not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /SMSCounter/:id Delete sms counter
 * @apiName DeleteSmsCounter
 * @apiGroup SmsCounter
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Sms counter not found.
 */
router.delete('/:id',
  destroy)

export default router
