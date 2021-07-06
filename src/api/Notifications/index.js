import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Notifications, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /Notifications Create notifications
 * @apiName CreateNotifications
 * @apiGroup Notifications
 * @apiParam code Notifications's code.
 * @apiParam description Notifications's description.
 * @apiSuccess {Object} notifications Notifications's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Notifications not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /Notifications Retrieve notifications
 * @apiName RetrieveNotifications
 * @apiGroup Notifications
 * @apiUse listParams
 * @apiSuccess {Object[]} notifications List of notifications.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /Notifications/:id Retrieve notifications
 * @apiName RetrieveNotifications
 * @apiGroup Notifications
 * @apiSuccess {Object} notifications Notifications's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Notifications not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /Notifications/:id Update notifications
 * @apiName UpdateNotifications
 * @apiGroup Notifications
 * @apiParam code Notifications's code.
 * @apiParam description Notifications's description.
 * @apiSuccess {Object} notifications Notifications's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Notifications not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /Notifications/:id Delete notifications
 * @apiName DeleteNotifications
 * @apiGroup Notifications
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Notifications not found.
 */
router.delete('/:id',
  destroy)

export default router
