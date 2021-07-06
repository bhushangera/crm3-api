import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Travels, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /Travels Create travels
 * @apiName CreateTravels
 * @apiGroup Travels
 * @apiParam code Travels's code.
 * @apiParam description Travels's description.
 * @apiSuccess {Object} travels Travels's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Travels not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /Travels Retrieve travels
 * @apiName RetrieveTravels
 * @apiGroup Travels
 * @apiUse listParams
 * @apiSuccess {Object[]} travels List of travels.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /Travels/:id Retrieve travels
 * @apiName RetrieveTravels
 * @apiGroup Travels
 * @apiSuccess {Object} travels Travels's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Travels not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /Travels/:id Update travels
 * @apiName UpdateTravels
 * @apiGroup Travels
 * @apiParam code Travels's code.
 * @apiParam description Travels's description.
 * @apiSuccess {Object} travels Travels's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Travels not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /Travels/:id Delete travels
 * @apiName DeleteTravels
 * @apiGroup Travels
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Travels not found.
 */
router.delete('/:id',
  destroy)

export default router
