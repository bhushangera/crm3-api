import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Departments, { schema } from './model'

const router = new Router()
const { companyId, company, businessUnitId, businessUnit, deptName, description, active, building, roomNo, address, cityId, city, stateId, state, countryId, country, pinCode, email, landline, extension, mobile } = schema.tree

/**
 * @api {post} /departments Create departments
 * @apiName CreateDepartments
 * @apiGroup Departments
 * @apiParam companyId Departments's companyId.
 * @apiParam company Departments's company.
 * @apiParam businessUnitId Departments's businessUnitId.
 * @apiParam businessUnit Departments's businessUnit.
 * @apiParam deptName Departments's deptName.
 * @apiParam description Departments's description.
 * @apiParam active Departments's active.
 * @apiParam building Departments's building.
 * @apiParam roomNo Departments's roomNo.
 * @apiParam address Departments's address.
 * @apiParam cityId Departments's cityId.
 * @apiParam city Departments's city.
 * @apiParam stateId Departments's stateId.
 * @apiParam state Departments's state.
 * @apiParam countryId Departments's countryId.
 * @apiParam country Departments's country.
 * @apiParam pinCode Departments's pinCode.
 * @apiParam email Departments's email.
 * @apiParam landline Departments's landline.
 * @apiParam extension Departments's extension.
 * @apiParam mobile Departments's mobile.
 * @apiSuccess {Object} departments Departments's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Departments not found.
 */
router.post('/',
  body({ companyId, company, businessUnitId, businessUnit, deptName, description, active, building, roomNo, address, cityId, city, stateId, state, countryId, country, pinCode, email, landline, extension, mobile }),
  create)

/**
 * @api {get} /departments Retrieve departments
 * @apiName RetrieveDepartments
 * @apiGroup Departments
 * @apiUse listParams
 * @apiSuccess {Object[]} departments List of departments.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /departments/:id Retrieve departments
 * @apiName RetrieveDepartments
 * @apiGroup Departments
 * @apiSuccess {Object} departments Departments's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Departments not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /departments/:id Update departments
 * @apiName UpdateDepartments
 * @apiGroup Departments
 * @apiParam companyId Departments's companyId.
 * @apiParam company Departments's company.
 * @apiParam businessUnitId Departments's businessUnitId.
 * @apiParam businessUnit Departments's businessUnit.
 * @apiParam deptName Departments's deptName.
 * @apiParam description Departments's description.
 * @apiParam active Departments's active.
 * @apiParam building Departments's building.
 * @apiParam roomNo Departments's roomNo.
 * @apiParam address Departments's address.
 * @apiParam cityId Departments's cityId.
 * @apiParam city Departments's city.
 * @apiParam stateId Departments's stateId.
 * @apiParam state Departments's state.
 * @apiParam countryId Departments's countryId.
 * @apiParam country Departments's country.
 * @apiParam pinCode Departments's pinCode.
 * @apiParam email Departments's email.
 * @apiParam landline Departments's landline.
 * @apiParam extension Departments's extension.
 * @apiParam mobile Departments's mobile.
 * @apiSuccess {Object} departments Departments's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Departments not found.
 */
router.put('/:id',
  body({ companyId, company, businessUnitId, businessUnit, deptName, description, active, building, roomNo, address, cityId, city, stateId, state, countryId, country, pinCode, email, landline, extension, mobile }),
  update)

/**
 * @api {delete} /departments/:id Delete departments
 * @apiName DeleteDepartments
 * @apiGroup Departments
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Departments not found.
 */
router.delete('/:id',
  destroy)

export default router
