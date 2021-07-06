import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Wastage, { schema } from './model'

const router = new Router()
const {
  presetCode,
  ccBaseWastage,
  ccBackWastage,
  ccLamWastage,
  shBaseWastage,
  shLamWastage,
  ebWastage,
  golaWastage,
  profileWastage,
  glassWastage, sealerQty,
  paintQty,
  topCoatQty,
  epoxyQty,
} = schema.tree

/**
 * @api {post} /wastage Create wastage
 * @apiName CreateWastage
 * @apiGroup Wastage
 * @apiParam carcase Wastage's carcase.
 * @apiParam shutter Wastage's shutter.
 * @apiParam back Wastage's back.
 * @apiSuccess {Object} wastage Wastage's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Wastage not found.
 */
router.post('/',
  body({
    presetCode,
    ccBaseWastage,
    ccBackWastage,
    ccLamWastage,
    shBaseWastage,
    shLamWastage,
    ebWastage,
    golaWastage,
    profileWastage,
    glassWastage, sealerQty,
    paintQty,
    topCoatQty,
    epoxyQty,
  }),
  create)

/**
 * @api {get} /wastage Retrieve wastages
 * @apiName RetrieveWastages
 * @apiGroup Wastage
 * @apiUse listParams
 * @apiSuccess {Object[]} wastages List of wastages.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /wastage/:id Retrieve wastage
 * @apiName RetrieveWastage
 * @apiGroup Wastage
 * @apiSuccess {Object} wastage Wastage's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Wastage not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /wastage/:id Update wastage
 * @apiName UpdateWastage
 * @apiGroup Wastage
 * @apiParam carcase Wastage's carcase.
 * @apiParam shutter Wastage's shutter.
 * @apiParam back Wastage's back.
 * @apiSuccess {Object} wastage Wastage's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Wastage not found.
 */
router.put('/:id',
  body({
    presetCode,
    ccBaseWastage,
    ccBackWastage,
    ccLamWastage,
    shBaseWastage,
    shLamWastage,
    ebWastage,
    golaWastage,
    profileWastage,
    glassWastage, sealerQty,
    paintQty,
    topCoatQty,
    epoxyQty,
  }),
  update)

/**
 * @api {delete} /wastage/:id Delete wastage
 * @apiName DeleteWastage
 * @apiGroup Wastage
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Wastage not found.
 */
router.delete('/:id',
  destroy)

export default router
