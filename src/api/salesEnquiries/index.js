import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export SalesEnquiries, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /salesEnquiries Create sales enquiries
 * @apiName CreateSalesEnquiries
 * @apiGroup SalesEnquiries
 * @apiParam code Sales enquiries's code.
 * @apiParam description Sales enquiries's description.
 * @apiSuccess {Object} salesEnquiries Sales enquiries's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Sales enquiries not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /salesEnquiries Retrieve sales enquiries
 * @apiName RetrieveSalesEnquiries
 * @apiGroup SalesEnquiries
 * @apiUse listParams
 * @apiSuccess {Object[]} salesEnquiries List of sales enquiries.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /salesEnquiries/:id Retrieve sales enquiries
 * @apiName RetrieveSalesEnquiries
 * @apiGroup SalesEnquiries
 * @apiSuccess {Object} salesEnquiries Sales enquiries's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Sales enquiries not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /salesEnquiries/:id Update sales enquiries
 * @apiName UpdateSalesEnquiries
 * @apiGroup SalesEnquiries
 * @apiParam code Sales enquiries's code.
 * @apiParam description Sales enquiries's description.
 * @apiSuccess {Object} salesEnquiries Sales enquiries's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Sales enquiries not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /salesEnquiries/:id Delete sales enquiries
 * @apiName DeleteSalesEnquiries
 * @apiGroup SalesEnquiries
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Sales enquiries not found.
 */
router.delete('/:id',
  destroy)

export default router
