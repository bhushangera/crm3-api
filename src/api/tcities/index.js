import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Tcities, { schema } from './model'

const router = new Router()
const { territoryId, cityId, cityName, country_id, country_name, state_id, state_name, territory_code } = schema.tree

/**
 * @api {post} /tcities Create tcities
 * @apiName CreateTcities
 * @apiGroup Tcities
 * @apiParam territoryId Tcities's territoryId.
 * @apiParam cityId Tcities's cityId.
 * @apiParam cityName Tcities's cityName.
 * @apiParam country_id Tcities's country_id.
 * @apiParam country_name Tcities's country_name.
 * @apiParam state_id Tcities's state_id.
 * @apiParam state_name Tcities's state_name.
 * @apiParam territory_code Tcities's territory_code.
 * @apiSuccess {Object} tcities Tcities's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Tcities not found.
 */
router.post('/',
  body({ territoryId, cityId, cityName, country_id, country_name, state_id, state_name, territory_code }),
  create)

/**
 * @api {get} /tcities Retrieve tcities
 * @apiName RetrieveTcities
 * @apiGroup Tcities
 * @apiUse listParams
 * @apiSuccess {Object[]} tcities List of tcities.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /tcities/:id Retrieve tcities
 * @apiName RetrieveTcities
 * @apiGroup Tcities
 * @apiSuccess {Object} tcities Tcities's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Tcities not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /tcities/:id Update tcities
 * @apiName UpdateTcities
 * @apiGroup Tcities
 * @apiParam territoryId Tcities's territoryId.
 * @apiParam cityId Tcities's cityId.
 * @apiParam cityName Tcities's cityName.
 * @apiParam country_id Tcities's country_id.
 * @apiParam country_name Tcities's country_name.
 * @apiParam state_id Tcities's state_id.
 * @apiParam state_name Tcities's state_name.
 * @apiParam territory_code Tcities's territory_code.
 * @apiSuccess {Object} tcities Tcities's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Tcities not found.
 */
router.put('/:id',
  body({ territoryId, cityId, cityName, country_id, country_name, state_id, state_name, territory_code }),
  update)

/**
 * @api {delete} /tcities/:id Delete tcities
 * @apiName DeleteTcities
 * @apiGroup Tcities
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Tcities not found.
 */
router.delete('/:id',
  destroy)

export default router
