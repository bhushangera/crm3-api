import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export ShippingTerms, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /shippingTerms Create shipping terms
 * @apiName CreateShippingTerms
 * @apiGroup ShippingTerms
 * @apiParam code Shipping terms's code.
 * @apiParam description Shipping terms's description.
 * @apiSuccess {Object} shippingTerms Shipping terms's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Shipping terms not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /shippingTerms Retrieve shipping terms
 * @apiName RetrieveShippingTerms
 * @apiGroup ShippingTerms
 * @apiUse listParams
 * @apiSuccess {Object[]} shippingTerms List of shipping terms.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /shippingTerms/:id Retrieve shipping terms
 * @apiName RetrieveShippingTerms
 * @apiGroup ShippingTerms
 * @apiSuccess {Object} shippingTerms Shipping terms's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Shipping terms not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /shippingTerms/:id Update shipping terms
 * @apiName UpdateShippingTerms
 * @apiGroup ShippingTerms
 * @apiParam code Shipping terms's code.
 * @apiParam description Shipping terms's description.
 * @apiSuccess {Object} shippingTerms Shipping terms's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Shipping terms not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /shippingTerms/:id Delete shipping terms
 * @apiName DeleteShippingTerms
 * @apiGroup ShippingTerms
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Shipping terms not found.
 */
router.delete('/:id',
  destroy)

export default router
