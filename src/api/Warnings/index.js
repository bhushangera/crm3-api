import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Warnings, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /Warnings Create warnings
 * @apiName CreateWarnings
 * @apiGroup Warnings
 * @apiParam code Warnings's code.
 * @apiParam description Warnings's description.
 * @apiSuccess {Object} warnings Warnings's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Warnings not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /Warnings Retrieve warnings
 * @apiName RetrieveWarnings
 * @apiGroup Warnings
 * @apiUse listParams
 * @apiSuccess {Object[]} warnings List of warnings.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /Warnings/:id Retrieve warnings
 * @apiName RetrieveWarnings
 * @apiGroup Warnings
 * @apiSuccess {Object} warnings Warnings's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Warnings not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /Warnings/:id Update warnings
 * @apiName UpdateWarnings
 * @apiGroup Warnings
 * @apiParam code Warnings's code.
 * @apiParam description Warnings's description.
 * @apiSuccess {Object} warnings Warnings's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Warnings not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /Warnings/:id Delete warnings
 * @apiName DeleteWarnings
 * @apiGroup Warnings
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Warnings not found.
 */
router.delete('/:id',
  destroy)

export default router
