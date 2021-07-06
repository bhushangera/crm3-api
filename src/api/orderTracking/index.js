import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export OrderTracking, { schema } from './model'

const router = new Router()
const { orderId, logDate, status, phase, trackingRemarks } = schema.tree

/**
 * @api {post} /orderTracking Create order tracking
 * @apiName CreateOrderTracking
 * @apiGroup OrderTracking
 * @apiParam sanctioned Order tracking's sanctioned.
 * @apiParam SanctionedRemarks Order tracking's SanctionedRemarks.
 * @apiParam scheduled Order tracking's scheduled.
 * @apiParam scheduledRemarks Order tracking's scheduledRemarks.
 * @apiParam inProduction Order tracking's inProduction.
 * @apiParam PriductionRemarks Order tracking's PriductionRemarks.
 * @apiParam inQA Order tracking's inQA.
 * @apiParam QARemakrs Order tracking's QARemakrs.
 * @apiParam inPackaging Order tracking's inPackaging.
 * @apiParam PackagingRemarks Order tracking's PackagingRemarks.
 * @apiParam clearance Order tracking's clearance.
 * @apiParam ClaranceRemarks Order tracking's ClaranceRemarks.
 * @apiParam shipped Order tracking's shipped.
 * @apiParam ShipmentRemakrs Order tracking's ShipmentRemakrs.
 * @apiParam shippingDocument Order tracking's shippingDocument.
 * @apiParam shippingDetails Order tracking's shippingDetails.
 * @apiParam delivered Order tracking's delivered.
 * @apiParam deliveryReport Order tracking's deliveryReport.
 * @apiSuccess {Object} orderTracking Order tracking's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Order tracking not found.
 */
router.post(
  '/',
  body({
    orderId,
    logDate,
    status,
    phase,
    trackingRemarks
  }),
  create
)

/**
 * @api {get} /orderTracking Retrieve order trackings
 * @apiName RetrieveOrderTrackings
 * @apiGroup OrderTracking
 * @apiUse listParams
 * @apiSuccess {Object[]} orderTrackings List of order trackings.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/', query(), index)

/**
 * @api {get} /orderTracking/:id Retrieve order tracking
 * @apiName RetrieveOrderTracking
 * @apiGroup OrderTracking
 * @apiSuccess {Object} orderTracking Order tracking's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Order tracking not found.
 */
router.get('/:id', show)

/**
 * @api {put} /orderTracking/:id Update order tracking
 * @apiName UpdateOrderTracking
 * @apiGroup OrderTracking
 * @apiParam sanctioned Order tracking's sanctioned.
 * @apiParam SanctionedRemarks Order tracking's SanctionedRemarks.
 * @apiParam scheduled Order tracking's scheduled.
 * @apiParam scheduledRemarks Order tracking's scheduledRemarks.
 * @apiParam inProduction Order tracking's inProduction.
 * @apiParam PriductionRemarks Order tracking's PriductionRemarks.
 * @apiParam inQA Order tracking's inQA.
 * @apiParam QARemakrs Order tracking's QARemakrs.
 * @apiParam inPackaging Order tracking's inPackaging.
 * @apiParam PackagingRemarks Order tracking's PackagingRemarks.
 * @apiParam clearance Order tracking's clearance.
 * @apiParam ClaranceRemarks Order tracking's ClaranceRemarks.
 * @apiParam shipped Order tracking's shipped.
 * @apiParam ShipmentRemakrs Order tracking's ShipmentRemakrs.
 * @apiParam shippingDocument Order tracking's shippingDocument.
 * @apiParam shippingDetails Order tracking's shippingDetails.
 * @apiParam delivered Order tracking's delivered.
 * @apiParam deliveryReport Order tracking's deliveryReport.
 * @apiSuccess {Object} orderTracking Order tracking's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Order tracking not found.
 */
router.put(
  '/:id',
  body({
    orderId,
    logDate,
    status,
    phase,
    trackingRemarks
  }),
  update
)

/**
 * @api {delete} /orderTracking/:id Delete order tracking
 * @apiName DeleteOrderTracking
 * @apiGroup OrderTracking
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Order tracking not found.
 */
router.delete('/:id', destroy)

export default router
