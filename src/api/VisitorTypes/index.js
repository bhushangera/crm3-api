import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export VisitorTypes, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /VisitorTypes Create visitor types
 * @apiName CreateVisitorTypes
 * @apiGroup VisitorTypes
 * @apiParam code Visitor types's code.
 * @apiParam description Visitor types's description.
 * @apiSuccess {Object} visitorTypes Visitor types's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Visitor types not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /VisitorTypes Retrieve visitor types
 * @apiName RetrieveVisitorTypes
 * @apiGroup VisitorTypes
 * @apiUse listParams
 * @apiSuccess {Object[]} visitorTypes List of visitor types.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /VisitorTypes/:id Retrieve visitor types
 * @apiName RetrieveVisitorTypes
 * @apiGroup VisitorTypes
 * @apiSuccess {Object} visitorTypes Visitor types's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Visitor types not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /VisitorTypes/:id Update visitor types
 * @apiName UpdateVisitorTypes
 * @apiGroup VisitorTypes
 * @apiParam code Visitor types's code.
 * @apiParam description Visitor types's description.
 * @apiSuccess {Object} visitorTypes Visitor types's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Visitor types not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /VisitorTypes/:id Delete visitor types
 * @apiName DeleteVisitorTypes
 * @apiGroup VisitorTypes
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Visitor types not found.
 */
router.delete('/:id',
  destroy)

export default router
