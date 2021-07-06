import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export TicketTypes, { schema } from './model'

const router = new Router()
const { TicketTypeId, ticketGroupId, ticketGroup, code, description, priority } = schema.tree

/**
 * @api {post} /ticketTypes Create ticket types
 * @apiName CreateTicketTypes
 * @apiGroup TicketTypes
 * @apiParam TicketTypeId, ticketGroupId Ticket types's TicketTypeId, ticketGroupId.
 * @apiParam ticketGroup Ticket types's ticketGroup.
 * @apiParam code Ticket types's code.
 * @apiParam description Ticket types's description.
 * @apiParam priority Ticket types's priority.
 * @apiSuccess {Object} ticketTypes Ticket types's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Ticket types not found.
 */
router.post('/',
  body({ TicketTypeId, ticketGroupId, ticketGroup, code, description, priority }),
  create)

/**
 * @api {get} /ticketTypes Retrieve ticket types
 * @apiName RetrieveTicketTypes
 * @apiGroup TicketTypes
 * @apiUse listParams
 * @apiSuccess {Object[]} ticketTypes List of ticket types.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /ticketTypes/:id Retrieve ticket types
 * @apiName RetrieveTicketTypes
 * @apiGroup TicketTypes
 * @apiSuccess {Object} ticketTypes Ticket types's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Ticket types not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /ticketTypes/:id Update ticket types
 * @apiName UpdateTicketTypes
 * @apiGroup TicketTypes
 * @apiParam TicketTypeId, ticketGroupId Ticket types's TicketTypeId, ticketGroupId.
 * @apiParam ticketGroup Ticket types's ticketGroup.
 * @apiParam code Ticket types's code.
 * @apiParam description Ticket types's description.
 * @apiParam priority Ticket types's priority.
 * @apiSuccess {Object} ticketTypes Ticket types's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Ticket types not found.
 */
router.put('/:id',
  body({ TicketTypeId, ticketGroupId, ticketGroup, code, description, priority }),
  update)

/**
 * @api {delete} /ticketTypes/:id Delete ticket types
 * @apiName DeleteTicketTypes
 * @apiGroup TicketTypes
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Ticket types not found.
 */
router.delete('/:id',
  destroy)

export default router
