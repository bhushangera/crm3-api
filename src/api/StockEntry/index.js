import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export StockEntry, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /StockEntry Create stock entry
 * @apiName CreateStockEntry
 * @apiGroup StockEntry
 * @apiParam code Stock entry's code.
 * @apiParam description Stock entry's description.
 * @apiSuccess {Object} stockEntry Stock entry's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Stock entry not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /StockEntry Retrieve stock entries
 * @apiName RetrieveStockEntries
 * @apiGroup StockEntry
 * @apiUse listParams
 * @apiSuccess {Object[]} stockEntries List of stock entries.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /StockEntry/:id Retrieve stock entry
 * @apiName RetrieveStockEntry
 * @apiGroup StockEntry
 * @apiSuccess {Object} stockEntry Stock entry's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Stock entry not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /StockEntry/:id Update stock entry
 * @apiName UpdateStockEntry
 * @apiGroup StockEntry
 * @apiParam code Stock entry's code.
 * @apiParam description Stock entry's description.
 * @apiSuccess {Object} stockEntry Stock entry's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Stock entry not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /StockEntry/:id Delete stock entry
 * @apiName DeleteStockEntry
 * @apiGroup StockEntry
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Stock entry not found.
 */
router.delete('/:id',
  destroy)

export default router
