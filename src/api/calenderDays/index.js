import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export CalenderDays, { schema } from './model'

const router = new Router()
const { APCodeId, APCode, APStartDate, APEndDate, date, quarter, monNo, monWords, weekNo, weekDayNo, dayWords, day, holiday, remarks } = schema.tree

/**
 * @api {post} /calenderDays Create calender days
 * @apiName CreateCalenderDays
 * @apiGroup CalenderDays
 * @apiParam APCodeId Calender days's APCodeId.
 * @apiParam APCode Calender days's APCode.
 * @apiParam APStartDate Calender days's APStartDate.
 * @apiParam APEndDate Calender days's APEndDate.
 * @apiParam date Calender days's date.
 * @apiParam quarter Calender days's quarter.
 * @apiParam monNo Calender days's monNo.
 * @apiParam monWords Calender days's monWords.
 * @apiParam weekNo Calender days's weekNo.
 * @apiParam weekDayNo Calender days's weekDayNo.
 * @apiParam dayWords Calender days's dayWords.
 * @apiParam day Calender days's day.
 * @apiParam holiday Calender days's holiday.
 * @apiParam remarks Calender days's remarks.
 * @apiSuccess {Object} calenderDays Calender days's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Calender days not found.
 */
router.post('/',
  body({ APCodeId, APCode, APStartDate, APEndDate, date, quarter, monNo, monWords, weekNo, weekDayNo, dayWords, day, holiday, remarks }),
  create)

/**
 * @api {get} /calenderDays Retrieve calender days
 * @apiName RetrieveCalenderDays
 * @apiGroup CalenderDays
 * @apiUse listParams
 * @apiSuccess {Object[]} calenderDays List of calender days.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /calenderDays/:id Retrieve calender days
 * @apiName RetrieveCalenderDays
 * @apiGroup CalenderDays
 * @apiSuccess {Object} calenderDays Calender days's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Calender days not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /calenderDays/:id Update calender days
 * @apiName UpdateCalenderDays
 * @apiGroup CalenderDays
 * @apiParam APCodeId Calender days's APCodeId.
 * @apiParam APCode Calender days's APCode.
 * @apiParam APStartDate Calender days's APStartDate.
 * @apiParam APEndDate Calender days's APEndDate.
 * @apiParam date Calender days's date.
 * @apiParam quarter Calender days's quarter.
 * @apiParam monNo Calender days's monNo.
 * @apiParam monWords Calender days's monWords.
 * @apiParam weekNo Calender days's weekNo.
 * @apiParam weekDayNo Calender days's weekDayNo.
 * @apiParam dayWords Calender days's dayWords.
 * @apiParam day Calender days's day.
 * @apiParam holiday Calender days's holiday.
 * @apiParam remarks Calender days's remarks.
 * @apiSuccess {Object} calenderDays Calender days's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Calender days not found.
 */
router.put('/:id',
  body({ APCodeId, APCode, APStartDate, APEndDate, date, quarter, monNo, monWords, weekNo, weekDayNo, dayWords, day, holiday, remarks }),
  update)

/**
 * @api {delete} /calenderDays/:id Delete calender days
 * @apiName DeleteCalenderDays
 * @apiGroup CalenderDays
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Calender days not found.
 */
router.delete('/:id',
  destroy)

export default router
