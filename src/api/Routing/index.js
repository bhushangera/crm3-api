import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Routing, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /Routing Create routing
 * @apiName CreateRouting
 * @apiGroup Routing
 * @apiParam code Routing's code.
 * @apiParam description Routing's description.
 * @apiSuccess {Object} routing Routing's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Routing not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /Routing Retrieve routings
 * @apiName RetrieveRoutings
 * @apiGroup Routing
 * @apiUse listParams
 * @apiSuccess {Object[]} routings List of routings.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /Routing/:id Retrieve routing
 * @apiName RetrieveRouting
 * @apiGroup Routing
 * @apiSuccess {Object} routing Routing's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Routing not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /Routing/:id Update routing
 * @apiName UpdateRouting
 * @apiGroup Routing
 * @apiParam code Routing's code.
 * @apiParam description Routing's description.
 * @apiSuccess {Object} routing Routing's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Routing not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /Routing/:id Delete routing
 * @apiName DeleteRouting
 * @apiGroup Routing
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Routing not found.
 */
router.delete('/:id',
  destroy)

export default router
