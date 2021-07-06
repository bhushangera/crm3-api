import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Messaging, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /Messaging Create messaging
 * @apiName CreateMessaging
 * @apiGroup Messaging
 * @apiParam code Messaging's code.
 * @apiParam description Messaging's description.
 * @apiSuccess {Object} messaging Messaging's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Messaging not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /Messaging Retrieve messagings
 * @apiName RetrieveMessagings
 * @apiGroup Messaging
 * @apiUse listParams
 * @apiSuccess {Object[]} messagings List of messagings.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /Messaging/:id Retrieve messaging
 * @apiName RetrieveMessaging
 * @apiGroup Messaging
 * @apiSuccess {Object} messaging Messaging's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Messaging not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /Messaging/:id Update messaging
 * @apiName UpdateMessaging
 * @apiGroup Messaging
 * @apiParam code Messaging's code.
 * @apiParam description Messaging's description.
 * @apiSuccess {Object} messaging Messaging's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Messaging not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /Messaging/:id Delete messaging
 * @apiName DeleteMessaging
 * @apiGroup Messaging
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Messaging not found.
 */
router.delete('/:id',
  destroy)

export default router
