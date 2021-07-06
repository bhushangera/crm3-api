import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Account, { schema } from './model'

const router = new Router()
const { accountTypeId, accountType, code, description } = schema.tree

/**
 * @api {post} /account Create account
 * @apiName CreateAccount
 * @apiGroup Account
 * @apiParam accountTypeId Account's accountTypeId.
 * @apiParam accountType Account's accountType.
 * @apiParam code Account's code.
 * @apiParam description Account's description.
 * @apiSuccess {Object} account Account's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Account not found.
 */
router.post('/',
  body({ accountTypeId, accountType, code, description }),
  create)

/**
 * @api {get} /account Retrieve accounts
 * @apiName RetrieveAccounts
 * @apiGroup Account
 * @apiUse listParams
 * @apiSuccess {Object[]} accounts List of accounts.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /account/:id Retrieve account
 * @apiName RetrieveAccount
 * @apiGroup Account
 * @apiSuccess {Object} account Account's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Account not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /account/:id Update account
 * @apiName UpdateAccount
 * @apiGroup Account
 * @apiParam accountTypeId Account's accountTypeId.
 * @apiParam accountType Account's accountType.
 * @apiParam code Account's code.
 * @apiParam description Account's description.
 * @apiSuccess {Object} account Account's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Account not found.
 */
router.put('/:id',
  body({ accountTypeId, accountType, code, description }),
  update)

/**
 * @api {delete} /account/:id Delete account
 * @apiName DeleteAccount
 * @apiGroup Account
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Account not found.
 */
router.delete('/:id',
  destroy)

export default router
