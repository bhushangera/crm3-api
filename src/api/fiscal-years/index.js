import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export FiscalYears, { schema } from './model'

const router = new Router()
const { code, description, startDate, endDate, active } = schema.tree

/**
 * @api {post} /fiscal-years Create fiscal years
 * @apiName CreateFiscalYears
 * @apiGroup FiscalYears
 * @apiParam code Fiscal years's code.
 * @apiParam description Fiscal years's description.
 * @apiParam startDate Fiscal years's startDate.
 * @apiParam endDate Fiscal years's endDate.
 * @apiParam active Fiscal years's active.
 * @apiSuccess {Object} fiscalYears Fiscal years's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Fiscal years not found.
 */
router.post('/',
  body({ code, description, startDate, endDate, active }),
  create)

/**
 * @api {get} /fiscal-years Retrieve fiscal years
 * @apiName RetrieveFiscalYears
 * @apiGroup FiscalYears
 * @apiUse listParams
 * @apiSuccess {Object[]} fiscalYears List of fiscal years.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /fiscal-years/:id Retrieve fiscal years
 * @apiName RetrieveFiscalYears
 * @apiGroup FiscalYears
 * @apiSuccess {Object} fiscalYears Fiscal years's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Fiscal years not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /fiscal-years/:id Update fiscal years
 * @apiName UpdateFiscalYears
 * @apiGroup FiscalYears
 * @apiParam code Fiscal years's code.
 * @apiParam description Fiscal years's description.
 * @apiParam startDate Fiscal years's startDate.
 * @apiParam endDate Fiscal years's endDate.
 * @apiParam active Fiscal years's active.
 * @apiSuccess {Object} fiscalYears Fiscal years's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Fiscal years not found.
 */
router.put('/:id',
  body({ code, description, startDate, endDate, active }),
  update)

/**
 * @api {delete} /fiscal-years/:id Delete fiscal years
 * @apiName DeleteFiscalYears
 * @apiGroup FiscalYears
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Fiscal years not found.
 */
router.delete('/:id',
  destroy)

export default router
