import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Accountingdimensions, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /accountingdimensions Create accountingdimensions
 * @apiName CreateAccountingdimensions
 * @apiGroup Accountingdimensions
 * @apiParam code Accountingdimensions's code.
 * @apiParam description Accountingdimensions's description.
 * @apiSuccess {Object} accountingdimensions Accountingdimensions's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Accountingdimensions not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /accountingdimensions Retrieve accountingdimensions
 * @apiName RetrieveAccountingdimensions
 * @apiGroup Accountingdimensions
 * @apiUse listParams
 * @apiSuccess {Object[]} accountingdimensions List of accountingdimensions.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /accountingdimensions/:id Retrieve accountingdimensions
 * @apiName RetrieveAccountingdimensions
 * @apiGroup Accountingdimensions
 * @apiSuccess {Object} accountingdimensions Accountingdimensions's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Accountingdimensions not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /accountingdimensions/:id Update accountingdimensions
 * @apiName UpdateAccountingdimensions
 * @apiGroup Accountingdimensions
 * @apiParam code Accountingdimensions's code.
 * @apiParam description Accountingdimensions's description.
 * @apiSuccess {Object} accountingdimensions Accountingdimensions's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Accountingdimensions not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /accountingdimensions/:id Delete accountingdimensions
 * @apiName DeleteAccountingdimensions
 * @apiGroup Accountingdimensions
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Accountingdimensions not found.
 */
router.delete('/:id',
  destroy)

export default router
