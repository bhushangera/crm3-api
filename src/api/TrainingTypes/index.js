import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export TrainingTypes, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /TrainingTypes Create training types
 * @apiName CreateTrainingTypes
 * @apiGroup TrainingTypes
 * @apiParam code Training types's code.
 * @apiParam description Training types's description.
 * @apiSuccess {Object} trainingTypes Training types's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Training types not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /TrainingTypes Retrieve training types
 * @apiName RetrieveTrainingTypes
 * @apiGroup TrainingTypes
 * @apiUse listParams
 * @apiSuccess {Object[]} trainingTypes List of training types.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /TrainingTypes/:id Retrieve training types
 * @apiName RetrieveTrainingTypes
 * @apiGroup TrainingTypes
 * @apiSuccess {Object} trainingTypes Training types's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Training types not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /TrainingTypes/:id Update training types
 * @apiName UpdateTrainingTypes
 * @apiGroup TrainingTypes
 * @apiParam code Training types's code.
 * @apiParam description Training types's description.
 * @apiSuccess {Object} trainingTypes Training types's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Training types not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /TrainingTypes/:id Delete training types
 * @apiName DeleteTrainingTypes
 * @apiGroup TrainingTypes
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Training types not found.
 */
router.delete('/:id',
  destroy)

export default router
