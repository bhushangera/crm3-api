import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export QuotationScroll, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /quotationScroll Create quotation scroll
 * @apiName CreateQuotationScroll
 * @apiGroup QuotationScroll
 * @apiParam code Quotation scroll's code.
 * @apiParam description Quotation scroll's description.
 * @apiSuccess {Object} quotationScroll Quotation scroll's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Quotation scroll not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /quotationScroll Retrieve quotation scrolls
 * @apiName RetrieveQuotationScrolls
 * @apiGroup QuotationScroll
 * @apiUse listParams
 * @apiSuccess {Object[]} quotationScrolls List of quotation scrolls.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /quotationScroll/:id Retrieve quotation scroll
 * @apiName RetrieveQuotationScroll
 * @apiGroup QuotationScroll
 * @apiSuccess {Object} quotationScroll Quotation scroll's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Quotation scroll not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /quotationScroll/:id Update quotation scroll
 * @apiName UpdateQuotationScroll
 * @apiGroup QuotationScroll
 * @apiParam code Quotation scroll's code.
 * @apiParam description Quotation scroll's description.
 * @apiSuccess {Object} quotationScroll Quotation scroll's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Quotation scroll not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /quotationScroll/:id Delete quotation scroll
 * @apiName DeleteQuotationScroll
 * @apiGroup QuotationScroll
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Quotation scroll not found.
 */
router.delete('/:id',
  destroy)

export default router
