import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export UserAddress, { schema } from './model'

const router = new Router()
const { userId, addressType, building, street, address, pinCode, contact, city, state, country, isPrimary, contactPerson} = schema.tree

/**
 * @api {post} /userAddress Create user address
 * @apiName CreateUserAddress
 * @apiGroup UserAddress
 * @apiParam userId User address's userId.
 * @apiParam addressType User address's addressType.
 * @apiParam building User address's building.
 * @apiParam street User address's street.
 * @apiParam address User address's address.
 * @apiParam pinCode User address's pinCode.
 * @apiParam contact User address's contact.
 * @apiParam city User address's city.
 * @apiParam state User address's state.
 * @apiParam country User address's country.
 * @apiParam isPrimary User address's isPrimary.
 * @apiSuccess {Object} userAddress User address's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 User address not found.
 */
router.post('/',
  body({ userId, addressType, building, street, address, pinCode, contact, city, state, country, isPrimary, contactPerson }),
  create)

/**
 * @api {get} /userAddress Retrieve user addresses
 * @apiName RetrieveUserAddresses
 * @apiGroup UserAddress
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of user addresses.
 * @apiSuccess {Object[]} rows List of user addresses.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /userAddress/:id Retrieve user address
 * @apiName RetrieveUserAddress
 * @apiGroup UserAddress
 * @apiSuccess {Object} userAddress User address's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 User address not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /userAddress/:id Update user address
 * @apiName UpdateUserAddress
 * @apiGroup UserAddress
 * @apiParam userId User address's userId.
 * @apiParam addressType User address's addressType.
 * @apiParam building User address's building.
 * @apiParam street User address's street.
 * @apiParam address User address's address.
 * @apiParam pinCode User address's pinCode.
 * @apiParam contact User address's contact.
 * @apiParam city User address's city.
 * @apiParam state User address's state.
 * @apiParam country User address's country.
 * @apiParam isPrimary User address's isPrimary.
 * @apiSuccess {Object} userAddress User address's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 User address not found.
 */
router.put('/:id',
  body({ userId, addressType, building, street, address, pinCode, contact, city, state, country, isPrimary, contactPerson }),
  update)

/**
 * @api {delete} /userAddress/:id Delete user address
 * @apiName DeleteUserAddress
 * @apiGroup UserAddress
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 User address not found.
 */
router.delete('/:id',
  destroy)

export default router
