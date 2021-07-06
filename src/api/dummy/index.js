import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { token } from '../../services/passport'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Dummy, { schema } from './model'

const router = new Router()
const { first, second } = schema.tree

/**
 * @api {post} /dummy Create dummy
 * @apiName CreateDummy
 * @apiGroup Dummy
 * @apiPermission admin
 * @apiParam {String} access_token admin access token.
 * @apiParam first Dummy's first.
 * @apiParam second Dummy's second.
 * @apiSuccess {Object} dummy Dummy's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Dummy not found.
 * @apiError 401 admin access only.
 */
router.post('/',
  token({ required: true, roles: ['admin'] }),
  body({ first, second }),
  create)

/**
 * @api {get} /dummy Retrieve dummies
 * @apiName RetrieveDummies
 * @apiGroup Dummy
 * @apiPermission admin
 * @apiParam {String} access_token admin access token.
 * @apiUse listParams
 * @apiSuccess {Object[]} dummies List of dummies.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 401 admin access only.
 */
router.get('/',
  token({ required: true, roles: ['admin'] }),
  query(),
  index)

/**
 * @api {get} /dummy/:id Retrieve dummy
 * @apiName RetrieveDummy
 * @apiGroup Dummy
 * @apiPermission admin
 * @apiParam {String} access_token admin access token.
 * @apiSuccess {Object} dummy Dummy's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Dummy not found.
 * @apiError 401 admin access only.
 */
router.get('/:id',
  token({ required: true, roles: ['admin'] }),
  show)

/**
 * @api {put} /dummy/:id Update dummy
 * @apiName UpdateDummy
 * @apiGroup Dummy
 * @apiPermission admin
 * @apiParam {String} access_token admin access token.
 * @apiParam first Dummy's first.
 * @apiParam second Dummy's second.
 * @apiSuccess {Object} dummy Dummy's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Dummy not found.
 * @apiError 401 admin access only.
 */
router.put('/:id',
  token({ required: true, roles: ['admin'] }),
  body({ first, second }),
  update)

/**
 * @api {delete} /dummy/:id Delete dummy
 * @apiName DeleteDummy
 * @apiGroup Dummy
 * @apiPermission admin
 * @apiParam {String} access_token admin access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Dummy not found.
 * @apiError 401 admin access only.
 */
router.delete('/:id',
  token({ required: true, roles: ['admin'] }),
  destroy)

export default router
