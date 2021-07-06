import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { master } from '../../services/passport'
import { schema } from './model'
import { create, index, show, update, destroy } from './controller'
export Product, { schema } from './model'

const router = new Router()
const {
  productCategoryId,
  genericName,
  SKU,
  height,
  width,
  depth,
  weight,
  assembly,
  primaryMaterial,
  noOfPackages,
  packageDetails,
  packerName,
  packerAddress,
} = schema.tree

/**
 * @api {post} /products Create product
 * @apiName CreateProduct
 * @apiGroup Product
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiSuccess {Object} product Product's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Product not found.
 * @apiError 401 master access only.
 */
router.post('/',
  body({
    productCategoryId,
  genericName,
  SKU,
  height,
  width,
  depth,
  weight,
  assembly,
  primaryMaterial,
  noOfPackages,
  packageDetails,
  packerName,
  packerAddress,
  }),
  create)

/**
 * @api {get} /products Retrieve products
 * @apiName RetrieveProducts
 * @apiGroup Product
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of products.
 * @apiSuccess {Object[]} rows List of products.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 401 master access only.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /products/:id Retrieve product
 * @apiName RetrieveProduct
 * @apiGroup Product
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiSuccess {Object} product Product's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Product not found.
 * @apiError 401 master access only.
 */
router.get('/:id',
  show)

/**
 * @api {put} /products/:id Update product
 * @apiName UpdateProduct
 * @apiGroup Product
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiSuccess {Object} product Product's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Product not found.
 * @apiError 401 master access only.
 */
router.put('/:id',
  body({
    productCategoryId,
  genericName,
  SKU,
  height,
  width,
  depth,
  weight,
  assembly,
  primaryMaterial,
  noOfPackages,
  packageDetails,
  packerName,
  packerAddress,
  }),
  update)

/**
 * @api {delete} /products/:id Delete product
 * @apiName DeleteProduct
 * @apiGroup Product
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Product not found.
 * @apiError 401 master access only.
 */
router.delete('/:id',
  destroy)

export default router
