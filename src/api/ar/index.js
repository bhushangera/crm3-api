import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Ar, { schema } from './model'

const router = new Router()
const { SKUId, image, SKU, CQty, Wastage, UMOId, UOM, Qty } = schema.tree

/**
 * @api {post} /ar Create ar
 * @apiName CreateAr
 * @apiGroup Ar
 * @apiParam SKUId Ar's SKUId.
 * @apiParam image Ar's image.
 * @apiParam SKU Ar's SKU.
 * @apiParam CQty Ar's CQty.
 * @apiParam Wastage Ar's Wastage.
 * @apiParam UMOId Ar's UMOId.
 * @apiParam UOM Ar's UOM.
 * @apiParam Qty Ar's Qty.
 * @apiSuccess {Object} ar Ar's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Ar not found.
 */
router.post('/',
  body({ SKUId, image, SKU, CQty, Wastage, UMOId, UOM, Qty }),
  create)

/**
 * @api {get} /ar Retrieve ars
 * @apiName RetrieveArs
 * @apiGroup Ar
 * @apiUse listParams
 * @apiSuccess {Object[]} ars List of ars.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /ar/:id Retrieve ar
 * @apiName RetrieveAr
 * @apiGroup Ar
 * @apiSuccess {Object} ar Ar's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Ar not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /ar/:id Update ar
 * @apiName UpdateAr
 * @apiGroup Ar
 * @apiParam SKUId Ar's SKUId.
 * @apiParam image Ar's image.
 * @apiParam SKU Ar's SKU.
 * @apiParam CQty Ar's CQty.
 * @apiParam Wastage Ar's Wastage.
 * @apiParam UMOId Ar's UMOId.
 * @apiParam UOM Ar's UOM.
 * @apiParam Qty Ar's Qty.
 * @apiSuccess {Object} ar Ar's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Ar not found.
 */
router.put('/:id',
  body({ SKUId, image, SKU, CQty, Wastage, UMOId, UOM, Qty }),
  update)

/**
 * @api {delete} /ar/:id Delete ar
 * @apiName DeleteAr
 * @apiGroup Ar
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Ar not found.
 */
router.delete('/:id',
  destroy)

export default router
