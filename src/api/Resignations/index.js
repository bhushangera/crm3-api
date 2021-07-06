import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Resignations, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /Resignations Create resignations
 * @apiName CreateResignations
 * @apiGroup Resignations
 * @apiParam code Resignations's code.
 * @apiParam description Resignations's description.
 * @apiSuccess {Object} resignations Resignations's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Resignations not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /Resignations Retrieve resignations
 * @apiName RetrieveResignations
 * @apiGroup Resignations
 * @apiUse listParams
 * @apiSuccess {Object[]} resignations List of resignations.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /Resignations/:id Retrieve resignations
 * @apiName RetrieveResignations
 * @apiGroup Resignations
 * @apiSuccess {Object} resignations Resignations's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Resignations not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /Resignations/:id Update resignations
 * @apiName UpdateResignations
 * @apiGroup Resignations
 * @apiParam code Resignations's code.
 * @apiParam description Resignations's description.
 * @apiSuccess {Object} resignations Resignations's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Resignations not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /Resignations/:id Delete resignations
 * @apiName DeleteResignations
 * @apiGroup Resignations
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Resignations not found.
 */
router.delete('/:id',
  destroy)

export default router
