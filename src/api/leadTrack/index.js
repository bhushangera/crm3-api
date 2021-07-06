import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export LeadTrack, { schema } from './model'

const router = new Router()
const { leadId, userId, trackDate, trackedBy, remarks, nextReminder,userName, managerId } = schema.tree

/**
 * @api {post} /leadTrack Create lead track
 * @apiName CreateLeadTrack
 * @apiGroup LeadTrack
 * @apiParam leadId Lead track's leadId.
 * @apiParam userId Lead track's userId.
 * @apiParam trackDate Lead track's trackDate.
 * @apiParam trackedBy Lead track's trackedBy.
 * @apiParam remarks Lead track's remarks.
 * @apiParam nextReminder Lead track's nextReminder.
 * @apiSuccess {Object} leadTrack Lead track's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Lead track not found.
 */
router.post('/',
  body({ leadId, userId, trackDate, trackedBy, remarks, nextReminder, userName, managerId }),
  create)

/**
 * @api {get} /leadTrack Retrieve lead tracks
 * @apiName RetrieveLeadTracks
 * @apiGroup LeadTrack
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of lead tracks.
 * @apiSuccess {Object[]} rows List of lead tracks.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /leadTrack/:id Retrieve lead track
 * @apiName RetrieveLeadTrack
 * @apiGroup LeadTrack
 * @apiSuccess {Object} leadTrack Lead track's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Lead track not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /leadTrack/:id Update lead track
 * @apiName UpdateLeadTrack
 * @apiGroup LeadTrack
 * @apiParam leadId Lead track's leadId.
 * @apiParam userId Lead track's userId.
 * @apiParam trackDate Lead track's trackDate.
 * @apiParam trackedBy Lead track's trackedBy.
 * @apiParam remarks Lead track's remarks.
 * @apiParam nextReminder Lead track's nextReminder.
 * @apiSuccess {Object} leadTrack Lead track's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Lead track not found.
 */
router.put('/:id',
  body({ leadId, userId, trackDate, trackedBy, remarks, nextReminder,userName, managerId }),
  update)

/**
 * @api {delete} /leadTrack/:id Delete lead track
 * @apiName DeleteLeadTrack
 * @apiGroup LeadTrack
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Lead track not found.
 */
router.delete('/:id',
  destroy)

export default router
