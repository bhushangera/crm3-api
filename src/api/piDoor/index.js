import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export PiDoor, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /piDoor Create pi door
 * @apiName CreatePiDoor
 * @apiGroup PiDoor
 * @apiParam code Pi door's code.
 * @apiParam description Pi door's description.
 * @apiSuccess {Object} piDoor Pi door's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Pi door not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /piDoor Retrieve pi doors
 * @apiName RetrievePiDoors
 * @apiGroup PiDoor
 * @apiUse listParams
 * @apiSuccess {Object[]} piDoors List of pi doors.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /piDoor/:id Retrieve pi door
 * @apiName RetrievePiDoor
 * @apiGroup PiDoor
 * @apiSuccess {Object} piDoor Pi door's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Pi door not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /piDoor/:id Update pi door
 * @apiName UpdatePiDoor
 * @apiGroup PiDoor
 * @apiParam code Pi door's code.
 * @apiParam description Pi door's description.
 * @apiSuccess {Object} piDoor Pi door's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Pi door not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /piDoor/:id Delete pi door
 * @apiName DeletePiDoor
 * @apiGroup PiDoor
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Pi door not found.
 */
router.delete('/:id',
  destroy)

export default router
