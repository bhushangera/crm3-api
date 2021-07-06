import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Uom, { schema } from './model'

const router = new Router()
const { 
      unitId, UTC,
    FUnitId,
    FUnit,
    FSymbol,
    TUnitId,
    TUnit,
    TSymbol,
    CF,
    CTU,
    description, trivia, method
 } = schema.tree

/**
 * @api {post} /uom Create uom
 * @apiName CreateUom
 * @apiGroup Uom
 * @apiParam units Uom's units.
 * @apiParam  Uom's .
 * @apiParam unitGroup Uom's unitGroup.
 * @apiParam description Uom's description.
 * @apiParam conversionFactor, convertedUnits Uom's conversionFactor, convertedUnits.
 * @apiSuccess {Object} uom Uom's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Uom not found.
 */
router.post('/',
  body({ 
    unitId, UTC,
    FUnitId,
    FUnit,
    FSymbol,
    TUnitId,
    TUnit,
    TSymbol,
    CF,
    CTU,
    description, trivia, method
  }),
  create)

/**
 * @api {get} /uom Retrieve uoms
 * @apiName RetrieveUoms
 * @apiGroup Uom
 * @apiUse listParams
 * @apiSuccess {Object[]} uoms List of uoms.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /uom/:id Retrieve uom
 * @apiName RetrieveUom
 * @apiGroup Uom
 * @apiSuccess {Object} uom Uom's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Uom not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /uom/:id Update uom
 * @apiName UpdateUom
 * @apiGroup Uom
 * @apiParam units Uom's units.
 * @apiParam  Uom's .
 * @apiParam unitGroup Uom's unitGroup.
 * @apiParam description Uom's description.
 * @apiParam conversionFactor, convertedUnits Uom's conversionFactor, convertedUnits.
 * @apiSuccess {Object} uom Uom's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Uom not found.
 */
router.put('/:id',
  body({ 
        unitId, UTC,
    FUnitId,
    FUnit,
    FSymbol,
    TUnitId,
    TUnit,
    TSymbol,
    CF,
    CTU,
    description, trivia, method
   }),
  update)

/**
 * @api {delete} /uom/:id Delete uom
 * @apiName DeleteUom
 * @apiGroup Uom
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Uom not found.
 */
router.delete('/:id',
  destroy)

export default router
