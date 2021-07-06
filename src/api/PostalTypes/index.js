import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export PostalTypes, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /PostalTypes Create postal types
 * @apiName CreatePostalTypes
 * @apiGroup PostalTypes
 * @apiParam code Postal types's code.
 * @apiParam description Postal types's description.
 * @apiSuccess {Object} postalTypes Postal types's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Postal types not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /PostalTypes Retrieve postal types
 * @apiName RetrievePostalTypes
 * @apiGroup PostalTypes
 * @apiUse listParams
 * @apiSuccess {Object[]} postalTypes List of postal types.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /PostalTypes/:id Retrieve postal types
 * @apiName RetrievePostalTypes
 * @apiGroup PostalTypes
 * @apiSuccess {Object} postalTypes Postal types's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Postal types not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /PostalTypes/:id Update postal types
 * @apiName UpdatePostalTypes
 * @apiGroup PostalTypes
 * @apiParam code Postal types's code.
 * @apiParam description Postal types's description.
 * @apiSuccess {Object} postalTypes Postal types's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Postal types not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /PostalTypes/:id Delete postal types
 * @apiName DeletePostalTypes
 * @apiGroup PostalTypes
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Postal types not found.
 */
router.delete('/:id',
  destroy)

export default router
