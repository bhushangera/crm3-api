import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Payroll, { schema } from './model'

const router = new Router()
const { 
  creationDate,
  fiscalYear,
  month,
  payrollDate,
  totalBasic,
  totalEpf,
  totalAllowance,
  totalCTC,
  totalRecovery,
  finalized,
  approoved,
  approovedByPartyId,
  approovingPartyDetails,
  approovedDate,
  provisioned,
  provisonDate,
  disbursed,
  disbursedDate,
  status,
 } = schema.tree

/**
 * @api {post} /payroll Create payroll
 * @apiName CreatePayroll
 * @apiGroup Payroll
 * @apiParam fiscalYear Payroll's fiscalYear.
 * @apiParam month Payroll's month.
 * @apiParam payrollDate Payroll's payrollDate.
 * @apiParam totalBasic Payroll's totalBasic.
 * @apiParam totalEpf Payroll's totalEpf.
 * @apiParam totalAllowance Payroll's totalAllowance.
 * @apiParam totalCTC Payroll's totalCTC.
 * @apiParam totalRecovery Payroll's totalRecovery.
 * @apiSuccess {Object} payroll Payroll's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Payroll not found.
 */
router.post('/',
  body({ 
    creationDate,
  fiscalYear,
  month,
  payrollDate,
  totalBasic,
  totalEpf,
  totalAllowance,
  totalCTC,
  totalRecovery,
  finalized,
  approoved,
  approovedByPartyId,
  approovingPartyDetails,
  approovedDate,
  provisioned,
  provisonDate,
  disbursed,
  disbursedDate,
  status, 
  }),
  create)

/**
 * @api {get} /payroll Retrieve payrolls
 * @apiName RetrievePayrolls
 * @apiGroup Payroll
 * @apiUse listParams
 * @apiSuccess {Object[]} payrolls List of payrolls.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /payroll/:id Retrieve payroll
 * @apiName RetrievePayroll
 * @apiGroup Payroll
 * @apiSuccess {Object} payroll Payroll's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Payroll not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /payroll/:id Update payroll
 * @apiName UpdatePayroll
 * @apiGroup Payroll
 * @apiParam fiscalYear Payroll's fiscalYear.
 * @apiParam month Payroll's month.
 * @apiParam payrollDate Payroll's payrollDate.
 * @apiParam totalBasic Payroll's totalBasic.
 * @apiParam totalEpf Payroll's totalEpf.
 * @apiParam totalAllowance Payroll's totalAllowance.
 * @apiParam totalCTC Payroll's totalCTC.
 * @apiParam totalRecovery Payroll's totalRecovery.
 * @apiSuccess {Object} payroll Payroll's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Payroll not found.
 */
router.put('/:id',
  body({ 
    creationDate,
  fiscalYear,
  month,
  payrollDate,
  totalBasic,
  totalEpf,
  totalAllowance,
  totalCTC,
  totalRecovery,
  finalized,
  approoved,
  approovedByPartyId,
  approovingPartyDetails,
  approovedDate,
  provisioned,
  provisonDate,
  disbursed,
  disbursedDate,
  status, 
  }),
  update)

/**
 * @api {delete} /payroll/:id Delete payroll
 * @apiName DeletePayroll
 * @apiGroup Payroll
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Payroll not found.
 */
router.delete('/:id',
  destroy)

export default router
