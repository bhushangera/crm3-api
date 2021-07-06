import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export PiFurniture, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /piFurniture Create pi furniture
 * @apiName CreatePiFurniture
 * @apiGroup PiFurniture
 * @apiParam code Pi furniture's code.
 * @apiParam description Pi furniture's description.
 * @apiSuccess {Object} piFurniture Pi furniture's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Pi furniture not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /piFurniture Retrieve pi furnitures
 * @apiName RetrievePiFurnitures
 * @apiGroup PiFurniture
 * @apiUse listParams
 * @apiSuccess {Object[]} piFurnitures List of pi furnitures.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /piFurniture/:id Retrieve pi furniture
 * @apiName RetrievePiFurniture
 * @apiGroup PiFurniture
 * @apiSuccess {Object} piFurniture Pi furniture's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Pi furniture not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /piFurniture/:id Update pi furniture
 * @apiName UpdatePiFurniture
 * @apiGroup PiFurniture
 * @apiParam code Pi furniture's code.
 * @apiParam description Pi furniture's description.
 * @apiSuccess {Object} piFurniture Pi furniture's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Pi furniture not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /piFurniture/:id Delete pi furniture
 * @apiName DeletePiFurniture
 * @apiGroup PiFurniture
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Pi furniture not found.
 */
router.delete('/:id',
  destroy)

export default router
