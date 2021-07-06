import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export ProjectMilestomes, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /ProjectMilestomes Create project milestomes
 * @apiName CreateProjectMilestomes
 * @apiGroup ProjectMilestomes
 * @apiParam code Project milestomes's code.
 * @apiParam description Project milestomes's description.
 * @apiSuccess {Object} projectMilestomes Project milestomes's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Project milestomes not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /ProjectMilestomes Retrieve project milestomes
 * @apiName RetrieveProjectMilestomes
 * @apiGroup ProjectMilestomes
 * @apiUse listParams
 * @apiSuccess {Object[]} projectMilestomes List of project milestomes.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /ProjectMilestomes/:id Retrieve project milestomes
 * @apiName RetrieveProjectMilestomes
 * @apiGroup ProjectMilestomes
 * @apiSuccess {Object} projectMilestomes Project milestomes's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Project milestomes not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /ProjectMilestomes/:id Update project milestomes
 * @apiName UpdateProjectMilestomes
 * @apiGroup ProjectMilestomes
 * @apiParam code Project milestomes's code.
 * @apiParam description Project milestomes's description.
 * @apiSuccess {Object} projectMilestomes Project milestomes's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Project milestomes not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /ProjectMilestomes/:id Delete project milestomes
 * @apiName DeleteProjectMilestomes
 * @apiGroup ProjectMilestomes
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Project milestomes not found.
 */
router.delete('/:id',
  destroy)

export default router
