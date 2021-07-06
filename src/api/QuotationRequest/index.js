import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export QuotationRequest, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /QuotationRequest Create quotation request
 * @apiName CreateQuotationRequest
 * @apiGroup QuotationRequest
 * @apiParam code Quotation request's code.
 * @apiParam description Quotation request's description.
 * @apiSuccess {Object} quotationRequest Quotation request's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Quotation request not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /QuotationRequest Retrieve quotation requests
 * @apiName RetrieveQuotationRequests
 * @apiGroup QuotationRequest
 * @apiUse listParams
 * @apiSuccess {Object[]} quotationRequests List of quotation requests.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /QuotationRequest/:id Retrieve quotation request
 * @apiName RetrieveQuotationRequest
 * @apiGroup QuotationRequest
 * @apiSuccess {Object} quotationRequest Quotation request's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Quotation request not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /QuotationRequest/:id Update quotation request
 * @apiName UpdateQuotationRequest
 * @apiGroup QuotationRequest
 * @apiParam code Quotation request's code.
 * @apiParam description Quotation request's description.
 * @apiSuccess {Object} quotationRequest Quotation request's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Quotation request not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /QuotationRequest/:id Delete quotation request
 * @apiName DeleteQuotationRequest
 * @apiGroup QuotationRequest
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Quotation request not found.
 */
router.delete('/:id',
  destroy)

export default router
