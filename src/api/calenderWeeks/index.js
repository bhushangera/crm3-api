import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export CalenderWeeks, { schema } from './model'

const router = new Router()
const { weekNo, startDate, endDate, active } = schema.tree

/**
 * @api {post} /calenderWeeks Create calender weeks
 * @apiName CreateCalenderWeeks
 * @apiGroup CalenderWeeks
 * @apiParam weekNo Calender weeks's weekNo.
 * @apiParam startDate Calender weeks's startDate.
 * @apiParam endDate Calender weeks's endDate.
 * @apiParam active Calender weeks's active.
 * @apiSuccess {Object} calenderWeeks Calender weeks's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Calender weeks not found.
 */
router.post('/',
  body({ weekNo, startDate, endDate, active }),
  create)

/**
 * @api {get} /calenderWeeks Retrieve calender weeks
 * @apiName RetrieveCalenderWeeks
 * @apiGroup CalenderWeeks
 * @apiUse listParams
 * @apiSuccess {Object[]} calenderWeeks List of calender weeks.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /calenderWeeks/:id Retrieve calender weeks
 * @apiName RetrieveCalenderWeeks
 * @apiGroup CalenderWeeks
 * @apiSuccess {Object} calenderWeeks Calender weeks's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Calender weeks not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /calenderWeeks/:id Update calender weeks
 * @apiName UpdateCalenderWeeks
 * @apiGroup CalenderWeeks
 * @apiParam weekNo Calender weeks's weekNo.
 * @apiParam startDate Calender weeks's startDate.
 * @apiParam endDate Calender weeks's endDate.
 * @apiParam active Calender weeks's active.
 * @apiSuccess {Object} calenderWeeks Calender weeks's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Calender weeks not found.
 */
router.put('/:id',
  body({ weekNo, startDate, endDate, active }),
  update)

/**
 * @api {delete} /calenderWeeks/:id Delete calender weeks
 * @apiName DeleteCalenderWeeks
 * @apiGroup CalenderWeeks
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Calender weeks not found.
 */
router.delete('/:id',
  destroy)

export default router
