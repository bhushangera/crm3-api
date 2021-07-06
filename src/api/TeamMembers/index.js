import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export TeamMembers, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /TeamMembers Create team members
 * @apiName CreateTeamMembers
 * @apiGroup TeamMembers
 * @apiParam code Team members's code.
 * @apiParam description Team members's description.
 * @apiSuccess {Object} teamMembers Team members's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Team members not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /TeamMembers Retrieve team members
 * @apiName RetrieveTeamMembers
 * @apiGroup TeamMembers
 * @apiUse listParams
 * @apiSuccess {Object[]} teamMembers List of team members.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /TeamMembers/:id Retrieve team members
 * @apiName RetrieveTeamMembers
 * @apiGroup TeamMembers
 * @apiSuccess {Object} teamMembers Team members's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Team members not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /TeamMembers/:id Update team members
 * @apiName UpdateTeamMembers
 * @apiGroup TeamMembers
 * @apiParam code Team members's code.
 * @apiParam description Team members's description.
 * @apiSuccess {Object} teamMembers Team members's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Team members not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /TeamMembers/:id Delete team members
 * @apiName DeleteTeamMembers
 * @apiGroup TeamMembers
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Team members not found.
 */
router.delete('/:id',
  destroy)

export default router
