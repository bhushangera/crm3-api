import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export DealStatusTypes, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /dealStatusTypes Create deal status types
 * @apiName CreateDealStatusTypes
 * @apiGroup DealStatusTypes
 * @apiParam code Deal status types's code.
 * @apiParam description Deal status types's description.
 * @apiSuccess {Object} dealStatusTypes Deal status types's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Deal status types not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /dealStatusTypes Retrieve deal status types
 * @apiName RetrieveDealStatusTypes
 * @apiGroup DealStatusTypes
 * @apiUse listParams
 * @apiSuccess {Object[]} dealStatusTypes List of deal status types.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /dealStatusTypes/:id Retrieve deal status types
 * @apiName RetrieveDealStatusTypes
 * @apiGroup DealStatusTypes
 * @apiSuccess {Object} dealStatusTypes Deal status types's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Deal status types not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /dealStatusTypes/:id Update deal status types
 * @apiName UpdateDealStatusTypes
 * @apiGroup DealStatusTypes
 * @apiParam code Deal status types's code.
 * @apiParam description Deal status types's description.
 * @apiSuccess {Object} dealStatusTypes Deal status types's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Deal status types not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /dealStatusTypes/:id Delete deal status types
 * @apiName DeleteDealStatusTypes
 * @apiGroup DealStatusTypes
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Deal status types not found.
 */
router.delete('/:id',
  destroy)

export default router
