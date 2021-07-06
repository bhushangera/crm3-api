import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Contactus, { schema } from './model'

const router = new Router()
const { name, email, subject, telephone, message, read } = schema.tree

/**
 * @api {post} /contactus Create contactus
 * @apiName CreateContactus
 * @apiGroup Contactus
 * @apiParam name Contactus's name.
 * @apiParam email Contactus's email.
 * @apiParam subject Contactus's subject.
 * @apiParam telephone Contactus's telephone.
 * @apiParam message Contactus's message.
 * @apiSuccess {Object} contactus Contactus's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Contactus not found.
 */
router.post('/',
  body({ name, email, subject, telephone, message, read }),
  create)

/**
 * @api {get} /contactus Retrieve contactuses
 * @apiName RetrieveContactuses
 * @apiGroup Contactus
 * @apiUse listParams
 * @apiSuccess {Object[]} contactuses List of contactuses.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /contactus/:id Retrieve contactus
 * @apiName RetrieveContactus
 * @apiGroup Contactus
 * @apiSuccess {Object} contactus Contactus's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Contactus not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /contactus/:id Update contactus
 * @apiName UpdateContactus
 * @apiGroup Contactus
 * @apiParam name Contactus's name.
 * @apiParam email Contactus's email.
 * @apiParam subject Contactus's subject.
 * @apiParam telephone Contactus's telephone.
 * @apiParam message Contactus's message.
 * @apiSuccess {Object} contactus Contactus's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Contactus not found.
 */
router.put('/:id',
  body({ name, email, subject, telephone, message, read }),
  update)

/**
 * @api {delete} /contactus/:id Delete contactus
 * @apiName DeleteContactus
 * @apiGroup Contactus
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Contactus not found.
 */
router.delete('/:id',
  destroy)

export default router
