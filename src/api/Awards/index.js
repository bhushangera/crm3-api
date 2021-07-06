import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Awards, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /Awards Create awards
 * @apiName CreateAwards
 * @apiGroup Awards
 * @apiParam code Awards's code.
 * @apiParam description Awards's description.
 * @apiSuccess {Object} awards Awards's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Awards not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /Awards Retrieve awards
 * @apiName RetrieveAwards
 * @apiGroup Awards
 * @apiUse listParams
 * @apiSuccess {Object[]} awards List of awards.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /Awards/:id Retrieve awards
 * @apiName RetrieveAwards
 * @apiGroup Awards
 * @apiSuccess {Object} awards Awards's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Awards not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /Awards/:id Update awards
 * @apiName UpdateAwards
 * @apiGroup Awards
 * @apiParam code Awards's code.
 * @apiParam description Awards's description.
 * @apiSuccess {Object} awards Awards's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Awards not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /Awards/:id Delete awards
 * @apiName DeleteAwards
 * @apiGroup Awards
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Awards not found.
 */
router.delete('/:id',
  destroy)

export default router
