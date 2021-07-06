import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export CategoryReasons, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /categoryReasons Create category reasons
 * @apiName CreateCategoryReasons
 * @apiGroup CategoryReasons
 * @apiParam code Category reasons's code.
 * @apiParam description Category reasons's description.
 * @apiSuccess {Object} categoryReasons Category reasons's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Category reasons not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /categoryReasons Retrieve category reasons
 * @apiName RetrieveCategoryReasons
 * @apiGroup CategoryReasons
 * @apiUse listParams
 * @apiSuccess {Object[]} categoryReasons List of category reasons.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /categoryReasons/:id Retrieve category reasons
 * @apiName RetrieveCategoryReasons
 * @apiGroup CategoryReasons
 * @apiSuccess {Object} categoryReasons Category reasons's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Category reasons not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /categoryReasons/:id Update category reasons
 * @apiName UpdateCategoryReasons
 * @apiGroup CategoryReasons
 * @apiParam code Category reasons's code.
 * @apiParam description Category reasons's description.
 * @apiSuccess {Object} categoryReasons Category reasons's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Category reasons not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /categoryReasons/:id Delete category reasons
 * @apiName DeleteCategoryReasons
 * @apiGroup CategoryReasons
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Category reasons not found.
 */
router.delete('/:id',
  destroy)

export default router
