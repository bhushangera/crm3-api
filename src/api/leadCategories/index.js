import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export LeadCategories, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /leadCategories Create lead categories
 * @apiName CreateLeadCategories
 * @apiGroup LeadCategories
 * @apiParam code Lead categories's code.
 * @apiParam description Lead categories's description.
 * @apiSuccess {Object} leadCategories Lead categories's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Lead categories not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /leadCategories Retrieve lead categories
 * @apiName RetrieveLeadCategories
 * @apiGroup LeadCategories
 * @apiUse listParams
 * @apiSuccess {Object[]} leadCategories List of lead categories.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /leadCategories/:id Retrieve lead categories
 * @apiName RetrieveLeadCategories
 * @apiGroup LeadCategories
 * @apiSuccess {Object} leadCategories Lead categories's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Lead categories not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /leadCategories/:id Update lead categories
 * @apiName UpdateLeadCategories
 * @apiGroup LeadCategories
 * @apiParam code Lead categories's code.
 * @apiParam description Lead categories's description.
 * @apiSuccess {Object} leadCategories Lead categories's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Lead categories not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /leadCategories/:id Delete lead categories
 * @apiName DeleteLeadCategories
 * @apiGroup LeadCategories
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Lead categories not found.
 */
router.delete('/:id',
  destroy)

export default router
