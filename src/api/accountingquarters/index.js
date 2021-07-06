import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Accountingquarters, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /accountingquarters Create accountingquarters
 * @apiName CreateAccountingquarters
 * @apiGroup Accountingquarters
 * @apiParam code Accountingquarters's code.
 * @apiParam description Accountingquarters's description.
 * @apiSuccess {Object} accountingquarters Accountingquarters's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Accountingquarters not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /accountingquarters Retrieve accountingquarters
 * @apiName RetrieveAccountingquarters
 * @apiGroup Accountingquarters
 * @apiUse listParams
 * @apiSuccess {Object[]} accountingquarters List of accountingquarters.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /accountingquarters/:id Retrieve accountingquarters
 * @apiName RetrieveAccountingquarters
 * @apiGroup Accountingquarters
 * @apiSuccess {Object} accountingquarters Accountingquarters's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Accountingquarters not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /accountingquarters/:id Update accountingquarters
 * @apiName UpdateAccountingquarters
 * @apiGroup Accountingquarters
 * @apiParam code Accountingquarters's code.
 * @apiParam description Accountingquarters's description.
 * @apiSuccess {Object} accountingquarters Accountingquarters's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Accountingquarters not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /accountingquarters/:id Delete accountingquarters
 * @apiName DeleteAccountingquarters
 * @apiGroup Accountingquarters
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Accountingquarters not found.
 */
router.delete('/:id',
  destroy)

export default router
