import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Holidays, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /Holidays Create holidays
 * @apiName CreateHolidays
 * @apiGroup Holidays
 * @apiParam code Holidays's code.
 * @apiParam description Holidays's description.
 * @apiSuccess {Object} holidays Holidays's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Holidays not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /Holidays Retrieve holidays
 * @apiName RetrieveHolidays
 * @apiGroup Holidays
 * @apiUse listParams
 * @apiSuccess {Object[]} holidays List of holidays.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /Holidays/:id Retrieve holidays
 * @apiName RetrieveHolidays
 * @apiGroup Holidays
 * @apiSuccess {Object} holidays Holidays's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Holidays not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /Holidays/:id Update holidays
 * @apiName UpdateHolidays
 * @apiGroup Holidays
 * @apiParam code Holidays's code.
 * @apiParam description Holidays's description.
 * @apiSuccess {Object} holidays Holidays's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Holidays not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /Holidays/:id Delete holidays
 * @apiName DeleteHolidays
 * @apiGroup Holidays
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Holidays not found.
 */
router.delete('/:id',
  destroy)

export default router
