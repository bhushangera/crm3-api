import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export ProjectCategories, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /ProjectCategories Create project categories
 * @apiName CreateProjectCategories
 * @apiGroup ProjectCategories
 * @apiParam code Project categories's code.
 * @apiParam description Project categories's description.
 * @apiSuccess {Object} projectCategories Project categories's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Project categories not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /ProjectCategories Retrieve project categories
 * @apiName RetrieveProjectCategories
 * @apiGroup ProjectCategories
 * @apiUse listParams
 * @apiSuccess {Object[]} projectCategories List of project categories.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /ProjectCategories/:id Retrieve project categories
 * @apiName RetrieveProjectCategories
 * @apiGroup ProjectCategories
 * @apiSuccess {Object} projectCategories Project categories's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Project categories not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /ProjectCategories/:id Update project categories
 * @apiName UpdateProjectCategories
 * @apiGroup ProjectCategories
 * @apiParam code Project categories's code.
 * @apiParam description Project categories's description.
 * @apiSuccess {Object} projectCategories Project categories's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Project categories not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /ProjectCategories/:id Delete project categories
 * @apiName DeleteProjectCategories
 * @apiGroup ProjectCategories
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Project categories not found.
 */
router.delete('/:id',
  destroy)

export default router
