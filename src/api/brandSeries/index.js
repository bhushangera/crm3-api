import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { token } from '../../services/passport'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export BrandSeries, { schema } from './model'

const router = new Router()
const { 
  materialBrandId,
  materialBrand,
  materialId,
  material,
  MCId,
  MCCode,
  SMCId,
  SMCCode,
  makeId,
  make,
  series,
  slug,
  isActive,
  image,
  mType,
} = schema.tree

/**
 * @api {post} /brandSeries Create brand series
 * @apiName CreateBrandSeries
 * @apiGroup BrandSeries
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiParam materialBrandId Brand series's materialBrandId.
 * @apiParam series Brand series's series.
 * @apiParam slug Brand series's slug.
 * @apiSuccess {Object} brandSeries Brand series's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Brand series not found.
 * @apiError 401 user access only.
 */
router.post('/',
  // token({ required: true }),
  body({ 
    materialBrandId,
  materialBrand,
  materialId,
  material,
  MCId,
  MCCode,
  SMCId,
  SMCCode,
  makeId,
  make,
  series,
  slug,
  isActive,
  image,
  mType,
   }),
  create)

/**
 * @api {get} /brandSeries Retrieve brand series
 * @apiName RetrieveBrandSeries
 * @apiGroup BrandSeries
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of brand series.
 * @apiSuccess {Object[]} rows List of brand series.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 401 user access only.
 */
router.get('/',
  // token({ required: true }),
  query(),
  index)

/**
 * @api {get} /brandSeries/:id Retrieve brand series
 * @apiName RetrieveBrandSeries
 * @apiGroup BrandSeries
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiSuccess {Object} brandSeries Brand series's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Brand series not found.
 * @apiError 401 user access only.
 */
router.get('/:id',
  // token({ required: true }),
  show)

/**
 * @api {put} /brandSeries/:id Update brand series
 * @apiName UpdateBrandSeries
 * @apiGroup BrandSeries
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiParam materialBrandId Brand series's materialBrandId.
 * @apiParam series Brand series's series.
 * @apiParam slug Brand series's slug.
 * @apiSuccess {Object} brandSeries Brand series's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Brand series not found.
 * @apiError 401 user access only.
 */
router.put('/:id',
  // token({ required: true }),
  body({
    materialBrandId,
    materialBrand,
    materialId,
    material,
    MCId,
    MCCode,
    SMCId,
    SMCCode,
    makeId,
    make,
    series,
    slug,
    isActive,
    image,
    mType,
    }),
  update)

/**
 * @api {delete} /brandSeries/:id Delete brand series
 * @apiName DeleteBrandSeries
 * @apiGroup BrandSeries
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Brand series not found.
 * @apiError 401 user access only.
 */
router.delete('/:id',
  // token({ required: true }),
  destroy)

export default router
