import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Hwpackdetail, { schema } from './model'

const router = new Router()
const { hwPackId, hwPackCode, hwMId, hwArticleId, hwMakeId, skuId, skuDNo, skuDName, skuUnit, skuImage, skuMakeImage, skuMake, skuSeries, calculateBy,
  hwMaterial,
  hwArticle, } = schema.tree

/**
 * @api {post} /hwpackdetail Create hwpackdetail
 * @apiName CreateHwpackdetail
 * @apiGroup Hwpackdetail
 * @apiParam hwPackId Hwpackdetail's hwPackId.
 * @apiParam hwPackCode Hwpackdetail's hwPackCode.
 * @apiParam hwMId Hwpackdetail's hwMId.
 * @apiParam hwArticleId Hwpackdetail's hwArticleId.
 * @apiParam hwMakeId Hwpackdetail's hwMakeId.
 * @apiParam skuId Hwpackdetail's skuId.
 * @apiParam skuDNo Hwpackdetail's skuDNo.
 * @apiParam skuDName Hwpackdetail's skuDName.
 * @apiParam skuUnit Hwpackdetail's skuUnit.
 * @apiParam skuImage Hwpackdetail's skuImage.
 * @apiParam skuMakeImage Hwpackdetail's skuMakeImage.
 * @apiParam skuMake Hwpackdetail's skuMake.
 * @apiParam skuSeries, calculateBy,
 * hwMaterial,
hwArticle, Hwpackdetail's skuSeries, calculateBy,
 * hwMaterial,
hwArticle,.
 * @apiSuccess {Object} hwpackdetail Hwpackdetail's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Hwpackdetail not found.
 */
router.post('/',
  body({
    hwPackId, hwPackCode, hwMId, hwArticleId, hwMakeId, skuId, skuDNo, skuDName, skuUnit, skuImage, skuMakeImage, skuMake, skuSeries, calculateBy,
    hwMaterial,
    hwArticle,
  }),
  create)

/**
 * @api {get} /hwpackdetail Retrieve hwpackdetails
 * @apiName RetrieveHwpackdetails
 * @apiGroup Hwpackdetail
 * @apiUse listParams
 * @apiSuccess {Object[]} hwpackdetails List of hwpackdetails.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /hwpackdetail/:id Retrieve hwpackdetail
 * @apiName RetrieveHwpackdetail
 * @apiGroup Hwpackdetail
 * @apiSuccess {Object} hwpackdetail Hwpackdetail's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Hwpackdetail not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /hwpackdetail/:id Update hwpackdetail
 * @apiName UpdateHwpackdetail
 * @apiGroup Hwpackdetail
 * @apiParam hwPackId Hwpackdetail's hwPackId.
 * @apiParam hwPackCode Hwpackdetail's hwPackCode.
 * @apiParam hwMId Hwpackdetail's hwMId.
 * @apiParam hwArticleId Hwpackdetail's hwArticleId.
 * @apiParam hwMakeId Hwpackdetail's hwMakeId.
 * @apiParam skuId Hwpackdetail's skuId.
 * @apiParam skuDNo Hwpackdetail's skuDNo.
 * @apiParam skuDName Hwpackdetail's skuDName.
 * @apiParam skuUnit Hwpackdetail's skuUnit.
 * @apiParam skuImage Hwpackdetail's skuImage.
 * @apiParam skuMakeImage Hwpackdetail's skuMakeImage.
 * @apiParam skuMake Hwpackdetail's skuMake.
 * @apiParam skuSeries, calculateBy,
 * hwMaterial,
hwArticle, Hwpackdetail's skuSeries, calculateBy,
 * hwMaterial,
hwArticle,.
 * @apiSuccess {Object} hwpackdetail Hwpackdetail's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Hwpackdetail not found.
 */
router.put('/:id',
  body({
    hwPackId, hwPackCode, hwMId, hwArticleId, hwMakeId, skuId, skuDNo, skuDName, skuUnit, skuImage, skuMakeImage, skuMake, skuSeries, calculateBy,
    hwMaterial,
    hwArticle,
  }),
  update)

/**
 * @api {delete} /hwpackdetail/:id Delete hwpackdetail
 * @apiName DeleteHwpackdetail
 * @apiGroup Hwpackdetail
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Hwpackdetail not found.
 */
router.delete('/:id',
  destroy)

export default router
