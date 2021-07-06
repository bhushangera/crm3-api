import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export UserTokens, { schema } from './model'

const router = new Router()
const { userId, token, password, email } = schema.tree

/**
 * @api {post} /userTokens Create user tokens
 * @apiName CreateUserTokens
 * @apiGroup UserTokens
 * @apiParam userId User tokens's userId.
 * @apiParam token User tokens's token.
 * @apiSuccess {Object} userTokens User tokens's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 User tokens not found.
 */
router.post('/',
  body({ userId, token, password, email }),
  create)

/**
 * @api {get} /userTokens Retrieve user tokens
 * @apiName RetrieveUserTokens
 * @apiGroup UserTokens
 * @apiUse listParams
 * @apiSuccess {Object[]} userTokens List of user tokens.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /userTokens/:id Retrieve user tokens
 * @apiName RetrieveUserTokens
 * @apiGroup UserTokens
 * @apiSuccess {Object} userTokens User tokens's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 User tokens not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /userTokens/:id Update user tokens
 * @apiName UpdateUserTokens
 * @apiGroup UserTokens
 * @apiParam userId User tokens's userId.
 * @apiParam token User tokens's token.
 * @apiSuccess {Object} userTokens User tokens's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 User tokens not found.
 */
router.put('/:id',
  body({ userId, token, password, email }),
  update)

/**
 * @api {delete} /userTokens/:id Delete user tokens
 * @apiName DeleteUserTokens
 * @apiGroup UserTokens
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 User tokens not found.
 */
router.delete('/:id',
  destroy)

export default router
