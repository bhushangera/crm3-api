import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export CompanyPolicies, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /companyPolicies Create company policies
 * @apiName CreateCompanyPolicies
 * @apiGroup CompanyPolicies
 * @apiParam code Company policies's code.
 * @apiParam description Company policies's description.
 * @apiSuccess {Object} companyPolicies Company policies's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Company policies not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /companyPolicies Retrieve company policies
 * @apiName RetrieveCompanyPolicies
 * @apiGroup CompanyPolicies
 * @apiUse listParams
 * @apiSuccess {Object[]} companyPolicies List of company policies.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /companyPolicies/:id Retrieve company policies
 * @apiName RetrieveCompanyPolicies
 * @apiGroup CompanyPolicies
 * @apiSuccess {Object} companyPolicies Company policies's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Company policies not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /companyPolicies/:id Update company policies
 * @apiName UpdateCompanyPolicies
 * @apiGroup CompanyPolicies
 * @apiParam code Company policies's code.
 * @apiParam description Company policies's description.
 * @apiSuccess {Object} companyPolicies Company policies's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Company policies not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /companyPolicies/:id Delete company policies
 * @apiName DeleteCompanyPolicies
 * @apiGroup CompanyPolicies
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Company policies not found.
 */
router.delete('/:id',
  destroy)

export default router
