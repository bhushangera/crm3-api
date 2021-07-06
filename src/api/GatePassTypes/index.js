import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export GatePassTypes, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /GatePassTypes Create gate pass types
 * @apiName CreateGatePassTypes
 * @apiGroup GatePassTypes
 * @apiParam code Gate pass types's code.
 * @apiParam description Gate pass types's description.
 * @apiSuccess {Object} gatePassTypes Gate pass types's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Gate pass types not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /GatePassTypes Retrieve gate pass types
 * @apiName RetrieveGatePassTypes
 * @apiGroup GatePassTypes
 * @apiUse listParams
 * @apiSuccess {Object[]} gatePassTypes List of gate pass types.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /GatePassTypes/:id Retrieve gate pass types
 * @apiName RetrieveGatePassTypes
 * @apiGroup GatePassTypes
 * @apiSuccess {Object} gatePassTypes Gate pass types's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Gate pass types not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /GatePassTypes/:id Update gate pass types
 * @apiName UpdateGatePassTypes
 * @apiGroup GatePassTypes
 * @apiParam code Gate pass types's code.
 * @apiParam description Gate pass types's description.
 * @apiSuccess {Object} gatePassTypes Gate pass types's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Gate pass types not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /GatePassTypes/:id Delete gate pass types
 * @apiName DeleteGatePassTypes
 * @apiGroup GatePassTypes
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Gate pass types not found.
 */
router.delete('/:id',
  destroy)

export default router
