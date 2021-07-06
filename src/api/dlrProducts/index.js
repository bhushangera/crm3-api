import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export DlrProducts, { schema } from './model'

const router = new Router()
const { dpCategoryId, product, description } = schema.tree

/**
 * @api {post} /dlrProducts Create dlr products
 * @apiName CreateDlrProducts
 * @apiGroup DlrProducts
 * @apiParam dpCategoryId Dlr products's dpCategoryId.
 * @apiParam product Dlr products's product.
 * @apiParam description Dlr products's description.
 * @apiSuccess {Object} dlrProducts Dlr products's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Dlr products not found.
 */
router.post('/',
  body({ dpCategoryId, product, description }),
  create)

/**
 * @api {get} /dlrProducts Retrieve dlr products
 * @apiName RetrieveDlrProducts
 * @apiGroup DlrProducts
 * @apiUse listParams
 * @apiSuccess {Object[]} dlrProducts List of dlr products.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /dlrProducts/:id Retrieve dlr products
 * @apiName RetrieveDlrProducts
 * @apiGroup DlrProducts
 * @apiSuccess {Object} dlrProducts Dlr products's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Dlr products not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /dlrProducts/:id Update dlr products
 * @apiName UpdateDlrProducts
 * @apiGroup DlrProducts
 * @apiParam dpCategoryId Dlr products's dpCategoryId.
 * @apiParam product Dlr products's product.
 * @apiParam description Dlr products's description.
 * @apiSuccess {Object} dlrProducts Dlr products's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Dlr products not found.
 */
router.put('/:id',
  body({ dpCategoryId, product, description }),
  update)

/**
 * @api {delete} /dlrProducts/:id Delete dlr products
 * @apiName DeleteDlrProducts
 * @apiGroup DlrProducts
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Dlr products not found.
 */
router.delete('/:id',
  destroy)

export default router
