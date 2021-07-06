import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Locations, { schema } from './model'

const router = new Router()
const { territoryId, region, country, state, stateId, location, territory, pinCode, kmFromNC, kmFromHO, slug } = schema.tree

/**
 * @api {post} /locations Create locations
 * @apiName CreateLocations
 * @apiGroup Locations
 * @apiParam territoryId Locations's territoryId.
 * @apiParam region Locations's region.
 * @apiParam country Locations's country.
 * @apiParam state  stateId,Locations's state. stateId,
 * @apiParam location Locations's location.
 * @apiParam territory Locations's territory.
 * @apiParam pinCode Locations's pinCode.
 * @apiParam kmFromNC Locations's kmFromNC.
 * @apiParam kmFromHO, slug Locations's kmFromHO, slug.
 * @apiSuccess {Object} locations Locations's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Locations not found.
 */
router.post('/',
  body({ territoryId, region, country, state, stateId, location, territory, pinCode, kmFromNC, kmFromHO, slug }),
  create)

/**
 * @api {get} /locations Retrieve locations
 * @apiName RetrieveLocations
 * @apiGroup Locations
 * @apiUse listParams
 * @apiSuccess {Object[]} locations List of locations.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /locations/:id Retrieve locations
 * @apiName RetrieveLocations
 * @apiGroup Locations
 * @apiSuccess {Object} locations Locations's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Locations not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /locations/:id Update locations
 * @apiName UpdateLocations
 * @apiGroup Locations
 * @apiParam territoryId Locations's territoryId.
 * @apiParam region Locations's region.
 * @apiParam country Locations's country.
 * @apiParam state  stateId,Locations's state. stateId,
 * @apiParam location Locations's location.
 * @apiParam territory Locations's territory.
 * @apiParam pinCode Locations's pinCode.
 * @apiParam kmFromNC Locations's kmFromNC.
 * @apiParam kmFromHO, slug Locations's kmFromHO, slug.
 * @apiSuccess {Object} locations Locations's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Locations not found.
 */
router.put('/:id',
  body({ territoryId, region, country, state, stateId, location, territory, pinCode, kmFromNC, kmFromHO, slug }),
  update)

/**
 * @api {delete} /locations/:id Delete locations
 * @apiName DeleteLocations
 * @apiGroup Locations
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Locations not found.
 */
router.delete('/:id',
  destroy)

export default router
