import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export TicketGroups, { schema } from './model'

const router = new Router()
const { TicketGroupId, prefix, group } = schema.tree

/**
 * @api {post} /ticketGroups Create ticket groups
 * @apiName CreateTicketGroups
 * @apiGroup TicketGroups
 * @apiParam TicketGroupId, prefix Ticket groups's TicketGroupId, prefix.
 * @apiParam group Ticket groups's group.
 * @apiSuccess {Object} ticketGroups Ticket groups's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Ticket groups not found.
 */
router.post('/',
  body({ TicketGroupId, prefix, group }),
  create)

/**
 * @api {get} /ticketGroups Retrieve ticket groups
 * @apiName RetrieveTicketGroups
 * @apiGroup TicketGroups
 * @apiUse listParams
 * @apiSuccess {Object[]} ticketGroups List of ticket groups.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /ticketGroups/:id Retrieve ticket groups
 * @apiName RetrieveTicketGroups
 * @apiGroup TicketGroups
 * @apiSuccess {Object} ticketGroups Ticket groups's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Ticket groups not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /ticketGroups/:id Update ticket groups
 * @apiName UpdateTicketGroups
 * @apiGroup TicketGroups
 * @apiParam TicketGroupId, prefix Ticket groups's TicketGroupId, prefix.
 * @apiParam group Ticket groups's group.
 * @apiSuccess {Object} ticketGroups Ticket groups's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Ticket groups not found.
 */
router.put('/:id',
  body({ TicketGroupId, prefix, group }),
  update)

/**
 * @api {delete} /ticketGroups/:id Delete ticket groups
 * @apiName DeleteTicketGroups
 * @apiGroup TicketGroups
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Ticket groups not found.
 */
router.delete('/:id',
  destroy)

export default router
