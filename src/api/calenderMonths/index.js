import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export CalenderMonths, { schema } from './model'

const router = new Router()
const { mNo, mWords, mdays, active } = schema.tree

/**
 * @api {post} /calenderMonths Create calender months
 * @apiName CreateCalenderMonths
 * @apiGroup CalenderMonths
 * @apiParam mNo Calender months's mNo.
 * @apiParam mWords Calender months's mWords.
 * @apiParam mdays Calender months's mdays.
 * @apiParam active Calender months's active.
 * @apiSuccess {Object} calenderMonths Calender months's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Calender months not found.
 */
router.post('/',
  body({ mNo, mWords, mdays, active }),
  create)

/**
 * @api {get} /calenderMonths Retrieve calender months
 * @apiName RetrieveCalenderMonths
 * @apiGroup CalenderMonths
 * @apiUse listParams
 * @apiSuccess {Object[]} calenderMonths List of calender months.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /calenderMonths/:id Retrieve calender months
 * @apiName RetrieveCalenderMonths
 * @apiGroup CalenderMonths
 * @apiSuccess {Object} calenderMonths Calender months's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Calender months not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /calenderMonths/:id Update calender months
 * @apiName UpdateCalenderMonths
 * @apiGroup CalenderMonths
 * @apiParam mNo Calender months's mNo.
 * @apiParam mWords Calender months's mWords.
 * @apiParam mdays Calender months's mdays.
 * @apiParam active Calender months's active.
 * @apiSuccess {Object} calenderMonths Calender months's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Calender months not found.
 */
router.put('/:id',
  body({ mNo, mWords, mdays, active }),
  update)

/**
 * @api {delete} /calenderMonths/:id Delete calender months
 * @apiName DeleteCalenderMonths
 * @apiGroup CalenderMonths
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Calender months not found.
 */
router.delete('/:id',
  destroy)

export default router
