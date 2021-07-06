import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export LeadStatusCodes, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /leadStatusCodes Create lead status codes
 * @apiName CreateLeadStatusCodes
 * @apiGroup LeadStatusCodes
 * @apiParam code Lead status codes's code.
 * @apiParam description Lead status codes's description.
 * @apiSuccess {Object} leadStatusCodes Lead status codes's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Lead status codes not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /leadStatusCodes Retrieve lead status codes
 * @apiName RetrieveLeadStatusCodes
 * @apiGroup LeadStatusCodes
 * @apiUse listParams
 * @apiSuccess {Object[]} leadStatusCodes List of lead status codes.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /leadStatusCodes/:id Retrieve lead status codes
 * @apiName RetrieveLeadStatusCodes
 * @apiGroup LeadStatusCodes
 * @apiSuccess {Object} leadStatusCodes Lead status codes's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Lead status codes not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /leadStatusCodes/:id Update lead status codes
 * @apiName UpdateLeadStatusCodes
 * @apiGroup LeadStatusCodes
 * @apiParam code Lead status codes's code.
 * @apiParam description Lead status codes's description.
 * @apiSuccess {Object} leadStatusCodes Lead status codes's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Lead status codes not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /leadStatusCodes/:id Delete lead status codes
 * @apiName DeleteLeadStatusCodes
 * @apiGroup LeadStatusCodes
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Lead status codes not found.
 */
router.delete('/:id',
  destroy)

export default router
