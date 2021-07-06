import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export TenderTypes, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /tenderTypes Create tender types
 * @apiName CreateTenderTypes
 * @apiGroup TenderTypes
 * @apiParam code Tender types's code.
 * @apiParam description Tender types's description.
 * @apiSuccess {Object} tenderTypes Tender types's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Tender types not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /tenderTypes Retrieve tender types
 * @apiName RetrieveTenderTypes
 * @apiGroup TenderTypes
 * @apiUse listParams
 * @apiSuccess {Object[]} tenderTypes List of tender types.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /tenderTypes/:id Retrieve tender types
 * @apiName RetrieveTenderTypes
 * @apiGroup TenderTypes
 * @apiSuccess {Object} tenderTypes Tender types's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Tender types not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /tenderTypes/:id Update tender types
 * @apiName UpdateTenderTypes
 * @apiGroup TenderTypes
 * @apiParam code Tender types's code.
 * @apiParam description Tender types's description.
 * @apiSuccess {Object} tenderTypes Tender types's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Tender types not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /tenderTypes/:id Delete tender types
 * @apiName DeleteTenderTypes
 * @apiGroup TenderTypes
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Tender types not found.
 */
router.delete('/:id',
  destroy)

export default router
