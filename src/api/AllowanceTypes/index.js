import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export AllowanceTypes, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /AllowanceTypes Create allowance types
 * @apiName CreateAllowanceTypes
 * @apiGroup AllowanceTypes
 * @apiParam code Allowance types's code.
 * @apiParam description Allowance types's description.
 * @apiSuccess {Object} allowanceTypes Allowance types's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Allowance types not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /AllowanceTypes Retrieve allowance types
 * @apiName RetrieveAllowanceTypes
 * @apiGroup AllowanceTypes
 * @apiUse listParams
 * @apiSuccess {Object[]} allowanceTypes List of allowance types.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /AllowanceTypes/:id Retrieve allowance types
 * @apiName RetrieveAllowanceTypes
 * @apiGroup AllowanceTypes
 * @apiSuccess {Object} allowanceTypes Allowance types's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Allowance types not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /AllowanceTypes/:id Update allowance types
 * @apiName UpdateAllowanceTypes
 * @apiGroup AllowanceTypes
 * @apiParam code Allowance types's code.
 * @apiParam description Allowance types's description.
 * @apiSuccess {Object} allowanceTypes Allowance types's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Allowance types not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /AllowanceTypes/:id Delete allowance types
 * @apiName DeleteAllowanceTypes
 * @apiGroup AllowanceTypes
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Allowance types not found.
 */
router.delete('/:id',
  destroy)

export default router
