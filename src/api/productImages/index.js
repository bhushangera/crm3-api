import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export ProductImages, { schema } from './model'

const router = new Router()
const { productId, image, isPrimary } = schema.tree

/**
 * @api {post} /productImages Create product images
 * @apiName CreateProductImages
 * @apiGroup ProductImages
 * @apiParam productId Product images's productId.
 * @apiParam image Product images's image.
 * @apiParam isPrimary Product images's isPrimary.
 * @apiSuccess {Object} productImages Product images's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Product images not found.
 */
router.post('/',
  body({ productId, image, isPrimary }),
  create)

/**
 * @api {get} /productImages Retrieve product images
 * @apiName RetrieveProductImages
 * @apiGroup ProductImages
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of product images.
 * @apiSuccess {Object[]} rows List of product images.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /productImages/:id Retrieve product images
 * @apiName RetrieveProductImages
 * @apiGroup ProductImages
 * @apiSuccess {Object} productImages Product images's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Product images not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /productImages/:id Update product images
 * @apiName UpdateProductImages
 * @apiGroup ProductImages
 * @apiParam productId Product images's productId.
 * @apiParam image Product images's image.
 * @apiParam isPrimary Product images's isPrimary.
 * @apiSuccess {Object} productImages Product images's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Product images not found.
 */
router.put('/:id',
  body({ productId, image, isPrimary }),
  update)

/**
 * @api {delete} /productImages/:id Delete product images
 * @apiName DeleteProductImages
 * @apiGroup ProductImages
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Product images not found.
 */
router.delete('/:id',
  destroy)

export default router
