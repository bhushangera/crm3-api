import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export WorkEffortsScroll, { schema } from './model'

const router = new Router()
const { 
  WorkEffortId, assignedToParty, partyDetails, comments, fromDate, fromTime, toDate, toTime, closed, Remarks } = schema.tree

/**
 * @api {post} /workEffortsScroll Create work efforts scroll
 * @apiName CreateWorkEffortsScroll
 * @apiGroup WorkEffortsScroll
 * @apiParam WorkEffortId, assignedToParty Work efforts scroll's WorkEffortId, assignedToParty.
 * @apiParam partyDetails Work efforts scroll's partyDetails.
 * @apiParam comments Work efforts scroll's comments.
 * @apiParam fromDate Work efforts scroll's fromDate.
 * @apiParam fromTime Work efforts scroll's fromTime.
 * @apiParam toDate Work efforts scroll's toDate.
 * @apiParam toTime Work efforts scroll's toTime.
 * @apiParam closed Work efforts scroll's closed.
 * @apiParam Remarks: string; Work efforts scroll's Remarks: string;.
 * @apiSuccess {Object} workEffortsScroll Work efforts scroll's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Work efforts scroll not found.
 */
router.post('/',
  body({ WorkEffortId, assignedToParty, partyDetails, comments, fromDate, fromTime, toDate, toTime, closed, Remarks }),
  create)

/**
 * @api {get} /workEffortsScroll Retrieve work efforts scrolls
 * @apiName RetrieveWorkEffortsScrolls
 * @apiGroup WorkEffortsScroll
 * @apiUse listParams
 * @apiSuccess {Object[]} workEffortsScrolls List of work efforts scrolls.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /workEffortsScroll/:id Retrieve work efforts scroll
 * @apiName RetrieveWorkEffortsScroll
 * @apiGroup WorkEffortsScroll
 * @apiSuccess {Object} workEffortsScroll Work efforts scroll's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Work efforts scroll not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /workEffortsScroll/:id Update work efforts scroll
 * @apiName UpdateWorkEffortsScroll
 * @apiGroup WorkEffortsScroll
 * @apiParam WorkEffortId, assignedToParty Work efforts scroll's WorkEffortId, assignedToParty.
 * @apiParam partyDetails Work efforts scroll's partyDetails.
 * @apiParam comments Work efforts scroll's comments.
 * @apiParam fromDate Work efforts scroll's fromDate.
 * @apiParam fromTime Work efforts scroll's fromTime.
 * @apiParam toDate Work efforts scroll's toDate.
 * @apiParam toTime Work efforts scroll's toTime.
 * @apiParam closed Work efforts scroll's closed.
 * @apiParam Remarks: string; Work efforts scroll's Remarks: string;.
 * @apiSuccess {Object} workEffortsScroll Work efforts scroll's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Work efforts scroll not found.
 */
router.put('/:id',
  body({ WorkEffortId, assignedToParty, partyDetails, comments, fromDate, fromTime, toDate, toTime, closed, Remarks }),
  update)

/**
 * @api {delete} /workEffortsScroll/:id Delete work efforts scroll
 * @apiName DeleteWorkEffortsScroll
 * @apiGroup WorkEffortsScroll
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Work efforts scroll not found.
 */
router.delete('/:id',
  destroy)

export default router
