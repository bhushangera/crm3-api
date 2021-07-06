import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Territories, { schema } from './model'

const router = new Router()
const { code, name, stateId,country, state } = schema.tree

/**
 * @api {post} /territories Create territories
 * @apiName CreateTerritories
 * @apiGroup Territories
 * @apiParam code Territories's code.
 * @apiParam name Territories's name.
 * @apiParam stateId Territories's stateId.
 * @apiParam state Territories's state.
 * @apiSuccess {Object} territories Territories's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Territories not found.
 */
router.post('/',
  body({ code, name, stateId,country, state }),
  create)

/**
 * @api {get} /territories Retrieve territories
 * @apiName RetrieveTerritories
 * @apiGroup Territories
 * @apiUse listParams
 * @apiSuccess {Object[]} territories List of territories.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /territories/:id Retrieve territories
 * @apiName RetrieveTerritories
 * @apiGroup Territories
 * @apiSuccess {Object} territories Territories's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Territories not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /territories/:id Update territories
 * @apiName UpdateTerritories
 * @apiGroup Territories
 * @apiParam code Territories's code.
 * @apiParam name Territories's name.
 * @apiParam stateId Territories's stateId.
 * @apiParam state Territories's state.
 * @apiSuccess {Object} territories Territories's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Territories not found.
 */
router.put('/:id',
  body({ code, name, stateId,country, state }),
  update)

/**
 * @api {delete} /territories/:id Delete territories
 * @apiName DeleteTerritories
 * @apiGroup Territories
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Territories not found.
 */
router.delete('/:id',
  destroy)

export default router
