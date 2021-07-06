import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Currency, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /currency Create currency
 * @apiName CreateCurrency
 * @apiGroup Currency
 * @apiParam code Currency's code.
 * @apiParam description Currency's description.
 * @apiSuccess {Object} currency Currency's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Currency not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /currency Retrieve currencies
 * @apiName RetrieveCurrencies
 * @apiGroup Currency
 * @apiUse listParams
 * @apiSuccess {Object[]} currencies List of currencies.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /currency/:id Retrieve currency
 * @apiName RetrieveCurrency
 * @apiGroup Currency
 * @apiSuccess {Object} currency Currency's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Currency not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /currency/:id Update currency
 * @apiName UpdateCurrency
 * @apiGroup Currency
 * @apiParam code Currency's code.
 * @apiParam description Currency's description.
 * @apiSuccess {Object} currency Currency's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Currency not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /currency/:id Delete currency
 * @apiName DeleteCurrency
 * @apiGroup Currency
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Currency not found.
 */
router.delete('/:id',
  destroy)

export default router
