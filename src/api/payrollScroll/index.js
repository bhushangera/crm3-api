import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export PayrollScroll, { schema } from './model'

const router = new Router()
const { scrollNo, partyId, payGradeId, payGrade, partyDetails, department, PresentDays, PaidDays, CL, EL, totaHrsAllowed, dutyHrs, weeklyOff, otHours, totalIncrements, IncrementAmount, scale, HRADeduction, HRA, DA, SA, OTA, EPFEmployee, EPFEmployer, loanRecovery, CTC, totalDeduction, netInHand } = schema.tree

/**
 * @api {post} /payrollScroll Create payroll scroll
 * @apiName CreatePayrollScroll
 * @apiGroup PayrollScroll
 * @apiParam scrollNo Payroll scroll's scrollNo.
 * @apiParam partyId Payroll scroll's partyId.
 * @apiParam payGradeId Payroll scroll's payGradeId.
 * @apiParam payGrade Payroll scroll's payGrade.
 * @apiParam partyDetails Payroll scroll's partyDetails.
 * @apiParam department Payroll scroll's department.
 * @apiParam PresentDays Payroll scroll's PresentDays.
 * @apiParam PaidDays Payroll scroll's PaidDays.
 * @apiParam CL Payroll scroll's CL.
 * @apiParam EL Payroll scroll's EL.
 * @apiParam totaHrsAllowed Payroll scroll's totaHrsAllowed.
 * @apiParam dutyHrs Payroll scroll's dutyHrs.
 * @apiParam weeklyOff Payroll scroll's weeklyOff.
 * @apiParam otHours Payroll scroll's otHours.
 * @apiParam totalIncrements Payroll scroll's totalIncrements.
 * @apiParam IncrementAmount Payroll scroll's IncrementAmount.
 * @apiParam scale Payroll scroll's scale.
 * @apiParam HRADeduction Payroll scroll's HRADeduction.
 * @apiParam HRA Payroll scroll's HRA.
 * @apiParam DA Payroll scroll's DA.
 * @apiParam SA Payroll scroll's SA.
 * @apiParam OTA Payroll scroll's OTA.
 * @apiParam EPFEmployee Payroll scroll's EPFEmployee.
 * @apiParam EPFEmployer Payroll scroll's EPFEmployer.
 * @apiParam loanRecovery Payroll scroll's loanRecovery.
 * @apiParam CTC Payroll scroll's CTC.
 * @apiParam totalDeduction Payroll scroll's totalDeduction.
 * @apiParam netInHand Payroll scroll's netInHand.
 * @apiSuccess {Object} payrollScroll Payroll scroll's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Payroll scroll not found.
 */
router.post('/',
  body({ scrollNo, partyId, payGradeId, payGrade, partyDetails, department, PresentDays, PaidDays, CL, EL, totaHrsAllowed, dutyHrs, weeklyOff, otHours, totalIncrements, IncrementAmount, scale, HRADeduction, HRA, DA, SA, OTA, EPFEmployee, EPFEmployer, loanRecovery, CTC, totalDeduction, netInHand }),
  create)

/**
 * @api {get} /payrollScroll Retrieve payroll scrolls
 * @apiName RetrievePayrollScrolls
 * @apiGroup PayrollScroll
 * @apiUse listParams
 * @apiSuccess {Object[]} payrollScrolls List of payroll scrolls.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /payrollScroll/:id Retrieve payroll scroll
 * @apiName RetrievePayrollScroll
 * @apiGroup PayrollScroll
 * @apiSuccess {Object} payrollScroll Payroll scroll's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Payroll scroll not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /payrollScroll/:id Update payroll scroll
 * @apiName UpdatePayrollScroll
 * @apiGroup PayrollScroll
 * @apiParam scrollNo Payroll scroll's scrollNo.
 * @apiParam partyId Payroll scroll's partyId.
 * @apiParam payGradeId Payroll scroll's payGradeId.
 * @apiParam payGrade Payroll scroll's payGrade.
 * @apiParam partyDetails Payroll scroll's partyDetails.
 * @apiParam department Payroll scroll's department.
 * @apiParam PresentDays Payroll scroll's PresentDays.
 * @apiParam PaidDays Payroll scroll's PaidDays.
 * @apiParam CL Payroll scroll's CL.
 * @apiParam EL Payroll scroll's EL.
 * @apiParam totaHrsAllowed Payroll scroll's totaHrsAllowed.
 * @apiParam dutyHrs Payroll scroll's dutyHrs.
 * @apiParam weeklyOff Payroll scroll's weeklyOff.
 * @apiParam otHours Payroll scroll's otHours.
 * @apiParam totalIncrements Payroll scroll's totalIncrements.
 * @apiParam IncrementAmount Payroll scroll's IncrementAmount.
 * @apiParam scale Payroll scroll's scale.
 * @apiParam HRADeduction Payroll scroll's HRADeduction.
 * @apiParam HRA Payroll scroll's HRA.
 * @apiParam DA Payroll scroll's DA.
 * @apiParam SA Payroll scroll's SA.
 * @apiParam OTA Payroll scroll's OTA.
 * @apiParam EPFEmployee Payroll scroll's EPFEmployee.
 * @apiParam EPFEmployer Payroll scroll's EPFEmployer.
 * @apiParam loanRecovery Payroll scroll's loanRecovery.
 * @apiParam CTC Payroll scroll's CTC.
 * @apiParam totalDeduction Payroll scroll's totalDeduction.
 * @apiParam netInHand Payroll scroll's netInHand.
 * @apiSuccess {Object} payrollScroll Payroll scroll's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Payroll scroll not found.
 */
router.put('/:id',
  body({ scrollNo, partyId, payGradeId, payGrade, partyDetails, department, PresentDays, PaidDays, CL, EL, totaHrsAllowed, dutyHrs, weeklyOff, otHours, totalIncrements, IncrementAmount, scale, HRADeduction, HRA, DA, SA, OTA, EPFEmployee, EPFEmployer, loanRecovery, CTC, totalDeduction, netInHand }),
  update)

/**
 * @api {delete} /payrollScroll/:id Delete payroll scroll
 * @apiName DeletePayrollScroll
 * @apiGroup PayrollScroll
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Payroll scroll not found.
 */
router.delete('/:id',
  destroy)

export default router
