import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Promotions, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /Promotions Create promotions
 * @apiName CreatePromotions
 * @apiGroup Promotions
 * @apiParam code Promotions's code.
 * @apiParam description Promotions's description.
 * @apiSuccess {Object} promotions Promotions's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Promotions not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /Promotions Retrieve promotions
 * @apiName RetrievePromotions
 * @apiGroup Promotions
 * @apiUse listParams
 * @apiSuccess {Object[]} promotions List of promotions.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /Promotions/:id Retrieve promotions
 * @apiName RetrievePromotions
 * @apiGroup Promotions
 * @apiSuccess {Object} promotions Promotions's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Promotions not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /Promotions/:id Update promotions
 * @apiName UpdatePromotions
 * @apiGroup Promotions
 * @apiParam code Promotions's code.
 * @apiParam description Promotions's description.
 * @apiSuccess {Object} promotions Promotions's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Promotions not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /Promotions/:id Delete promotions
 * @apiName DeletePromotions
 * @apiGroup Promotions
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Promotions not found.
 */
router.delete('/:id',
  destroy)

export default router
