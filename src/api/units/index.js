import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Units, { schema } from './model'

const router = new Router()
const { unitId ,group, unit, symbol, slug, trivia, pi, quotation } = schema.tree

/**
 * @api {post} /units Create units
 * @apiName CreateUnits
 * @apiunitId ,Group Units
 * @apiParam unitId ,group Units's unitId ,group.
 * @apiParam unit Units's unit.
 * @apiParam symbol Units's symbol.
 * @apiParam slug, trivia, pi, quotation Units's slug, trivia, pi, quotation.
 * @apiSuccess {Object} units Units's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Units not found.
 */
router.post('/',
  body({ unitId ,group, unit, symbol, slug, trivia, pi, quotation }),
  create)

/**
 * @api {get} /units Retrieve units
 * @apiName RetrieveUnits
 * @apiunitId ,Group Units
 * @apiUse listParams
 * @apiSuccess {Object[]} units List of units.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /units/:id Retrieve units
 * @apiName RetrieveUnits
 * @apiunitId ,Group Units
 * @apiSuccess {Object} units Units's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Units not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /units/:id Update units
 * @apiName UpdateUnits
 * @apiunitId ,Group Units
 * @apiParam unitId ,group Units's unitId ,group.
 * @apiParam unit Units's unit.
 * @apiParam symbol Units's symbol.
 * @apiParam slug, trivia, pi, quotation Units's slug, trivia, pi, quotation.
 * @apiSuccess {Object} units Units's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Units not found.
 */
router.put('/:id',
  body({ unitId ,group, unit, symbol, slug, trivia, pi, quotation }),
  update)

/**
 * @api {delete} /units/:id Delete units
 * @apiName DeleteUnits
 * @apiunitId ,Group Units
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Units not found.
 */
router.delete('/:id',
  destroy)

export default router
