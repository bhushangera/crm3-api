import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export OverTimeTypes, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /OverTimeTypes Create over time types
 * @apiName CreateOverTimeTypes
 * @apiGroup OverTimeTypes
 * @apiParam code Over time types's code.
 * @apiParam description Over time types's description.
 * @apiSuccess {Object} overTimeTypes Over time types's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Over time types not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /OverTimeTypes Retrieve over time types
 * @apiName RetrieveOverTimeTypes
 * @apiGroup OverTimeTypes
 * @apiUse listParams
 * @apiSuccess {Object[]} overTimeTypes List of over time types.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /OverTimeTypes/:id Retrieve over time types
 * @apiName RetrieveOverTimeTypes
 * @apiGroup OverTimeTypes
 * @apiSuccess {Object} overTimeTypes Over time types's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Over time types not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /OverTimeTypes/:id Update over time types
 * @apiName UpdateOverTimeTypes
 * @apiGroup OverTimeTypes
 * @apiParam code Over time types's code.
 * @apiParam description Over time types's description.
 * @apiSuccess {Object} overTimeTypes Over time types's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Over time types not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /OverTimeTypes/:id Delete over time types
 * @apiName DeleteOverTimeTypes
 * @apiGroup OverTimeTypes
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Over time types not found.
 */
router.delete('/:id',
  destroy)

export default router
