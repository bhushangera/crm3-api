import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Trainings, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /Trainings Create trainings
 * @apiName CreateTrainings
 * @apiGroup Trainings
 * @apiParam code Trainings's code.
 * @apiParam description Trainings's description.
 * @apiSuccess {Object} trainings Trainings's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Trainings not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /Trainings Retrieve trainings
 * @apiName RetrieveTrainings
 * @apiGroup Trainings
 * @apiUse listParams
 * @apiSuccess {Object[]} trainings List of trainings.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /Trainings/:id Retrieve trainings
 * @apiName RetrieveTrainings
 * @apiGroup Trainings
 * @apiSuccess {Object} trainings Trainings's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Trainings not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /Trainings/:id Update trainings
 * @apiName UpdateTrainings
 * @apiGroup Trainings
 * @apiParam code Trainings's code.
 * @apiParam description Trainings's description.
 * @apiSuccess {Object} trainings Trainings's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Trainings not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /Trainings/:id Delete trainings
 * @apiName DeleteTrainings
 * @apiGroup Trainings
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Trainings not found.
 */
router.delete('/:id',
  destroy)

export default router
