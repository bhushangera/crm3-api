import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export PiModular, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /piModular Create pi modular
 * @apiName CreatePiModular
 * @apiGroup PiModular
 * @apiParam code Pi modular's code.
 * @apiParam description Pi modular's description.
 * @apiSuccess {Object} piModular Pi modular's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Pi modular not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /piModular Retrieve pi modulars
 * @apiName RetrievePiModulars
 * @apiGroup PiModular
 * @apiUse listParams
 * @apiSuccess {Object[]} piModulars List of pi modulars.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /piModular/:id Retrieve pi modular
 * @apiName RetrievePiModular
 * @apiGroup PiModular
 * @apiSuccess {Object} piModular Pi modular's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Pi modular not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /piModular/:id Update pi modular
 * @apiName UpdatePiModular
 * @apiGroup PiModular
 * @apiParam code Pi modular's code.
 * @apiParam description Pi modular's description.
 * @apiSuccess {Object} piModular Pi modular's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Pi modular not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /piModular/:id Delete pi modular
 * @apiName DeletePiModular
 * @apiGroup PiModular
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Pi modular not found.
 */
router.delete('/:id',
  destroy)

export default router
