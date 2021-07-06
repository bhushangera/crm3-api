import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export PartCodes, { schema } from './model'

const router = new Router()
const { 
  partCategoryId, partCode,shortCode, kitchenOnly, carcaseOnly, category
,shutterOnly,dealerPrice,customerPrice,landingPrice,hasPriceTag, gst, glue, miniFix, MINIFIXSKU, MINIFIXacId, } = schema.tree

/**
 * @api {post} /partCodes Create part codes
 * @apiName CreatePartCodes
 * @apiGroup PartCodes
 * @apiParam partCategoryId Part codes's partCategoryId.
 * @apiParam partCode Part codes's partCode.
 * @apiParam kitchenOnly Part codes's kitchenOnly.
 * @apiParam carcaseOnly Part codes's carcaseOnly.
 * @apiSuccess {Object} partCodes Part codes's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Part codes not found.
 */
router.post('/',
  body({ partCategoryId, partCode,shortCode, kitchenOnly, carcaseOnly, category
    ,shutterOnly,dealerPrice,customerPrice,landingPrice,hasPriceTag, gst, glue, miniFix, MINIFIXSKU, MINIFIXacId, }),
  create)

/**
 * @api {get} /partCodes Retrieve part codes
 * @apiName RetrievePartCodes
 * @apiGroup PartCodes
 * @apiUse listParams
 * @apiSuccess {Object[]} partCodes List of part codes.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /partCodes/:id Retrieve part codes
 * @apiName RetrievePartCodes
 * @apiGroup PartCodes
 * @apiSuccess {Object} partCodes Part codes's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Part codes not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /partCodes/:id Update part codes
 * @apiName UpdatePartCodes
 * @apiGroup PartCodes
 * @apiParam partCategoryId Part codes's partCategoryId.
 * @apiParam partCode Part codes's partCode.
 * @apiParam kitchenOnly Part codes's kitchenOnly.
 * @apiParam carcaseOnly Part codes's carcaseOnly.
 * @apiSuccess {Object} partCodes Part codes's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Part codes not found.
 */
router.put('/:id',
  body({ partCategoryId, partCode,shortCode, kitchenOnly, carcaseOnly, category
    ,shutterOnly,dealerPrice,customerPrice,landingPrice,hasPriceTag, gst, glue, miniFix, MINIFIXSKU, MINIFIXacId }),
  update)

/**
 * @api {delete} /partCodes/:id Delete part codes
 * @apiName DeletePartCodes
 * @apiGroup PartCodes
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Part codes not found.
 */
router.delete('/:id',
  destroy)

export default router
