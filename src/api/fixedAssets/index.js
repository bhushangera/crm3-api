import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export FixedAssets, { schema } from './model'

const router = new Router()
const { fAssetId,fixedAssetTypeId, fixedAssetType, assetName, dateAcquired, inWarranty, warrantyExpDate, dailyProductionCapacity, uomId, uom } = schema.tree

/**
 * @api {post} /fixedAssets Create fixed assets
 * @apiName CreateFixedAssets
 * @apiGroup FixedAssets
 * @apiParam fAssetId,fixedAssetTypeId Fixed assets's fAssetId,fixedAssetTypeId.
 * @apiParam fixedAssetType Fixed assets's fixedAssetType.
 * @apiParam assetName Fixed assets's assetName.
 * @apiParam dateAcquired Fixed assets's dateAcquired.
 * @apiParam inWarranty Fixed assets's inWarranty.
 * @apiParam warrantyExpDate Fixed assets's warrantyExpDate.
 * @apiParam dailyProductionCapacity Fixed assets's dailyProductionCapacity.
 * @apiParam uomId Fixed assets's uomId.
 * @apiParam uom Fixed assets's uom.
 * @apiSuccess {Object} fixedAssets Fixed assets's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Fixed assets not found.
 */
router.post('/',
  body({ fAssetId,fixedAssetTypeId, fixedAssetType, assetName, dateAcquired, inWarranty, warrantyExpDate, dailyProductionCapacity, uomId, uom }),
  create)

/**
 * @api {get} /fixedAssets Retrieve fixed assets
 * @apiName RetrieveFixedAssets
 * @apiGroup FixedAssets
 * @apiUse listParams
 * @apiSuccess {Object[]} fixedAssets List of fixed assets.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /fixedAssets/:id Retrieve fixed assets
 * @apiName RetrieveFixedAssets
 * @apiGroup FixedAssets
 * @apiSuccess {Object} fixedAssets Fixed assets's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Fixed assets not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /fixedAssets/:id Update fixed assets
 * @apiName UpdateFixedAssets
 * @apiGroup FixedAssets
 * @apiParam fAssetId,fixedAssetTypeId Fixed assets's fAssetId,fixedAssetTypeId.
 * @apiParam fixedAssetType Fixed assets's fixedAssetType.
 * @apiParam assetName Fixed assets's assetName.
 * @apiParam dateAcquired Fixed assets's dateAcquired.
 * @apiParam inWarranty Fixed assets's inWarranty.
 * @apiParam warrantyExpDate Fixed assets's warrantyExpDate.
 * @apiParam dailyProductionCapacity Fixed assets's dailyProductionCapacity.
 * @apiParam uomId Fixed assets's uomId.
 * @apiParam uom Fixed assets's uom.
 * @apiSuccess {Object} fixedAssets Fixed assets's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Fixed assets not found.
 */
router.put('/:id',
  body({ fAssetId,fixedAssetTypeId, fixedAssetType, assetName, dateAcquired, inWarranty, warrantyExpDate, dailyProductionCapacity, uomId, uom }),
  update)

/**
 * @api {delete} /fixedAssets/:id Delete fixed assets
 * @apiName DeleteFixedAssets
 * @apiGroup FixedAssets
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Fixed assets not found.
 */
router.delete('/:id',
  destroy)

export default router
