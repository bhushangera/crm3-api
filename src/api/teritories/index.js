import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Teritories, { schema } from './model'

const router = new Router()
const { 
  code,
  name,
  stateId,
  state, 
} = schema.tree

/**
 * @api {post} /teritories Create teritories
 * @apiName CreateTeritories
 * @apiGroup Teritories
 * @apiParam locCode Teritories's locCode.
 * @apiParam city Teritories's city.
 * @apiParam state Teritories's state.
 * @apiParam country Teritories's country.
 * @apiParam pinCode Teritories's pinCode.
 * @apiSuccess {Object} teritories Teritories's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Teritories not found.
 */
router.post('/',
  body({
    code,
  name,
  stateId,
  state,
    }),
  create)

/**
 * @api {get} /teritories Retrieve teritories
 * @apiName RetrieveTeritories
 * @apiGroup Teritories
 * @apiUse listParams
 * @apiSuccess {Object[]} teritories List of teritories.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /teritories/:id Retrieve teritories
 * @apiName RetrieveTeritories
 * @apiGroup Teritories
 * @apiSuccess {Object} teritories Teritories's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Teritories not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /teritories/:id Update teritories
 * @apiName UpdateTeritories
 * @apiGroup Teritories
 * @apiParam locCode Teritories's locCode.
 * @apiParam city Teritories's city.
 * @apiParam state Teritories's state.
 * @apiParam country Teritories's country.
 * @apiParam pinCode Teritories's pinCode.
 * @apiSuccess {Object} teritories Teritories's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Teritories not found.
 */
router.put('/:id',
  body({
  code,
  name,
  stateId,
  state,
  }),
  update)

/**
 * @api {delete} /teritories/:id Delete teritories
 * @apiName DeleteTeritories
 * @apiGroup Teritories
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Teritories not found.
 */
router.delete('/:id',
  destroy)

export default router
