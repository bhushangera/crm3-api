import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export PartCategories, { schema } from './model'

const router = new Router()
const { category, code } = schema.tree

/**
 * @api {post} /partCategories Create part categories
 * @apiName CreatePartCategories
 * @apiGroup PartCategories
 * @apiParam category Part categories's category.
 * @apiSuccess {Object} partCategories Part categories's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Part categories not found.
 */
router.post('/',
  body({ category, code }),
  create)

/**
 * @api {get} /partCategories Retrieve part categories
 * @apiName RetrievePartCategories
 * @apiGroup PartCategories
 * @apiUse listParams
 * @apiSuccess {Object[]} partCategories List of part categories.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /partCategories/:id Retrieve part categories
 * @apiName RetrievePartCategories
 * @apiGroup PartCategories
 * @apiSuccess {Object} partCategories Part categories's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Part categories not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /partCategories/:id Update part categories
 * @apiName UpdatePartCategories
 * @apiGroup PartCategories
 * @apiParam category Part categories's category.
 * @apiSuccess {Object} partCategories Part categories's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Part categories not found.
 */
router.put('/:id',
  body({ category,code }),
  update)

/**
 * @api {delete} /partCategories/:id Delete part categories
 * @apiName DeletePartCategories
 * @apiGroup PartCategories
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Part categories not found.
 */
router.delete('/:id',
  destroy)

export default router
