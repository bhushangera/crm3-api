import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { master } from '../../services/passport'
import { schema } from './model'
import { create, index, show, update, destroy } from './controller'
export ProductCatergory, { schema } from './model'

const router = new Router()
const {  category, overview, care, terms,image,isActive} = schema.tree

/**
 * @api {post} /productCatergories Create product catergory
 * @apiName CreateProductCatergory
 * @apiGroup ProductCatergory
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiSuccess {Object} productCatergory Product catergory's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Product catergory not found.
 * @apiError 401 master access only.
 */
router.post('/',
  body({category, overview, care, terms,image,isActive}),
  create)

/**
 * @api {get} /productCatergories Retrieve product catergories
 * @apiName RetrieveProductCatergories
 * @apiGroup ProductCatergory
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of product catergories.
 * @apiSuccess {Object[]} rows List of product catergories.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 401 master access only.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /productCatergories/:id Retrieve product catergory
 * @apiName RetrieveProductCatergory
 * @apiGroup ProductCatergory
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiSuccess {Object} productCatergory Product catergory's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Product catergory not found.
 * @apiError 401 master access only.
 */
router.get('/:id',
  show)

/**
 * @api {put} /productCatergories/:id Update product catergory
 * @apiName UpdateProductCatergory
 * @apiGroup ProductCatergory
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiSuccess {Object} productCatergory Product catergory's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Product catergory not found.
 * @apiError 401 master access only.
 */
router.put('/:id',
  body({  category, overview, care, terms, image, isActive }),
  update)

/**
 * @api {delete} /productCatergories/:id Delete product catergory
 * @apiName DeleteProductCatergory
 * @apiGroup ProductCatergory
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Product catergory not found.
 * @apiError 401 master access only.
 */
router.delete('/:id',
  destroy)

export default router
