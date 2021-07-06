import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export QuotationStatusCodes, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /quotationStatusCodes Create quotation status codes
 * @apiName CreateQuotationStatusCodes
 * @apiGroup QuotationStatusCodes
 * @apiParam code Quotation status codes's code.
 * @apiParam description Quotation status codes's description.
 * @apiSuccess {Object} quotationStatusCodes Quotation status codes's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Quotation status codes not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /quotationStatusCodes Retrieve quotation status codes
 * @apiName RetrieveQuotationStatusCodes
 * @apiGroup QuotationStatusCodes
 * @apiUse listParams
 * @apiSuccess {Object[]} quotationStatusCodes List of quotation status codes.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /quotationStatusCodes/:id Retrieve quotation status codes
 * @apiName RetrieveQuotationStatusCodes
 * @apiGroup QuotationStatusCodes
 * @apiSuccess {Object} quotationStatusCodes Quotation status codes's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Quotation status codes not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /quotationStatusCodes/:id Update quotation status codes
 * @apiName UpdateQuotationStatusCodes
 * @apiGroup QuotationStatusCodes
 * @apiParam code Quotation status codes's code.
 * @apiParam description Quotation status codes's description.
 * @apiSuccess {Object} quotationStatusCodes Quotation status codes's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Quotation status codes not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /quotationStatusCodes/:id Delete quotation status codes
 * @apiName DeleteQuotationStatusCodes
 * @apiGroup QuotationStatusCodes
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Quotation status codes not found.
 */
router.delete('/:id',
  destroy)

export default router
