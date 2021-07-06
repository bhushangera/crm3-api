import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Terminations, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /Terminations Create terminations
 * @apiName CreateTerminations
 * @apiGroup Terminations
 * @apiParam code Terminations's code.
 * @apiParam description Terminations's description.
 * @apiSuccess {Object} terminations Terminations's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Terminations not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /Terminations Retrieve terminations
 * @apiName RetrieveTerminations
 * @apiGroup Terminations
 * @apiUse listParams
 * @apiSuccess {Object[]} terminations List of terminations.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /Terminations/:id Retrieve terminations
 * @apiName RetrieveTerminations
 * @apiGroup Terminations
 * @apiSuccess {Object} terminations Terminations's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Terminations not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /Terminations/:id Update terminations
 * @apiName UpdateTerminations
 * @apiGroup Terminations
 * @apiParam code Terminations's code.
 * @apiParam description Terminations's description.
 * @apiSuccess {Object} terminations Terminations's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Terminations not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /Terminations/:id Delete terminations
 * @apiName DeleteTerminations
 * @apiGroup Terminations
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Terminations not found.
 */
router.delete('/:id',
  destroy)

export default router
