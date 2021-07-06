import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Pars, { schema } from './model'

const router = new Router()
const {
  PartyId,
  ARSId,
  ArticleId,
  ArticleCode,
  MId,
  ARSCode,
  baseMId,
  baseMCode,
  baseArticleId,
  baseArticle,
  baseThickness,
  backArticleId,
  backArticle,
  backThickness,
  baseMakeId,
  baseMake,
  baseMakeImage,
  baseSeriesId,
  baseSeries,
  baseSKUId,
  baseSKU,
  baseSKUImage,
  backSKUId,
  backSKU,
  backSKUImage,
  backLinerSKUId,
  backLinerSKUMakeId,
  backlinerSKUImage,
  backLinerSKU,
  backLinerSKUThickness,
  backLinerSKUMake,
  backLinerSKUMakeImage,
  EType,
  BType,
  backBType,
  finishMId,
  finishMCode,
  finishArticleId,
  finishArticle,
  finishThickness,
  RATE,
  RType,
  unit,
  GST,
  drw900,
  drw1200,
  drwI600,
  drwI600Plus,
  drwExtraH,
  drwHThreshold,
  shelfRate,
  shelfRate25mm,
  shelfRate36mm,
  shelfRate36Plus,
  ccHandleLessPlus,
  additionSplBack,
  minWidth,
  additionLessWidth,
  FCId,
  FCCode,
  FCDescription,
  othMakeId,
  othMakeCode,
  vsRate,
  shExtraThickness,
  additionSameLiningSH,
  additonSplEB,
  rawRate,
  isActive, SHBLinerMId,
  SHBLinerMCode,
  SHBLArticleId,
  SHBLArticle,
  SHBLThickness,
} = schema.tree

/**
 * @api {post} /pars Create pars
 * @apiName CreatePars
 * @apiGroup Pars
 * @apiParam PartyId Pars's PartyId.
 * @apiSuccess {Object} pars Pars's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Pars not found.
 */
router.post('/',
  body({
    PartyId,
    ARSId,
    ArticleId,
    ArticleCode,
    MId,
    ARSCode,
    baseMId,
    baseMCode,
    baseArticleId,
    baseArticle,
    baseThickness,
    backArticleId,
    backArticle,
    backThickness,
    baseMakeId,
    baseMake,
    baseMakeImage,
    baseSeriesId,
    baseSeries,
    baseSKUId,
    baseSKU,
    baseSKUImage,
    backSKUId,
    backSKU,
    backSKUImage,
    backLinerSKUId,
    backLinerSKUMakeId,
    backlinerSKUImage,
    backLinerSKU,
    backLinerSKUThickness,
    backLinerSKUMake,
    backLinerSKUMakeImage,
    EType,
    BType,
    backBType,
    finishMId,
    finishMCode,
    finishArticleId,
    finishArticle,
    finishThickness,
    RATE,
    RType,
    unit,
    GST,
    drw900,
    drw1200,
    drwI600,
    drwI600Plus,
    drwExtraH,
    drwHThreshold,
    shelfRate,
    shelfRate25mm,
    shelfRate36mm,
    shelfRate36Plus,
    ccHandleLessPlus,
    additionSplBack,
    minWidth,
    additionLessWidth,
    FCId,
    FCCode,
    FCDescription,
    othMakeId,
    othMakeCode,
    vsRate,
    shExtraThickness,
    additionSameLiningSH,
    additonSplEB,
    rawRate,
    isActive, SHBLinerMId,
    SHBLinerMCode,
    SHBLArticleId,
    SHBLArticle,
    SHBLThickness,
  }),
  create)

/**
 * @api {get} /pars Retrieve pars
 * @apiName RetrievePars
 * @apiGroup Pars
 * @apiUse listParams
 * @apiSuccess {Object[]} pars List of pars.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /pars/:id Retrieve pars
 * @apiName RetrievePars
 * @apiGroup Pars
 * @apiSuccess {Object} pars Pars's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Pars not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /pars/:id Update pars
 * @apiName UpdatePars
 * @apiGroup Pars
 * @apiParam PartyId Pars's PartyId.
 * @apiSuccess {Object} pars Pars's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Pars not found.
 */
router.put('/:id',
  body({
    PartyId,
    ARSId,
    ArticleId,
    ArticleCode,
    MId,
    ARSCode,
    baseMId,
    baseMCode,
    baseArticleId,
    baseArticle,
    baseThickness,
    backArticleId,
    backArticle,
    backThickness,
    baseMakeId,
    baseMake,
    baseMakeImage,
    baseSeriesId,
    baseSeries,
    baseSKUId,
    baseSKU,
    baseSKUImage,
    backSKUId,
    backSKU,
    backSKUImage,
    backLinerSKUId,
    backLinerSKUMakeId,
    backlinerSKUImage,
    backLinerSKU,
    backLinerSKUThickness,
    backLinerSKUMake,
    backLinerSKUMakeImage,
    EType,
    BType,
    backBType,
    finishMId,
    finishMCode,
    finishArticleId,
    finishArticle,
    finishThickness,
    RATE,
    RType,
    unit,
    GST,
    drw900,
    drw1200,
    drwI600,
    drwI600Plus,
    drwExtraH,
    drwHThreshold,
    shelfRate,
    shelfRate25mm,
    shelfRate36mm,
    shelfRate36Plus,
    ccHandleLessPlus,
    additionSplBack,
    minWidth,
    additionLessWidth,
    FCId,
    FCCode,
    FCDescription,
    othMakeId,
    othMakeCode,
    vsRate,
    shExtraThickness,
    additionSameLiningSH,
    additonSplEB,
    rawRate,
    isActive, SHBLinerMId,
    SHBLinerMCode,
    SHBLArticleId,
    SHBLArticle,
    SHBLThickness,
  }),
  update)

/**
 * @api {delete} /pars/:id Delete pars
 * @apiName DeletePars
 * @apiGroup Pars
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Pars not found.
 */
router.delete('/:id',
  destroy)

export default router
