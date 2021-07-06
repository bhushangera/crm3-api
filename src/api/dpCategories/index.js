import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export DpCategories, { schema } from './model'

const router = new Router()
const { category } = schema.tree

/**
 * @api {post} /dpCategories Create dp categories
 * @apiName CreateDpCategories
 * @apiGroup DpCategories
 * @apiParam category Dp categories's category.
 * @apiSuccess {Object} dpCategories Dp categories's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Dp categories not found.
 */
router.post('/',
  body({ category }),
  create)

/**
 * @api {get} /dpCategories Retrieve dp categories
 * @apiName RetrieveDpCategories
 * @apiGroup DpCategories
 * @apiUse listParams
 * @apiSuccess {Object[]} dpCategories List of dp categories.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /dpCategories/:id Retrieve dp categories
 * @apiName RetrieveDpCategories
 * @apiGroup DpCategories
 * @apiSuccess {Object} dpCategories Dp categories's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Dp categories not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /dpCategories/:id Update dp categories
 * @apiName UpdateDpCategories
 * @apiGroup DpCategories
 * @apiParam category Dp categories's category.
 * @apiSuccess {Object} dpCategories Dp categories's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Dp categories not found.
 */
router.put('/:id',
  body({ category }),
  update)

/**
 * @api {delete} /dpCategories/:id Delete dp categories
 * @apiName DeleteDpCategories
 * @apiGroup DpCategories
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Dp categories not found.
 */
router.delete('/:id',
  destroy)

export default router
