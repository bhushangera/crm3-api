import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Trainers, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /Trainers Create trainers
 * @apiName CreateTrainers
 * @apiGroup Trainers
 * @apiParam code Trainers's code.
 * @apiParam description Trainers's description.
 * @apiSuccess {Object} trainers Trainers's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Trainers not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /Trainers Retrieve trainers
 * @apiName RetrieveTrainers
 * @apiGroup Trainers
 * @apiUse listParams
 * @apiSuccess {Object[]} trainers List of trainers.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /Trainers/:id Retrieve trainers
 * @apiName RetrieveTrainers
 * @apiGroup Trainers
 * @apiSuccess {Object} trainers Trainers's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Trainers not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /Trainers/:id Update trainers
 * @apiName UpdateTrainers
 * @apiGroup Trainers
 * @apiParam code Trainers's code.
 * @apiParam description Trainers's description.
 * @apiSuccess {Object} trainers Trainers's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Trainers not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /Trainers/:id Delete trainers
 * @apiName DeleteTrainers
 * @apiGroup Trainers
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Trainers not found.
 */
router.delete('/:id',
  destroy)

export default router
