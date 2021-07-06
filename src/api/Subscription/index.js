import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Subscription, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /Subscription Create subscription
 * @apiName CreateSubscription
 * @apiGroup Subscription
 * @apiParam code Subscription's code.
 * @apiParam description Subscription's description.
 * @apiSuccess {Object} subscription Subscription's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Subscription not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /Subscription Retrieve subscriptions
 * @apiName RetrieveSubscriptions
 * @apiGroup Subscription
 * @apiUse listParams
 * @apiSuccess {Object[]} subscriptions List of subscriptions.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /Subscription/:id Retrieve subscription
 * @apiName RetrieveSubscription
 * @apiGroup Subscription
 * @apiSuccess {Object} subscription Subscription's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Subscription not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /Subscription/:id Update subscription
 * @apiName UpdateSubscription
 * @apiGroup Subscription
 * @apiParam code Subscription's code.
 * @apiParam description Subscription's description.
 * @apiSuccess {Object} subscription Subscription's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Subscription not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /Subscription/:id Delete subscription
 * @apiName DeleteSubscription
 * @apiGroup Subscription
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Subscription not found.
 */
router.delete('/:id',
  destroy)

export default router
