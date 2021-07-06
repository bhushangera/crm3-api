import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Postal, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /Postal Create postal
 * @apiName CreatePostal
 * @apiGroup Postal
 * @apiParam code Postal's code.
 * @apiParam description Postal's description.
 * @apiSuccess {Object} postal Postal's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Postal not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /Postal Retrieve postals
 * @apiName RetrievePostals
 * @apiGroup Postal
 * @apiUse listParams
 * @apiSuccess {Object[]} postals List of postals.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /Postal/:id Retrieve postal
 * @apiName RetrievePostal
 * @apiGroup Postal
 * @apiSuccess {Object} postal Postal's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Postal not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /Postal/:id Update postal
 * @apiName UpdatePostal
 * @apiGroup Postal
 * @apiParam code Postal's code.
 * @apiParam description Postal's description.
 * @apiSuccess {Object} postal Postal's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Postal not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /Postal/:id Delete postal
 * @apiName DeletePostal
 * @apiGroup Postal
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Postal not found.
 */
router.delete('/:id',
  destroy)

export default router
