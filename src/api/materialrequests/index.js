import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Materialrequests, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /materialrequests Create materialrequests
 * @apiName CreateMaterialrequests
 * @apiGroup Materialrequests
 * @apiParam code Materialrequests's code.
 * @apiParam description Materialrequests's description.
 * @apiSuccess {Object} materialrequests Materialrequests's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Materialrequests not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /materialrequests Retrieve materialrequests
 * @apiName RetrieveMaterialrequests
 * @apiGroup Materialrequests
 * @apiUse listParams
 * @apiSuccess {Object[]} materialrequests List of materialrequests.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /materialrequests/:id Retrieve materialrequests
 * @apiName RetrieveMaterialrequests
 * @apiGroup Materialrequests
 * @apiSuccess {Object} materialrequests Materialrequests's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Materialrequests not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /materialrequests/:id Update materialrequests
 * @apiName UpdateMaterialrequests
 * @apiGroup Materialrequests
 * @apiParam code Materialrequests's code.
 * @apiParam description Materialrequests's description.
 * @apiSuccess {Object} materialrequests Materialrequests's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Materialrequests not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /materialrequests/:id Delete materialrequests
 * @apiName DeleteMaterialrequests
 * @apiGroup Materialrequests
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Materialrequests not found.
 */
router.delete('/:id',
  destroy)

export default router
