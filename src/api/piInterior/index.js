import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export PiInterior, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /piInterior Create pi interior
 * @apiName CreatePiInterior
 * @apiGroup PiInterior
 * @apiParam code Pi interior's code.
 * @apiParam description Pi interior's description.
 * @apiSuccess {Object} piInterior Pi interior's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Pi interior not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /piInterior Retrieve pi interiors
 * @apiName RetrievePiInteriors
 * @apiGroup PiInterior
 * @apiUse listParams
 * @apiSuccess {Object[]} piInteriors List of pi interiors.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /piInterior/:id Retrieve pi interior
 * @apiName RetrievePiInterior
 * @apiGroup PiInterior
 * @apiSuccess {Object} piInterior Pi interior's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Pi interior not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /piInterior/:id Update pi interior
 * @apiName UpdatePiInterior
 * @apiGroup PiInterior
 * @apiParam code Pi interior's code.
 * @apiParam description Pi interior's description.
 * @apiSuccess {Object} piInterior Pi interior's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Pi interior not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /piInterior/:id Delete pi interior
 * @apiName DeletePiInterior
 * @apiGroup PiInterior
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Pi interior not found.
 */
router.delete('/:id',
  destroy)

export default router
