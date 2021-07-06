import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export LoginTracker, { schema } from './model'

const router = new Router()
const { code } = schema.tree

/**
 * @api {post} /loginTracker Create login tracker
 * @apiName CreateLoginTracker
 * @apiGroup LoginTracker
 * @apiParam code Login tracker's code.
 * @apiSuccess {Object} loginTracker Login tracker's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Login tracker not found.
 */
router.post('/',
  body({ code }),
  create)

/**
 * @api {get} /loginTracker Retrieve login trackers
 * @apiName RetrieveLoginTrackers
 * @apiGroup LoginTracker
 * @apiUse listParams
 * @apiSuccess {Object[]} loginTrackers List of login trackers.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /loginTracker/:id Retrieve login tracker
 * @apiName RetrieveLoginTracker
 * @apiGroup LoginTracker
 * @apiSuccess {Object} loginTracker Login tracker's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Login tracker not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /loginTracker/:id Update login tracker
 * @apiName UpdateLoginTracker
 * @apiGroup LoginTracker
 * @apiParam code Login tracker's code.
 * @apiSuccess {Object} loginTracker Login tracker's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Login tracker not found.
 */
router.put('/:id',
  body({ code }),
  update)

/**
 * @api {delete} /loginTracker/:id Delete login tracker
 * @apiName DeleteLoginTracker
 * @apiGroup LoginTracker
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Login tracker not found.
 */
router.delete('/:id',
  destroy)

export default router
