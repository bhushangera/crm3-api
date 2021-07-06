import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Goals, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /Goals Create goals
 * @apiName CreateGoals
 * @apiGroup Goals
 * @apiParam code Goals's code.
 * @apiParam description Goals's description.
 * @apiSuccess {Object} goals Goals's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Goals not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /Goals Retrieve goals
 * @apiName RetrieveGoals
 * @apiGroup Goals
 * @apiUse listParams
 * @apiSuccess {Object[]} goals List of goals.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /Goals/:id Retrieve goals
 * @apiName RetrieveGoals
 * @apiGroup Goals
 * @apiSuccess {Object} goals Goals's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Goals not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /Goals/:id Update goals
 * @apiName UpdateGoals
 * @apiGroup Goals
 * @apiParam code Goals's code.
 * @apiParam description Goals's description.
 * @apiSuccess {Object} goals Goals's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Goals not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /Goals/:id Delete goals
 * @apiName DeleteGoals
 * @apiGroup Goals
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Goals not found.
 */
router.delete('/:id',
  destroy)

export default router
