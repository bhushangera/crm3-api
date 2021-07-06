import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export AssetLocations, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /AssetLocations Create asset locations
 * @apiName CreateAssetLocations
 * @apiGroup AssetLocations
 * @apiParam code Asset locations's code.
 * @apiParam description Asset locations's description.
 * @apiSuccess {Object} assetLocations Asset locations's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Asset locations not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /AssetLocations Retrieve asset locations
 * @apiName RetrieveAssetLocations
 * @apiGroup AssetLocations
 * @apiUse listParams
 * @apiSuccess {Object[]} assetLocations List of asset locations.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /AssetLocations/:id Retrieve asset locations
 * @apiName RetrieveAssetLocations
 * @apiGroup AssetLocations
 * @apiSuccess {Object} assetLocations Asset locations's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Asset locations not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /AssetLocations/:id Update asset locations
 * @apiName UpdateAssetLocations
 * @apiGroup AssetLocations
 * @apiParam code Asset locations's code.
 * @apiParam description Asset locations's description.
 * @apiSuccess {Object} assetLocations Asset locations's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Asset locations not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /AssetLocations/:id Delete asset locations
 * @apiName DeleteAssetLocations
 * @apiGroup AssetLocations
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Asset locations not found.
 */
router.delete('/:id',
  destroy)

export default router
