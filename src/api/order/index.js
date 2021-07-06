import { Router } from "express";
import { middleware as query } from "querymen";
import { middleware as body } from "bodymen";
import { create, index, show, update, destroy } from "./controller";
import { schema } from "./model";
export Order, { schema } from "./model";

const router = new Router();
const {
  datePlaced,
  scrollNo,
  fromPartyId,
  toPartyId,
  OrderAmount,
  GSTAmount,
  TotalValue,
  billingAddressId,
  billingAddress,
  shippingAddressId,
  shippingAddress,
  paymentTerms,
  advanceAmount,
  PaidByParty,
  OrderRemarks,
  managerId,
  status,
  phase,
  otherAddress,
  building,
  floor,
  street,
  landmark,
  address,
  countryId,
  country,
  stateId,
  state,
  territoryId,
  territory,
  cityId,
  locationId,
  locationCode,
  city,
  pinCode,
  trackingRemarks, notify,
} = schema.tree;

/**
 * @api {post} /order Create order
 * @apiName CreateOrder
 * @apiGroup Order
 * @apiParam datePlaced Order's datePlaced.
 * @apiParam timePlaced Order's timePlaced.
 * @apiParam UserId Order's UserId.
 * @apiParam PrderDetails Order's PrderDetails.
 * @apiParam OrderAmount Order's OrderAmount.
 * @apiParam GSTAmount Order's GSTAmount.
 * @apiParam ShippingAmount Order's ShippingAmount.
 * @apiParam TotalValue Order's TotalValue.
 * @apiParam BillToParty Order's BillToParty.
 * @apiParam ShipToParty Order's ShipToParty.
 * @apiParam PaidByParty Order's PaidByParty.
 * @apiParam BillingAddressId Order's BillingAddressId.
 * @apiParam ShippingAddressId Order's ShippingAddressId.
 * @apiParam OrderRemarks Order's OrderRemarks.
 * @apiSuccess {Object} order Order's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Order not found.
 */
router.post(
  "/",
  body({
    datePlaced,
    scrollNo,
    fromPartyId,
    toPartyId,
    OrderAmount,
    GSTAmount,
    TotalValue,
    billingAddressId,
    billingAddress,
    shippingAddressId,
    shippingAddress,
    paymentTerms,
    advanceAmount,
    PaidByParty,
    OrderRemarks,
    managerId,
    status,
    phase,
    otherAddress,
    building,
    floor,
    street,
    landmark,
    address,
    countryId,
    country,
    stateId,
    state,
    territoryId,
    territory,
    cityId,
    locationId,
    locationCode,
    city,
    pinCode,
    trackingRemarks, notify,
  }),
  create
);

/**
 * @api {get} /order Retrieve orders
 * @apiName RetrieveOrders
 * @apiGroup Order
 * @apiUse listParams
 * @apiSuccess {Object[]} orders List of orders.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/", query(), index);

/**
 * @api {get} /order/:id Retrieve order
 * @apiName RetrieveOrder
 * @apiGroup Order
 * @apiSuccess {Object} order Order's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Order not found.
 */
router.get("/:id", show);

/**
 * @api {put} /order/:id Update order
 * @apiName UpdateOrder
 * @apiGroup Order
 * @apiParam datePlaced Order's datePlaced.
 * @apiParam timePlaced Order's timePlaced.
 * @apiParam UserId Order's UserId.
 * @apiParam PrderDetails Order's PrderDetails.
 * @apiParam OrderAmount Order's OrderAmount.
 * @apiParam GSTAmount Order's GSTAmount.
 * @apiParam ShippingAmount Order's ShippingAmount.
 * @apiParam TotalValue Order's TotalValue.
 * @apiParam BillToParty Order's BillToParty.
 * @apiParam ShipToParty Order's ShipToParty.
 * @apiParam PaidByParty Order's PaidByParty.
 * @apiParam BillingAddressId Order's BillingAddressId.
 * @apiParam ShippingAddressId Order's ShippingAddressId.
 * @apiParam OrderRemarks Order's OrderRemarks.
 * @apiSuccess {Object} order Order's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Order not found.
 */
router.put(
  "/:id",
  body({
    datePlaced,
    scrollNo,
    fromPartyId,
    toPartyId,
    OrderAmount,
    GSTAmount,
    TotalValue,
    billingAddressId,
    billingAddress,
    shippingAddressId,
    shippingAddress,
    paymentTerms,
    advanceAmount,
    PaidByParty,
    OrderRemarks,
    managerId,
    status,
    phase,
    otherAddress,
    building,
    floor,
    street,
    landmark,
    address,
    countryId,
    country,
    stateId,
    state,
    territoryId,
    territory,
    cityId,
    locationId,
    locationCode,
    city,
    pinCode,
    trackingRemarks, notify,
  }),
  update
);

/**
 * @api {delete} /order/:id Delete order
 * @apiName DeleteOrder
 * @apiGroup Order
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Order not found.
 */
router.delete("/:id", destroy);

export default router;
