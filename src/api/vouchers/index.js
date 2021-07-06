import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Vouchers, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /vouchers Create vouchers
 * @apiName CreateVouchers
 * @apiGroup Vouchers
 * @apiParam code Vouchers's code.
 * @apiParam description Vouchers's description.
 * @apiSuccess {Object} vouchers Vouchers's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Vouchers not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /vouchers Retrieve vouchers
 * @apiName RetrieveVouchers
 * @apiGroup Vouchers
 * @apiUse listParams
 * @apiSuccess {Object[]} vouchers List of vouchers.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /vouchers/:id Retrieve vouchers
 * @apiName RetrieveVouchers
 * @apiGroup Vouchers
 * @apiSuccess {Object} vouchers Vouchers's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Vouchers not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /vouchers/:id Update vouchers
 * @apiName UpdateVouchers
 * @apiGroup Vouchers
 * @apiParam code Vouchers's code.
 * @apiParam description Vouchers's description.
 * @apiSuccess {Object} vouchers Vouchers's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Vouchers not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /vouchers/:id Delete vouchers
 * @apiName DeleteVouchers
 * @apiGroup Vouchers
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Vouchers not found.
 */
router.delete('/:id',
  destroy)

export default router
