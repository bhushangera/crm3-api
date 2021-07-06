import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export GatePass, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /GatePass Create gate pass
 * @apiName CreateGatePass
 * @apiGroup GatePass
 * @apiParam code Gate pass's code.
 * @apiParam description Gate pass's description.
 * @apiSuccess {Object} gatePass Gate pass's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Gate pass not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /GatePass Retrieve gate passes
 * @apiName RetrieveGatePasses
 * @apiGroup GatePass
 * @apiUse listParams
 * @apiSuccess {Object[]} gatePasses List of gate passes.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /GatePass/:id Retrieve gate pass
 * @apiName RetrieveGatePass
 * @apiGroup GatePass
 * @apiSuccess {Object} gatePass Gate pass's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Gate pass not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /GatePass/:id Update gate pass
 * @apiName UpdateGatePass
 * @apiGroup GatePass
 * @apiParam code Gate pass's code.
 * @apiParam description Gate pass's description.
 * @apiSuccess {Object} gatePass Gate pass's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Gate pass not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /GatePass/:id Delete gate pass
 * @apiName DeleteGatePass
 * @apiGroup GatePass
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Gate pass not found.
 */
router.delete('/:id',
  destroy)

export default router
