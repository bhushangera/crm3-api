import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Projects, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /Projects Create projects
 * @apiName CreateProjects
 * @apiGroup Projects
 * @apiParam code Projects's code.
 * @apiParam description Projects's description.
 * @apiSuccess {Object} projects Projects's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Projects not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /Projects Retrieve projects
 * @apiName RetrieveProjects
 * @apiGroup Projects
 * @apiUse listParams
 * @apiSuccess {Object[]} projects List of projects.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /Projects/:id Retrieve projects
 * @apiName RetrieveProjects
 * @apiGroup Projects
 * @apiSuccess {Object} projects Projects's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Projects not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /Projects/:id Update projects
 * @apiName UpdateProjects
 * @apiGroup Projects
 * @apiParam code Projects's code.
 * @apiParam description Projects's description.
 * @apiSuccess {Object} projects Projects's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Projects not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /Projects/:id Delete projects
 * @apiName DeleteProjects
 * @apiGroup Projects
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Projects not found.
 */
router.delete('/:id',
  destroy)

export default router
