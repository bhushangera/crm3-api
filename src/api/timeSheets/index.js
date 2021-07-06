import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export TimeSheets, { schema } from './model'

const router = new Router()
const { partyId, currentDate, month, week, day, status, inTime, outTime, CL, EL, present, absent, weeklyOff, leave, WeeklyOff, OT, OTHrs, Remarks, dutyHrs } = schema.tree

/**
 * @api {post} /timeSheets Create time sheets
 * @apiName CreateTimeSheets
 * @apiGroup TimeSheets
 * @apiParam partyId Time sheets's partyId.
 * @apiParam currentDate Time sheets's currentDate.
 * @apiParam month Time sheets's month.
 * @apiParam week Time sheets's week.
 * @apiParam day Time sheets's day.
 * @apiParam status Time sheets's status.
 * @apiParam in Time sheets's in.
 * @apiParam out Time sheets's out.
 * @apiParam CL Time sheets's CL.
 * @apiParam EL Time sheets's EL.
 * @apiParam present Time sheets's present.
 * @apiParam absent Time sheets's absent.
 * @apiParam weeklyOff Time sheets's weeklyOff.
 * @apiParam leave Time sheets's leave.
 * @apiParam WeeklyOff Time sheets's WeeklyOff.
 * @apiParam OT Time sheets's OT.
 * @apiParam OTHrs Time sheets's OTHrs.
 * @apiParam Remarks Time sheets's Remarks.
 * @apiParam dutyHrs Time sheets's dutyHrs.
 * @apiSuccess {Object} timeSheets Time sheets's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Time sheets not found.
 */
router.post('/',
  body({ partyId, currentDate, month, week, day, status, inTime, outTime, CL, EL, present, absent, weeklyOff, leave, WeeklyOff, OT, OTHrs, Remarks, dutyHrs }),
  create)

/**
 * @api {get} /timeSheets Retrieve time sheets
 * @apiName RetrieveTimeSheets
 * @apiGroup TimeSheets
 * @apiUse listParams
 * @apiSuccess {Object[]} timeSheets List of time sheets.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /timeSheets/:id Retrieve time sheets
 * @apiName RetrieveTimeSheets
 * @apiGroup TimeSheets
 * @apiSuccess {Object} timeSheets Time sheets's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Time sheets not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /timeSheets/:id Update time sheets
 * @apiName UpdateTimeSheets
 * @apiGroup TimeSheets
 * @apiParam partyId Time sheets's partyId.
 * @apiParam currentDate Time sheets's currentDate.
 * @apiParam month Time sheets's month.
 * @apiParam week Time sheets's week.
 * @apiParam day Time sheets's day.
 * @apiParam status Time sheets's status.
 * @apiParam in Time sheets's in.
 * @apiParam out Time sheets's out.
 * @apiParam CL Time sheets's CL.
 * @apiParam EL Time sheets's EL.
 * @apiParam present Time sheets's present.
 * @apiParam absent Time sheets's absent.
 * @apiParam weeklyOff Time sheets's weeklyOff.
 * @apiParam leave Time sheets's leave.
 * @apiParam WeeklyOff Time sheets's WeeklyOff.
 * @apiParam OT Time sheets's OT.
 * @apiParam OTHrs Time sheets's OTHrs.
 * @apiParam Remarks Time sheets's Remarks.
 * @apiParam dutyHrs Time sheets's dutyHrs.
 * @apiSuccess {Object} timeSheets Time sheets's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Time sheets not found.
 */
router.put('/:id',
  body({ partyId, currentDate, month, week, day, status, inTime, outTime, CL, EL, present, absent, weeklyOff, leave, WeeklyOff, OT, OTHrs, Remarks, dutyHrs }),
  update)

/**
 * @api {delete} /timeSheets/:id Delete time sheets
 * @apiName DeleteTimeSheets
 * @apiGroup TimeSheets
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Time sheets not found.
 */
router.delete('/:id',
  destroy)

export default router
