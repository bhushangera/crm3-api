import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Ars, { schema } from './model'

const router = new Router()
const {
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
  edgeFinish,
  additonSplEB,
  PartyId,
  ARSId,
  rawRate,
  isActive, SHBLinerMId,
  SHBLinerMCode,
  SHBLArticleId,
  SHBLArticle,
  SHBLThickness,
} = schema.tree

/**
 * @api {post} /ARS Create ars
 * @apiName CreateArs
 * @apiGroup Ars
 * @apiParam ARSCode Ars's ARSCode.
 * @apiParam ARSDescription Ars's ARSDescription.
 * @apiParam ArticleId Ars's ArticleId.
 * @apiParam MCCode Ars's MCCode.
 * @apiParam SMCCode Ars's SMCCode.
 * @apiParam ArticleCode Ars's ArticleCode.
 * @apiParam ArticleDescription Ars's ArticleDescription.
 * @apiParam BMId Ars's BMId.
 * @apiParam BMCode.BMDescription Ars's BMCode.BMDescription.
 * @apiParam BMakeId Ars's BMakeId.
 * @apiParam BMakeCode Ars's BMakeCode.
 * @apiParam BMakeImage Ars's BMakeImage.
 * @apiParam FMId Ars's FMId.
 * @apiParam FMCode Ars's FMCode.
 * @apiParam FMDescription Ars's FMDescription.
 * @apiParam FMakeId Ars's FMakeId.
 * @apiParam FMakeImage Ars's FMakeImage.
 * @apiParam FMakeCode Ars's FMakeCode.
 * @apiParam FArticleId Ars's FArticleId.
 * @apiParam FArticleCode Ars's FArticleCode.
 * @apiParam FArticleDescription Ars's FArticleDescription.
 * @apiParam STDBack Ars's STDBack.
 * @apiParam VisibleBack Ars's VisibleBack.
 * @apiParam VBAddition Ars's VBAddition.
 * @apiParam RATE Ars's RATE.
 * @apiParam GST Ars's GST.
 * @apiParam slug Ars's slug.
 * @apiSuccess {Object} ars Ars's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Ars not found.
 */
router.post('/',
  body({
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
    edgeFinish,
    additonSplEB,
    PartyId,
    ARSId,
    rawRate,
    isActive, SHBLinerMId,
    SHBLinerMCode,
    SHBLArticleId,
    SHBLArticle,
    SHBLThickness,

  }),
  create)

/**
 * @api {get} /ARS Retrieve ars
 * @apiName RetrieveArs
 * @apiGroup Ars
 * @apiUse listParams
 * @apiSuccess {Object[]} ars List of ars.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /ARS/:id Retrieve ars
 * @apiName RetrieveArs
 * @apiGroup Ars
 * @apiSuccess {Object} ars Ars's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Ars not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /ARS/:id Update ars
 * @apiName UpdateArs
 * @apiGroup Ars
 * @apiParam ARSCode Ars's ARSCode.
 * @apiParam ARSDescription Ars's ARSDescription.
 * @apiParam ArticleId Ars's ArticleId.
 * @apiParam MCCode Ars's MCCode.
 * @apiParam SMCCode Ars's SMCCode.
 * @apiParam ArticleCode Ars's ArticleCode.
 * @apiParam ArticleDescription Ars's ArticleDescription.
 * @apiParam BMId Ars's BMId.
 * @apiParam BMCode.BMDescription Ars's BMCode.BMDescription.
 * @apiParam BMakeId Ars's BMakeId.
 * @apiParam BMakeCode Ars's BMakeCode.
 * @apiParam BMakeImage Ars's BMakeImage.
 * @apiParam FMId Ars's FMId.
 * @apiParam FMCode Ars's FMCode.
 * @apiParam FMDescription Ars's FMDescription.
 * @apiParam FMakeId Ars's FMakeId.
 * @apiParam FMakeImage Ars's FMakeImage.
 * @apiParam FMakeCode Ars's FMakeCode.
 * @apiParam FArticleId Ars's FArticleId.
 * @apiParam FArticleCode Ars's FArticleCode.
 * @apiParam FArticleDescription Ars's FArticleDescription.
 * @apiParam STDBack Ars's STDBack.
 * @apiParam VisibleBack Ars's VisibleBack.
 * @apiParam VBAddition Ars's VBAddition.
 * @apiParam RATE Ars's RATE.
 * @apiParam GST Ars's GST.
 * @apiParam slug Ars's slug.
 * @apiSuccess {Object} ars Ars's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Ars not found.
 */
router.put('/:id',
  body({
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
    edgeFinish,
    additonSplEB,
    PartyId,
    ARSId,
    rawRate,
    isActive, SHBLinerMId,
    SHBLinerMCode,
    SHBLArticleId,
    SHBLArticle,
    SHBLThickness,
  }),
  update)

/**
 * @api {delete} /ARS/:id Delete ars
 * @apiName DeleteArs
 * @apiGroup Ars
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Ars not found.
 */
router.delete('/:id',
  destroy)

export default router
