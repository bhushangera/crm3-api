import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export FixedAssetMaintenance, { schema } from './model'

const router = new Router()
const { fAssetId, recordDate, lastServiceDate, nextDueDays, serviceDueDate, sericeComments } = schema.tree

/**
 * @api {post} /fixedAssetMaintenance Create fixed asset maintenance
 * @apiName CreateFixedAssetMaintenance
 * @apiGroup FixedAssetMaintenance
 * @apiParam fAssetId, recordDate Fixed asset maintenance's fAssetId, recordDate.
 * @apiParam lastServiceDate Fixed asset maintenance's lastServiceDate.
 * @apiParam nextDueDays Fixed asset maintenance's nextDueDays.
 * @apiParam serviceDueDate Fixed asset maintenance's serviceDueDate.
 * @apiParam sericeComments Fixed asset maintenance's sericeComments.
 * @apiSuccess {Object} fixedAssetMaintenance Fixed asset maintenance's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Fixed asset maintenance not found.
 */
router.post('/',
  body({ fAssetId, recordDate, lastServiceDate, nextDueDays, serviceDueDate, sericeComments }),
  create)

/**
 * @api {get} /fixedAssetMaintenance Retrieve fixed asset maintenances
 * @apiName RetrieveFixedAssetMaintenances
 * @apiGroup FixedAssetMaintenance
 * @apiUse listParams
 * @apiSuccess {Object[]} fixedAssetMaintenances List of fixed asset maintenances.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /fixedAssetMaintenance/:id Retrieve fixed asset maintenance
 * @apiName RetrieveFixedAssetMaintenance
 * @apiGroup FixedAssetMaintenance
 * @apiSuccess {Object} fixedAssetMaintenance Fixed asset maintenance's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Fixed asset maintenance not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /fixedAssetMaintenance/:id Update fixed asset maintenance
 * @apiName UpdateFixedAssetMaintenance
 * @apiGroup FixedAssetMaintenance
 * @apiParam fAssetId, recordDate Fixed asset maintenance's fAssetId, recordDate.
 * @apiParam lastServiceDate Fixed asset maintenance's lastServiceDate.
 * @apiParam nextDueDays Fixed asset maintenance's nextDueDays.
 * @apiParam serviceDueDate Fixed asset maintenance's serviceDueDate.
 * @apiParam sericeComments Fixed asset maintenance's sericeComments.
 * @apiSuccess {Object} fixedAssetMaintenance Fixed asset maintenance's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Fixed asset maintenance not found.
 */
router.put('/:id',
  body({ fAssetId, recordDate, lastServiceDate, nextDueDays, serviceDueDate, sericeComments }),
  update)

/**
 * @api {delete} /fixedAssetMaintenance/:id Delete fixed asset maintenance
 * @apiName DeleteFixedAssetMaintenance
 * @apiGroup FixedAssetMaintenance
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Fixed asset maintenance not found.
 */
router.delete('/:id',
  destroy)

export default router
