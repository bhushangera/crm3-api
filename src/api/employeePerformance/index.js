import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export EmployeePerformance, { schema } from './model'

const router = new Router()
const { partyId,
  partyName,
  managerId,
  managerName,
  approoved,
  approvingPartyId,
  approvingPartyDetails,
  fiscalYear, 
  presents,
  leaves,
  workingHours,
  otHours,
  bonusEarned,
  month,
  ratingId,
  stars,
  rating,
} = schema.tree

/**
 * @api {post} /employeePerformance Create employee performance
 * @apiName CreateEmployeePerformance
 * @apiGroup EmployeePerformance
 * @apiParam partyId Employee performance's partyId.
 * @apiParam partyName Employee performance's partyName.
 * @apiParam managerId Employee performance's managerId.
 * @apiParam managerName Employee performance's managerName.
 * @apiParam approoved Employee performance's approoved.
 * @apiParam approovedBy Employee performance's approovedBy.
 * @apiParam fiscalYear Employee performance's fiscalYear.
 * @apiParam presents Employee performance's presents.
 * @apiParam leaves Employee performance's leaves.
 * @apiParam  Employee performance's .
 * @apiSuccess {Object} employeePerformance Employee performance's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Employee performance not found.
 */
router.post('/',
  body({ 
    partyId,
  partyName,
  managerId,
  managerName,
  approoved,
  approvingPartyId,
  approvingPartyDetails,
  fiscalYear, 
  presents,
  leaves,
  workingHours,
  otHours,
  bonusEarned,
  month,
  ratingId,
  stars,
  rating,  }),
  create)

/**
 * @api {get} /employeePerformance Retrieve employee performances
 * @apiName RetrieveEmployeePerformances
 * @apiGroup EmployeePerformance
 * @apiUse listParams
 * @apiSuccess {Object[]} employeePerformances List of employee performances.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /employeePerformance/:id Retrieve employee performance
 * @apiName RetrieveEmployeePerformance
 * @apiGroup EmployeePerformance
 * @apiSuccess {Object} employeePerformance Employee performance's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Employee performance not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /employeePerformance/:id Update employee performance
 * @apiName UpdateEmployeePerformance
 * @apiGroup EmployeePerformance
 * @apiParam partyId Employee performance's partyId.
 * @apiParam partyName Employee performance's partyName.
 * @apiParam managerId Employee performance's managerId.
 * @apiParam managerName Employee performance's managerName.
 * @apiParam approoved Employee performance's approoved.
 * @apiParam approovedBy Employee performance's approovedBy.
 * @apiParam fiscalYear Employee performance's fiscalYear.
 * @apiParam presents Employee performance's presents.
 * @apiParam leaves Employee performance's leaves.
 * @apiParam  Employee performance's .
 * @apiSuccess {Object} employeePerformance Employee performance's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Employee performance not found.
 */
router.put('/:id',
  body({ partyId,
    partyName,
    managerId,
    managerName,
    approoved,
    approvingPartyId,
    approvingPartyDetails,
    fiscalYear, 
    presents,
    leaves,
    workingHours,
    otHours,
    bonusEarned,
    month,
    ratingId,
    stars,
    rating,  }),
  update)

/**
 * @api {delete} /employeePerformance/:id Delete employee performance
 * @apiName DeleteEmployeePerformance
 * @apiGroup EmployeePerformance
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Employee performance not found.
 */
router.delete('/:id',
  destroy)

export default router
