import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Sms, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /sms Create sms
 * @apiName CreateSms
 * @apiGroup Sms
 * @apiParam code Sms's code.
 * @apiParam description Sms's description.
 * @apiSuccess {Object} sms Sms's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Sms not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /sms Retrieve sms
 * @apiName RetrieveSms
 * @apiGroup Sms
 * @apiUse listParams
 * @apiSuccess {Object[]} sms List of sms.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /sms/:id Retrieve sms
 * @apiName RetrieveSms
 * @apiGroup Sms
 * @apiSuccess {Object} sms Sms's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Sms not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /sms/:id Update sms
 * @apiName UpdateSms
 * @apiGroup Sms
 * @apiParam code Sms's code.
 * @apiParam description Sms's description.
 * @apiSuccess {Object} sms Sms's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Sms not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /sms/:id Delete sms
 * @apiName DeleteSms
 * @apiGroup Sms
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Sms not found.
 */
router.delete('/:id',
  destroy)

export default router
