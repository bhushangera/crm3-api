import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export GoalTypes, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /GoalTypes Create goal types
 * @apiName CreateGoalTypes
 * @apiGroup GoalTypes
 * @apiParam code Goal types's code.
 * @apiParam description Goal types's description.
 * @apiSuccess {Object} goalTypes Goal types's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Goal types not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /GoalTypes Retrieve goal types
 * @apiName RetrieveGoalTypes
 * @apiGroup GoalTypes
 * @apiUse listParams
 * @apiSuccess {Object[]} goalTypes List of goal types.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /GoalTypes/:id Retrieve goal types
 * @apiName RetrieveGoalTypes
 * @apiGroup GoalTypes
 * @apiSuccess {Object} goalTypes Goal types's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Goal types not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /GoalTypes/:id Update goal types
 * @apiName UpdateGoalTypes
 * @apiGroup GoalTypes
 * @apiParam code Goal types's code.
 * @apiParam description Goal types's description.
 * @apiSuccess {Object} goalTypes Goal types's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Goal types not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /GoalTypes/:id Delete goal types
 * @apiName DeleteGoalTypes
 * @apiGroup GoalTypes
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Goal types not found.
 */
router.delete('/:id',
  destroy)

export default router
