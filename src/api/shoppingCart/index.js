import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export ShoppingCart, { schema } from './model'

const router = new Router()
const {
  dateAdded,
  partyId,
  PIId,
  MCode,
  image,
  Price,
  GSTAmount,
  Qty,
  totalAmount,
  PI
} = schema.tree

/**
 * @api {post} /shoppingCart Create shopping cart
 * @apiName CreateShoppingCart
 * @apiGroup ShoppingCart
 * @apiParam dateAdded Shopping cart's dateAdded.
 * @apiParam userId Shopping cart's userId.
 * @apiParam partyId Shopping cart's partyId.
 * @apiParam PIId Shopping cart's PIId.
 * @apiParam SKUId Shopping cart's SKUId.
 * @apiParam Price Shopping cart's Price.
 * @apiParam discount Shopping cart's discount.
 * @apiParam GST Shopping cart's GST.
 * @apiParam GSTAmount Shopping cart's GSTAmount.
 * @apiParam Qty Shopping cart's Qty.
 * @apiParam shipping Shopping cart's shipping.
 * @apiParam totalAmount, PI Shopping cart's totalAmount, PI.
 * @apiParam wishlist Shopping cart's wishlist.
 * @apiParam ordered Shopping cart's ordered.
 * @apiParam trash Shopping cart's trash.
 * @apiSuccess {Object} shoppingCart Shopping cart's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Shopping cart not found.
 */
router.post(
  '/',
  body({
    dateAdded,
    partyId,
    PIId,
    MCode,
    image,
    Price,
    GSTAmount,
    Qty,
    totalAmount,
    PI
  }),
  create
)

/**
 * @api {get} /shoppingCart Retrieve shopping carts
 * @apiName RetrieveShoppingCarts
 * @apiGroup ShoppingCart
 * @apiUse listParams
 * @apiSuccess {Object[]} shoppingCarts List of shopping carts.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/', query(), index)

/**
 * @api {get} /shoppingCart/:id Retrieve shopping cart
 * @apiName RetrieveShoppingCart
 * @apiGroup ShoppingCart
 * @apiSuccess {Object} shoppingCart Shopping cart's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Shopping cart not found.
 */
router.get('/:id', show)

/**
 * @api {put} /shoppingCart/:id Update shopping cart
 * @apiName UpdateShoppingCart
 * @apiGroup ShoppingCart
 * @apiParam dateAdded Shopping cart's dateAdded.
 * @apiParam userId Shopping cart's userId.
 * @apiParam partyId Shopping cart's partyId.
 * @apiParam PIId Shopping cart's PIId.
 * @apiParam SKUId Shopping cart's SKUId.
 * @apiParam Price Shopping cart's Price.
 * @apiParam discount Shopping cart's discount.
 * @apiParam GST Shopping cart's GST.
 * @apiParam GSTAmount Shopping cart's GSTAmount.
 * @apiParam Qty Shopping cart's Qty.
 * @apiParam shipping Shopping cart's shipping.
 * @apiParam totalAmount, PI Shopping cart's totalAmount, PI.
 * @apiParam wishlist Shopping cart's wishlist.
 * @apiParam ordered Shopping cart's ordered.
 * @apiParam trash Shopping cart's trash.
 * @apiSuccess {Object} shoppingCart Shopping cart's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Shopping cart not found.
 */
router.put(
  '/:id',
  body({
    dateAdded,
    partyId,
    PIId,
    MCode,
    image,
    Price,
    GSTAmount,
    Qty,
    totalAmount,
    PI
  }),
  update
)

/**
 * @api {delete} /shoppingCart/:id Delete shopping cart
 * @apiName DeleteShoppingCart
 * @apiGroup ShoppingCart
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Shopping cart not found.
 */
router.delete('/:id', destroy)

export default router
