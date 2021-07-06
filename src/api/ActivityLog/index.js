import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export ActivityLog, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /ActivityLog Create activity log
 * @apiName CreateActivityLog
 * @apiGroup ActivityLog
 * @apiParam code Activity log's code.
 * @apiParam description Activity log's description.
 * @apiSuccess {Object} activityLog Activity log's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Activity log not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /ActivityLog Retrieve activity logs
 * @apiName RetrieveActivityLogs
 * @apiGroup ActivityLog
 * @apiUse listParams
 * @apiSuccess {Object[]} activityLogs List of activity logs.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /ActivityLog/:id Retrieve activity log
 * @apiName RetrieveActivityLog
 * @apiGroup ActivityLog
 * @apiSuccess {Object} activityLog Activity log's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Activity log not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /ActivityLog/:id Update activity log
 * @apiName UpdateActivityLog
 * @apiGroup ActivityLog
 * @apiParam code Activity log's code.
 * @apiParam description Activity log's description.
 * @apiSuccess {Object} activityLog Activity log's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Activity log not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /ActivityLog/:id Delete activity log
 * @apiName DeleteActivityLog
 * @apiGroup ActivityLog
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Activity log not found.
 */
router.delete('/:id',
  destroy)

export default router
