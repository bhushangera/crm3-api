import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export WorkEfforts, { schema } from './model'

const router = new Router()
const { WorkEffortId, scrollNo, ticketId, workEffectTypeId, wordEffectType, description, sheduledStartDate, sheduledEndDate, actualStartDate, actualEndDate, totalBudget, totalHours, actualHours, specialTerms, productionRun, qtyToProduce, qtyProduced, qtyRejected, runType, complete } = schema.tree

/**
 * @api {post} /workEfforts Create work efforts
 * @apiName CreateWorkEfforts
 * @apiGroup WorkEfforts
 * @apiParam WorkEffortId, scrollNo Work efforts's WorkEffortId, scrollNo.
 * @apiParam ticketId Work efforts's ticketId.
 * @apiParam workEffectTypeId Work efforts's workEffectTypeId.
 * @apiParam wordEffectType Work efforts's wordEffectType.
 * @apiParam description Work efforts's description.
 * @apiParam sheduledStartDate Work efforts's sheduledStartDate.
 * @apiParam sheduledEndDate Work efforts's sheduledEndDate.
 * @apiParam actualStartDate Work efforts's actualStartDate.
 * @apiParam actualEndDate Work efforts's actualEndDate.
 * @apiParam totalBudget Work efforts's totalBudget.
 * @apiParam totalHours Work efforts's totalHours.
 * @apiParam actualHours Work efforts's actualHours.
 * @apiParam specialTerms Work efforts's specialTerms.
 * @apiParam productionRun Work efforts's productionRun.
 * @apiParam qtyToProduce Work efforts's qtyToProduce.
 * @apiParam qtyProduced Work efforts's qtyProduced.
 * @apiParam qtyRejected Work efforts's qtyRejected.
 * @apiParam runType Work efforts's runType.
 * @apiParam complete Work efforts's complete.
 * @apiSuccess {Object} workEfforts Work efforts's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Work efforts not found.
 */
router.post('/',
  body({ WorkEffortId, scrollNo, ticketId, workEffectTypeId, wordEffectType, description, sheduledStartDate, sheduledEndDate, actualStartDate, actualEndDate, totalBudget, totalHours, actualHours, specialTerms, productionRun, qtyToProduce, qtyProduced, qtyRejected, runType, complete }),
  create)

/**
 * @api {get} /workEfforts Retrieve work efforts
 * @apiName RetrieveWorkEfforts
 * @apiGroup WorkEfforts
 * @apiUse listParams
 * @apiSuccess {Object[]} workEfforts List of work efforts.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /workEfforts/:id Retrieve work efforts
 * @apiName RetrieveWorkEfforts
 * @apiGroup WorkEfforts
 * @apiSuccess {Object} workEfforts Work efforts's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Work efforts not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /workEfforts/:id Update work efforts
 * @apiName UpdateWorkEfforts
 * @apiGroup WorkEfforts
 * @apiParam WorkEffortId, scrollNo Work efforts's WorkEffortId, scrollNo.
 * @apiParam ticketId Work efforts's ticketId.
 * @apiParam workEffectTypeId Work efforts's workEffectTypeId.
 * @apiParam wordEffectType Work efforts's wordEffectType.
 * @apiParam description Work efforts's description.
 * @apiParam sheduledStartDate Work efforts's sheduledStartDate.
 * @apiParam sheduledEndDate Work efforts's sheduledEndDate.
 * @apiParam actualStartDate Work efforts's actualStartDate.
 * @apiParam actualEndDate Work efforts's actualEndDate.
 * @apiParam totalBudget Work efforts's totalBudget.
 * @apiParam totalHours Work efforts's totalHours.
 * @apiParam actualHours Work efforts's actualHours.
 * @apiParam specialTerms Work efforts's specialTerms.
 * @apiParam productionRun Work efforts's productionRun.
 * @apiParam qtyToProduce Work efforts's qtyToProduce.
 * @apiParam qtyProduced Work efforts's qtyProduced.
 * @apiParam qtyRejected Work efforts's qtyRejected.
 * @apiParam runType Work efforts's runType.
 * @apiParam complete Work efforts's complete.
 * @apiSuccess {Object} workEfforts Work efforts's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Work efforts not found.
 */
router.put('/:id',
  body({ WorkEffortId, scrollNo, ticketId, workEffectTypeId, wordEffectType, description, sheduledStartDate, sheduledEndDate, actualStartDate, actualEndDate, totalBudget, totalHours, actualHours, specialTerms, productionRun, qtyToProduce, qtyProduced, qtyRejected, runType, complete }),
  update)

/**
 * @api {delete} /workEfforts/:id Delete work efforts
 * @apiName DeleteWorkEfforts
 * @apiGroup WorkEfforts
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Work efforts not found.
 */
router.delete('/:id',
  destroy)

export default router
