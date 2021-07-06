import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export PiPanel, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /piPanel Create pi panel
 * @apiName CreatePiPanel
 * @apiGroup PiPanel
 * @apiParam code Pi panel's code.
 * @apiParam description Pi panel's description.
 * @apiSuccess {Object} piPanel Pi panel's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Pi panel not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /piPanel Retrieve pi panels
 * @apiName RetrievePiPanels
 * @apiGroup PiPanel
 * @apiUse listParams
 * @apiSuccess {Object[]} piPanels List of pi panels.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /piPanel/:id Retrieve pi panel
 * @apiName RetrievePiPanel
 * @apiGroup PiPanel
 * @apiSuccess {Object} piPanel Pi panel's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Pi panel not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /piPanel/:id Update pi panel
 * @apiName UpdatePiPanel
 * @apiGroup PiPanel
 * @apiParam code Pi panel's code.
 * @apiParam description Pi panel's description.
 * @apiSuccess {Object} piPanel Pi panel's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Pi panel not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /piPanel/:id Delete pi panel
 * @apiName DeletePiPanel
 * @apiGroup PiPanel
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Pi panel not found.
 */
router.delete('/:id',
  destroy)

export default router
