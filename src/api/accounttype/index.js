import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Accounttype, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /accounttype Create accounttype
 * @apiName CreateAccounttype
 * @apiGroup Accounttype
 * @apiParam code Accounttype's code.
 * @apiParam description Accounttype's description.
 * @apiSuccess {Object} accounttype Accounttype's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Accounttype not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /accounttype Retrieve accounttypes
 * @apiName RetrieveAccounttypes
 * @apiGroup Accounttype
 * @apiUse listParams
 * @apiSuccess {Object[]} accounttypes List of accounttypes.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /accounttype/:id Retrieve accounttype
 * @apiName RetrieveAccounttype
 * @apiGroup Accounttype
 * @apiSuccess {Object} accounttype Accounttype's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Accounttype not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /accounttype/:id Update accounttype
 * @apiName UpdateAccounttype
 * @apiGroup Accounttype
 * @apiParam code Accounttype's code.
 * @apiParam description Accounttype's description.
 * @apiSuccess {Object} accounttype Accounttype's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Accounttype not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /accounttype/:id Delete accounttype
 * @apiName DeleteAccounttype
 * @apiGroup Accounttype
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Accounttype not found.
 */
router.delete('/:id',
  destroy)

export default router
