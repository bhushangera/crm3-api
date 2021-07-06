import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export PageTags, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /pageTags Create page tags
 * @apiName CreatePageTags
 * @apiGroup PageTags
 * @apiParam code Page tags's code.
 * @apiParam description Page tags's description.
 * @apiSuccess {Object} pageTags Page tags's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Page tags not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /pageTags Retrieve page tags
 * @apiName RetrievePageTags
 * @apiGroup PageTags
 * @apiUse listParams
 * @apiSuccess {Object[]} pageTags List of page tags.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /pageTags/:id Retrieve page tags
 * @apiName RetrievePageTags
 * @apiGroup PageTags
 * @apiSuccess {Object} pageTags Page tags's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Page tags not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /pageTags/:id Update page tags
 * @apiName UpdatePageTags
 * @apiGroup PageTags
 * @apiParam code Page tags's code.
 * @apiParam description Page tags's description.
 * @apiSuccess {Object} pageTags Page tags's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Page tags not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /pageTags/:id Delete page tags
 * @apiName DeletePageTags
 * @apiGroup PageTags
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Page tags not found.
 */
router.delete('/:id',
  destroy)

export default router
