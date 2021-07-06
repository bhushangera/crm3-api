import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export FixedAssetAssignments, { schema } from './model'

const router = new Router()
const { wordEffortId, fromDate, fromTime, toDate, toTime, remarks, status } = schema.tree

/**
 * @api {post} /fixedAssetAssignments Create fixed asset assignments
 * @apiName CreateFixedAssetAssignments
 * @apiGroup FixedAssetAssignments
 * @apiParam wordEffortId Fixed asset assignments's wordEffortId.
 * @apiParam fromDate Fixed asset assignments's fromDate.
 * @apiParam fromTime Fixed asset assignments's fromTime.
 * @apiParam toDate Fixed asset assignments's toDate.
 * @apiParam toTime Fixed asset assignments's toTime.
 * @apiParam remarks Fixed asset assignments's remarks.
 * @apiParam status Fixed asset assignments's status.
 * @apiSuccess {Object} fixedAssetAssignments Fixed asset assignments's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Fixed asset assignments not found.
 */
router.post('/',
  body({ wordEffortId, fromDate, fromTime, toDate, toTime, remarks, status }),
  create)

/**
 * @api {get} /fixedAssetAssignments Retrieve fixed asset assignments
 * @apiName RetrieveFixedAssetAssignments
 * @apiGroup FixedAssetAssignments
 * @apiUse listParams
 * @apiSuccess {Object[]} fixedAssetAssignments List of fixed asset assignments.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /fixedAssetAssignments/:id Retrieve fixed asset assignments
 * @apiName RetrieveFixedAssetAssignments
 * @apiGroup FixedAssetAssignments
 * @apiSuccess {Object} fixedAssetAssignments Fixed asset assignments's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Fixed asset assignments not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /fixedAssetAssignments/:id Update fixed asset assignments
 * @apiName UpdateFixedAssetAssignments
 * @apiGroup FixedAssetAssignments
 * @apiParam wordEffortId Fixed asset assignments's wordEffortId.
 * @apiParam fromDate Fixed asset assignments's fromDate.
 * @apiParam fromTime Fixed asset assignments's fromTime.
 * @apiParam toDate Fixed asset assignments's toDate.
 * @apiParam toTime Fixed asset assignments's toTime.
 * @apiParam remarks Fixed asset assignments's remarks.
 * @apiParam status Fixed asset assignments's status.
 * @apiSuccess {Object} fixedAssetAssignments Fixed asset assignments's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Fixed asset assignments not found.
 */
router.put('/:id',
  body({ wordEffortId, fromDate, fromTime, toDate, toTime, remarks, status }),
  update)

/**
 * @api {delete} /fixedAssetAssignments/:id Delete fixed asset assignments
 * @apiName DeleteFixedAssetAssignments
 * @apiGroup FixedAssetAssignments
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Fixed asset assignments not found.
 */
router.delete('/:id',
  destroy)

export default router
