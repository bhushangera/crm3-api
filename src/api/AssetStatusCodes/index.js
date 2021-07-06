import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export AssetStatusCodes, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /AssetStatusCodes Create asset status codes
 * @apiName CreateAssetStatusCodes
 * @apiGroup AssetStatusCodes
 * @apiParam code Asset status codes's code.
 * @apiParam description Asset status codes's description.
 * @apiSuccess {Object} assetStatusCodes Asset status codes's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Asset status codes not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /AssetStatusCodes Retrieve asset status codes
 * @apiName RetrieveAssetStatusCodes
 * @apiGroup AssetStatusCodes
 * @apiUse listParams
 * @apiSuccess {Object[]} assetStatusCodes List of asset status codes.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /AssetStatusCodes/:id Retrieve asset status codes
 * @apiName RetrieveAssetStatusCodes
 * @apiGroup AssetStatusCodes
 * @apiSuccess {Object} assetStatusCodes Asset status codes's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Asset status codes not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /AssetStatusCodes/:id Update asset status codes
 * @apiName UpdateAssetStatusCodes
 * @apiGroup AssetStatusCodes
 * @apiParam code Asset status codes's code.
 * @apiParam description Asset status codes's description.
 * @apiSuccess {Object} assetStatusCodes Asset status codes's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Asset status codes not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /AssetStatusCodes/:id Delete asset status codes
 * @apiName DeleteAssetStatusCodes
 * @apiGroup AssetStatusCodes
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Asset status codes not found.
 */
router.delete('/:id',
  destroy)

export default router
