import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export PiCivil, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /piCivil Create pi civil
 * @apiName CreatePiCivil
 * @apiGroup PiCivil
 * @apiParam code Pi civil's code.
 * @apiParam description Pi civil's description.
 * @apiSuccess {Object} piCivil Pi civil's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Pi civil not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /piCivil Retrieve pi civils
 * @apiName RetrievePiCivils
 * @apiGroup PiCivil
 * @apiUse listParams
 * @apiSuccess {Object[]} piCivils List of pi civils.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /piCivil/:id Retrieve pi civil
 * @apiName RetrievePiCivil
 * @apiGroup PiCivil
 * @apiSuccess {Object} piCivil Pi civil's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Pi civil not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /piCivil/:id Update pi civil
 * @apiName UpdatePiCivil
 * @apiGroup PiCivil
 * @apiParam code Pi civil's code.
 * @apiParam description Pi civil's description.
 * @apiSuccess {Object} piCivil Pi civil's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Pi civil not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /piCivil/:id Delete pi civil
 * @apiName DeletePiCivil
 * @apiGroup PiCivil
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Pi civil not found.
 */
router.delete('/:id',
  destroy)

export default router
