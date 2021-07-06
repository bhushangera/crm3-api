import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export AttendanceRequest, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /AttendanceRequest Create attendance request
 * @apiName CreateAttendanceRequest
 * @apiGroup AttendanceRequest
 * @apiParam code Attendance request's code.
 * @apiParam description Attendance request's description.
 * @apiSuccess {Object} attendanceRequest Attendance request's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Attendance request not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /AttendanceRequest Retrieve attendance requests
 * @apiName RetrieveAttendanceRequests
 * @apiGroup AttendanceRequest
 * @apiUse listParams
 * @apiSuccess {Object[]} attendanceRequests List of attendance requests.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /AttendanceRequest/:id Retrieve attendance request
 * @apiName RetrieveAttendanceRequest
 * @apiGroup AttendanceRequest
 * @apiSuccess {Object} attendanceRequest Attendance request's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Attendance request not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /AttendanceRequest/:id Update attendance request
 * @apiName UpdateAttendanceRequest
 * @apiGroup AttendanceRequest
 * @apiParam code Attendance request's code.
 * @apiParam description Attendance request's description.
 * @apiSuccess {Object} attendanceRequest Attendance request's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Attendance request not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /AttendanceRequest/:id Delete attendance request
 * @apiName DeleteAttendanceRequest
 * @apiGroup AttendanceRequest
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Attendance request not found.
 */
router.delete('/:id',
  destroy)

export default router
