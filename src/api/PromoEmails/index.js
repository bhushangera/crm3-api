import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export PromoEmails, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /PromoEmails Create promo emails
 * @apiName CreatePromoEmails
 * @apiGroup PromoEmails
 * @apiParam code Promo emails's code.
 * @apiParam description Promo emails's description.
 * @apiSuccess {Object} promoEmails Promo emails's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Promo emails not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /PromoEmails Retrieve promo emails
 * @apiName RetrievePromoEmails
 * @apiGroup PromoEmails
 * @apiUse listParams
 * @apiSuccess {Object[]} promoEmails List of promo emails.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /PromoEmails/:id Retrieve promo emails
 * @apiName RetrievePromoEmails
 * @apiGroup PromoEmails
 * @apiSuccess {Object} promoEmails Promo emails's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Promo emails not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /PromoEmails/:id Update promo emails
 * @apiName UpdatePromoEmails
 * @apiGroup PromoEmails
 * @apiParam code Promo emails's code.
 * @apiParam description Promo emails's description.
 * @apiSuccess {Object} promoEmails Promo emails's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Promo emails not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /PromoEmails/:id Delete promo emails
 * @apiName DeletePromoEmails
 * @apiGroup PromoEmails
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Promo emails not found.
 */
router.delete('/:id',
  destroy)

export default router
