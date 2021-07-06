import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Hwpack, { schema } from './model'

const router = new Router()
const { uuid,
  entityId,
  entity,
  entityDescription,
  categoryId,
  category,
  categoryDescription,
  categoryCodeId,
  categoryCode,
  categoryCodeDescription,
  code,
  description,
  image,
  makeId,
  makeCode,
  logo,
  active,
  items, } = schema.tree

/**
 * @api {post} /hwpack Create hwpack
 * @apiName CreateHwpack
 * @apiGroup Hwpack
 * @apiParam articleId Hwpack's articleId.
 * @apiParam hwMId Hwpack's hwMId.
 * @apiParam hwArticleId Hwpack's hwArticleId.
 * @apiParam hwMakeId Hwpack's hwMakeId.
 * @apiParam skuId Hwpack's skuId.
 * @apiParam skuDNo Hwpack's skuDNo.
 * @apiParam skuDName Hwpack's skuDName.
 * @apiParam skuUnit Hwpack's skuUnit.
 * @apiParam skuImage Hwpack's skuImage.
 * @apiParam skuMakeImage Hwpack's skuMakeImage.
 * @apiParam skuMake Hwpack's skuMake.
 * @apiParam skuSeries Hwpack's skuSeries.
 * @apiSuccess {Object} hwpack Hwpack's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Hwpack not found.
 */
router.post('/',
  body({
    uuid,
    entityId,
    entity,
    entityDescription,
    categoryId,
    category,
    categoryDescription,
    categoryCodeId,
    categoryCode,
    categoryCodeDescription,
    code,
    description,
    image,
    makeId,
    makeCode,
    logo,
    active,
    items,
  }),
  create)

/**
 * @api {get} /hwpack Retrieve hwpacks
 * @apiName RetrieveHwpacks
 * @apiGroup Hwpack
 * @apiUse listParams
 * @apiSuccess {Object[]} hwpacks List of hwpacks.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /hwpack/:id Retrieve hwpack
 * @apiName RetrieveHwpack
 * @apiGroup Hwpack
 * @apiSuccess {Object} hwpack Hwpack's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Hwpack not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /hwpack/:id Update hwpack
 * @apiName UpdateHwpack
 * @apiGroup Hwpack
 * @apiParam articleId Hwpack's articleId.
 * @apiParam hwMId Hwpack's hwMId.
 * @apiParam hwArticleId Hwpack's hwArticleId.
 * @apiParam hwMakeId Hwpack's hwMakeId.
 * @apiParam skuId Hwpack's skuId.
 * @apiParam skuDNo Hwpack's skuDNo.
 * @apiParam skuDName Hwpack's skuDName.
 * @apiParam skuUnit Hwpack's skuUnit.
 * @apiParam skuImage Hwpack's skuImage.
 * @apiParam skuMakeImage Hwpack's skuMakeImage.
 * @apiParam skuMake Hwpack's skuMake.
 * @apiParam skuSeries Hwpack's skuSeries.
 * @apiSuccess {Object} hwpack Hwpack's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Hwpack not found.
 */
router.put('/:id',
  body({
    uuid,
    entityId,
    entity,
    entityDescription,
    categoryId,
    category,
    categoryDescription,
    categoryCodeId,
    categoryCode,
    categoryCodeDescription,
    code,
    description,
    image,
    makeId,
    makeCode,
    logo,
    active,
    items,
  }),
  update)

/**
 * @api {delete} /hwpack/:id Delete hwpack
 * @apiName DeleteHwpack
 * @apiGroup Hwpack
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Hwpack not found.
 */
router.delete('/:id',
  destroy)

export default router
