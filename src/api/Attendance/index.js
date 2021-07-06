import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Attendance, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /Attendance Create attendance
 * @apiName CreateAttendance
 * @apiGroup Attendance
 * @apiParam code Attendance's code.
 * @apiParam description Attendance's description.
 * @apiSuccess {Object} attendance Attendance's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Attendance not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /Attendance Retrieve attendances
 * @apiName RetrieveAttendances
 * @apiGroup Attendance
 * @apiUse listParams
 * @apiSuccess {Object[]} attendances List of attendances.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /Attendance/:id Retrieve attendance
 * @apiName RetrieveAttendance
 * @apiGroup Attendance
 * @apiSuccess {Object} attendance Attendance's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Attendance not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /Attendance/:id Update attendance
 * @apiName UpdateAttendance
 * @apiGroup Attendance
 * @apiParam code Attendance's code.
 * @apiParam description Attendance's description.
 * @apiSuccess {Object} attendance Attendance's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Attendance not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /Attendance/:id Delete attendance
 * @apiName DeleteAttendance
 * @apiGroup Attendance
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Attendance not found.
 */
router.delete('/:id',
  destroy)

export default router
