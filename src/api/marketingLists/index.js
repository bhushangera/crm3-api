import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export MarketingLists, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /marketingLists Create marketing lists
 * @apiName CreateMarketingLists
 * @apiGroup MarketingLists
 * @apiParam code Marketing lists's code.
 * @apiParam description Marketing lists's description.
 * @apiSuccess {Object} marketingLists Marketing lists's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Marketing lists not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /marketingLists Retrieve marketing lists
 * @apiName RetrieveMarketingLists
 * @apiGroup MarketingLists
 * @apiUse listParams
 * @apiSuccess {Object[]} marketingLists List of marketing lists.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /marketingLists/:id Retrieve marketing lists
 * @apiName RetrieveMarketingLists
 * @apiGroup MarketingLists
 * @apiSuccess {Object} marketingLists Marketing lists's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Marketing lists not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /marketingLists/:id Update marketing lists
 * @apiName UpdateMarketingLists
 * @apiGroup MarketingLists
 * @apiParam code Marketing lists's code.
 * @apiParam description Marketing lists's description.
 * @apiSuccess {Object} marketingLists Marketing lists's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Marketing lists not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /marketingLists/:id Delete marketing lists
 * @apiName DeleteMarketingLists
 * @apiGroup MarketingLists
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Marketing lists not found.
 */
router.delete('/:id',
  destroy)

export default router
