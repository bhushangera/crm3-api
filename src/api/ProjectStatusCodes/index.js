import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export ProjectStatusCodes, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /ProjectStatusCodes Create project status codes
 * @apiName CreateProjectStatusCodes
 * @apiGroup ProjectStatusCodes
 * @apiParam code Project status codes's code.
 * @apiParam description Project status codes's description.
 * @apiSuccess {Object} projectStatusCodes Project status codes's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Project status codes not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /ProjectStatusCodes Retrieve project status codes
 * @apiName RetrieveProjectStatusCodes
 * @apiGroup ProjectStatusCodes
 * @apiUse listParams
 * @apiSuccess {Object[]} projectStatusCodes List of project status codes.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /ProjectStatusCodes/:id Retrieve project status codes
 * @apiName RetrieveProjectStatusCodes
 * @apiGroup ProjectStatusCodes
 * @apiSuccess {Object} projectStatusCodes Project status codes's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Project status codes not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /ProjectStatusCodes/:id Update project status codes
 * @apiName UpdateProjectStatusCodes
 * @apiGroup ProjectStatusCodes
 * @apiParam code Project status codes's code.
 * @apiParam description Project status codes's description.
 * @apiSuccess {Object} projectStatusCodes Project status codes's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Project status codes not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /ProjectStatusCodes/:id Delete project status codes
 * @apiName DeleteProjectStatusCodes
 * @apiGroup ProjectStatusCodes
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Project status codes not found.
 */
router.delete('/:id',
  destroy)

export default router
