import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export AssetCategories, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /AssetCategories Create asset categories
 * @apiName CreateAssetCategories
 * @apiGroup AssetCategories
 * @apiParam code Asset categories's code.
 * @apiParam description Asset categories's description.
 * @apiSuccess {Object} assetCategories Asset categories's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Asset categories not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /AssetCategories Retrieve asset categories
 * @apiName RetrieveAssetCategories
 * @apiGroup AssetCategories
 * @apiUse listParams
 * @apiSuccess {Object[]} assetCategories List of asset categories.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /AssetCategories/:id Retrieve asset categories
 * @apiName RetrieveAssetCategories
 * @apiGroup AssetCategories
 * @apiSuccess {Object} assetCategories Asset categories's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Asset categories not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /AssetCategories/:id Update asset categories
 * @apiName UpdateAssetCategories
 * @apiGroup AssetCategories
 * @apiParam code Asset categories's code.
 * @apiParam description Asset categories's description.
 * @apiSuccess {Object} assetCategories Asset categories's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Asset categories not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /AssetCategories/:id Delete asset categories
 * @apiName DeleteAssetCategories
 * @apiGroup AssetCategories
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Asset categories not found.
 */
router.delete('/:id',
  destroy)

export default router
