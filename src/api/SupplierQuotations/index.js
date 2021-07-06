import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export SupplierQuotations, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /SupplierQuotations Create supplier quotations
 * @apiName CreateSupplierQuotations
 * @apiGroup SupplierQuotations
 * @apiParam code Supplier quotations's code.
 * @apiParam description Supplier quotations's description.
 * @apiSuccess {Object} supplierQuotations Supplier quotations's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Supplier quotations not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /SupplierQuotations Retrieve supplier quotations
 * @apiName RetrieveSupplierQuotations
 * @apiGroup SupplierQuotations
 * @apiUse listParams
 * @apiSuccess {Object[]} supplierQuotations List of supplier quotations.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /SupplierQuotations/:id Retrieve supplier quotations
 * @apiName RetrieveSupplierQuotations
 * @apiGroup SupplierQuotations
 * @apiSuccess {Object} supplierQuotations Supplier quotations's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Supplier quotations not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /SupplierQuotations/:id Update supplier quotations
 * @apiName UpdateSupplierQuotations
 * @apiGroup SupplierQuotations
 * @apiParam code Supplier quotations's code.
 * @apiParam description Supplier quotations's description.
 * @apiSuccess {Object} supplierQuotations Supplier quotations's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Supplier quotations not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /SupplierQuotations/:id Delete supplier quotations
 * @apiName DeleteSupplierQuotations
 * @apiGroup SupplierQuotations
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Supplier quotations not found.
 */
router.delete('/:id',
  destroy)

export default router
