import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export OrderShippingDetail, { schema } from './model'

const router = new Router()
const { OrderId, status, ShippedDate, ShippedTime, ShippingPartyId, ShippingPartyDetails, GRNo, GRImage, VehicleNo, EWayBillNo, EWayImage, EWayBillDate, EWayBilltime, DriverName, DriverMobile, Delivered, DeliveredDate, DeliveredTime, DeliveryReport, RecivedBy } = schema.tree

/**
 * @api {post} /orderShippingDetail Create order shipping detail
 * @apiName CreateOrderShippingDetail
 * @apiGroup OrderShippingDetail
 * @apiParam OrderId Order shipping detail's OrderId.
 * @apiParam status Order shipping detail's status.
 * @apiParam ShippedDate Order shipping detail's ShippedDate.
 * @apiParam ShippedTime Order shipping detail's ShippedTime.
 * @apiParam ShippingPartyId Order shipping detail's ShippingPartyId.
 * @apiParam ShippingPartyDetails Order shipping detail's ShippingPartyDetails.
 * @apiParam GRNo Order shipping detail's GRNo.
 * @apiParam GRImage Order shipping detail's GRImage.
 * @apiParam VehicleNo Order shipping detail's VehicleNo.
 * @apiParam EWayBillNo Order shipping detail's EWayBillNo.
 * @apiParam EWayImage Order shipping detail's EWayImage.
 * @apiParam EWayBillDate Order shipping detail's EWayBillDate.
 * @apiParam EWayBilltime Order shipping detail's EWayBilltime.
 * @apiParam DriverName Order shipping detail's DriverName.
 * @apiParam DriverMobile Order shipping detail's DriverMobile.
 * @apiParam Delivered Order shipping detail's Delivered.
 * @apiParam DeliveredDate Order shipping detail's DeliveredDate.
 * @apiParam DeliveredTime Order shipping detail's DeliveredTime.
 * @apiParam DeliveryReport Order shipping detail's DeliveryReport.
 * @apiParam RecivedBy Order shipping detail's RecivedBy.
 * @apiSuccess {Object} orderShippingDetail Order shipping detail's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Order shipping detail not found.
 */
router.post('/',
  body({ OrderId, status, ShippedDate, ShippedTime, ShippingPartyId, ShippingPartyDetails, GRNo, GRImage, VehicleNo, EWayBillNo, EWayImage, EWayBillDate, EWayBilltime, DriverName, DriverMobile, Delivered, DeliveredDate, DeliveredTime, DeliveryReport, RecivedBy }),
  create)

/**
 * @api {get} /orderShippingDetail Retrieve order shipping details
 * @apiName RetrieveOrderShippingDetails
 * @apiGroup OrderShippingDetail
 * @apiUse listParams
 * @apiSuccess {Object[]} orderShippingDetails List of order shipping details.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /orderShippingDetail/:id Retrieve order shipping detail
 * @apiName RetrieveOrderShippingDetail
 * @apiGroup OrderShippingDetail
 * @apiSuccess {Object} orderShippingDetail Order shipping detail's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Order shipping detail not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /orderShippingDetail/:id Update order shipping detail
 * @apiName UpdateOrderShippingDetail
 * @apiGroup OrderShippingDetail
 * @apiParam OrderId Order shipping detail's OrderId.
 * @apiParam status Order shipping detail's status.
 * @apiParam ShippedDate Order shipping detail's ShippedDate.
 * @apiParam ShippedTime Order shipping detail's ShippedTime.
 * @apiParam ShippingPartyId Order shipping detail's ShippingPartyId.
 * @apiParam ShippingPartyDetails Order shipping detail's ShippingPartyDetails.
 * @apiParam GRNo Order shipping detail's GRNo.
 * @apiParam GRImage Order shipping detail's GRImage.
 * @apiParam VehicleNo Order shipping detail's VehicleNo.
 * @apiParam EWayBillNo Order shipping detail's EWayBillNo.
 * @apiParam EWayImage Order shipping detail's EWayImage.
 * @apiParam EWayBillDate Order shipping detail's EWayBillDate.
 * @apiParam EWayBilltime Order shipping detail's EWayBilltime.
 * @apiParam DriverName Order shipping detail's DriverName.
 * @apiParam DriverMobile Order shipping detail's DriverMobile.
 * @apiParam Delivered Order shipping detail's Delivered.
 * @apiParam DeliveredDate Order shipping detail's DeliveredDate.
 * @apiParam DeliveredTime Order shipping detail's DeliveredTime.
 * @apiParam DeliveryReport Order shipping detail's DeliveryReport.
 * @apiParam RecivedBy Order shipping detail's RecivedBy.
 * @apiSuccess {Object} orderShippingDetail Order shipping detail's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Order shipping detail not found.
 */
router.put('/:id',
  body({ OrderId, status, ShippedDate, ShippedTime, ShippingPartyId, ShippingPartyDetails, GRNo, GRImage, VehicleNo, EWayBillNo, EWayImage, EWayBillDate, EWayBilltime, DriverName, DriverMobile, Delivered, DeliveredDate, DeliveredTime, DeliveryReport, RecivedBy }),
  update)

/**
 * @api {delete} /orderShippingDetail/:id Delete order shipping detail
 * @apiName DeleteOrderShippingDetail
 * @apiGroup OrderShippingDetail
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Order shipping detail not found.
 */
router.delete('/:id',
  destroy)

export default router
