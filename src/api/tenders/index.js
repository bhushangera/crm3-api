import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Tenders, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /tenders Create tenders
 * @apiName CreateTenders
 * @apiGroup Tenders
 * @apiParam code Tenders's code.
 * @apiParam description Tenders's description.
 * @apiSuccess {Object} tenders Tenders's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Tenders not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /tenders Retrieve tenders
 * @apiName RetrieveTenders
 * @apiGroup Tenders
 * @apiUse listParams
 * @apiSuccess {Object[]} tenders List of tenders.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /tenders/:id Retrieve tenders
 * @apiName RetrieveTenders
 * @apiGroup Tenders
 * @apiSuccess {Object} tenders Tenders's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Tenders not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /tenders/:id Update tenders
 * @apiName UpdateTenders
 * @apiGroup Tenders
 * @apiParam code Tenders's code.
 * @apiParam description Tenders's description.
 * @apiSuccess {Object} tenders Tenders's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Tenders not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /tenders/:id Delete tenders
 * @apiName DeleteTenders
 * @apiGroup Tenders
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Tenders not found.
 */
router.delete('/:id',
  destroy)

export default router
