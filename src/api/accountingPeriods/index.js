import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export AccountingPeriods, { schema } from './model'

const router = new Router()
const { code, startDate, endDate, active } = schema.tree

/**
 * @api {post} /accountingPeriods Create accounting periods
 * @apiName CreateAccountingPeriods
 * @apiGroup AccountingPeriods
 * @apiParam code Accounting periods's code.
 * @apiParam startDate Accounting periods's startDate.
 * @apiParam endDate Accounting periods's endDate.
 * @apiParam active Accounting periods's active.
 * @apiSuccess {Object} accountingPeriods Accounting periods's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Accounting periods not found.
 */
router.post('/',
  body({ code, startDate, endDate, active }),
  create)

/**
 * @api {get} /accountingPeriods Retrieve accounting periods
 * @apiName RetrieveAccountingPeriods
 * @apiGroup AccountingPeriods
 * @apiUse listParams
 * @apiSuccess {Object[]} accountingPeriods List of accounting periods.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /accountingPeriods/:id Retrieve accounting periods
 * @apiName RetrieveAccountingPeriods
 * @apiGroup AccountingPeriods
 * @apiSuccess {Object} accountingPeriods Accounting periods's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Accounting periods not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /accountingPeriods/:id Update accounting periods
 * @apiName UpdateAccountingPeriods
 * @apiGroup AccountingPeriods
 * @apiParam code Accounting periods's code.
 * @apiParam startDate Accounting periods's startDate.
 * @apiParam endDate Accounting periods's endDate.
 * @apiParam active Accounting periods's active.
 * @apiSuccess {Object} accountingPeriods Accounting periods's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Accounting periods not found.
 */
router.put('/:id',
  body({ code, startDate, endDate, active }),
  update)

/**
 * @api {delete} /accountingPeriods/:id Delete accounting periods
 * @apiName DeleteAccountingPeriods
 * @apiGroup AccountingPeriods
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Accounting periods not found.
 */
router.delete('/:id',
  destroy)

export default router
