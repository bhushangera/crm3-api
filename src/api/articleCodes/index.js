import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export ArticleCodes, { schema } from './model'

const router = new Router()
const { 
  seriesArticleId,
  materialId,
  material,
  MCId,
  MCCode,
  SMCId,
  SMCCode,
  makeId,
  make,
  makeBrandId,
  brandSeriesId,
  article,
  series,
  articleNo,
  SKU,
  image,
  isActive,
  fApplication,
  EBSKU,
  EBSKUacId,
  THINNERSKU,
  targetLvl,reorderLvl,reorderQty, THINNERSKUacId
} = schema.tree

/**
 * @api {post} /articleCodes Create article codes
 * @apiName CreateArticleCodes
 * @apiGroup ArticleCodes
 * @apiParam seriesArticleId Article codes's seriesArticleId.
 * @apiParam articleCode Article codes's articleCode.
 * @apiParam articleNo Article codes's articleNo.
 * @apiParam image Article codes's image.
 * @apiParam isActive Article codes's isActive.
 * @apiParam slug Article codes's slug.
 * @apiSuccess {Object} articleCodes Article codes's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Article codes not found.
 */
router.post('/',
  body({ 
    seriesArticleId,
    materialId,
    material,
    MCId,
    MCCode,
    SMCId,
    SMCCode,
    makeId,
    make,
    makeBrandId,
    brandSeriesId,
    article,
    series,
    articleNo,
    SKU,
    image,
    isActive,
    fApplication,
    EBSKU,
    EBSKUacId,
    THINNERSKU,
    targetLvl,reorderLvl,reorderQty, THINNERSKUacId
  }),
  create)

/**
 * @api {get} /articleCodes Retrieve article codes
 * @apiName RetrieveArticleCodes
 * @apiGroup ArticleCodes
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of article codes.
 * @apiSuccess {Object[]} rows List of article codes.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /articleCodes/:id Retrieve article codes
 * @apiName RetrieveArticleCodes
 * @apiGroup ArticleCodes
 * @apiSuccess {Object} articleCodes Article codes's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Article codes not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /articleCodes/:id Update article codes
 * @apiName UpdateArticleCodes
 * @apiGroup ArticleCodes
 * @apiParam seriesArticleId Article codes's seriesArticleId.
 * @apiParam articleCode Article codes's articleCode.
 * @apiParam articleNo Article codes's articleNo.
 * @apiParam image Article codes's image.
 * @apiParam isActive Article codes's isActive.
 * @apiParam slug Article codes's slug.
 * @apiSuccess {Object} articleCodes Article codes's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Article codes not found.
 */
router.put('/:id',
  body({ 
    seriesArticleId,
  materialId,
  material,
  MCId,
  MCCode,
  SMCId,
  SMCCode,
  makeId,
  make,
  makeBrandId,
  brandSeriesId,
  article,
  series,
  articleNo,
  SKU,
  image,
  isActive,
  fApplication,
  EBSKU,
  EBSKUacId,
  THINNERSKU,
  targetLvl,reorderLvl,reorderQty, THINNERSKUacId
  }),
  update)
  

/**
 * @api {delete} /articleCodes/:id Delete article codes
 * @apiName DeleteArticleCodes
 * @apiGroup ArticleCodes
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Article codes not found.
 */
router.delete('/:id',
  destroy)

export default router
