import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Tickets, { schema } from './model'

const router = new Router()
const { TicketId, ticketTypeId, ticketType, scrollNo, recordDate, creatorParty, forParty, description, closed, closedDate, poId, piId } = schema.tree

/**
 * @api {post} /tickets Create tickets
 * @apiName CreateTickets
 * @apiGroup Tickets
 * @apiParam TicketId, ticketTypeId Tickets's TicketId, ticketTypeId.
 * @apiParam ticketType Tickets's ticketType.
 * @apiParam scrollNo Tickets's scrollNo.
 * @apiParam recordDate Tickets's recordDate.
 * @apiParam creatorParty Tickets's creatorParty.
 * @apiParam forParty Tickets's forParty.
 * @apiParam description Tickets's description.
 * @apiParam closed Tickets's closed.
 * @apiParam closedDate Tickets's closedDate.
 * @apiParam poId Tickets's poId.
 * @apiParam piId Tickets's piId.
 * @apiSuccess {Object} tickets Tickets's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Tickets not found.
 */
router.post('/',
  body({ TicketId, ticketTypeId, ticketType, scrollNo, recordDate, creatorParty, forParty, description, closed, closedDate, poId, piId }),
  create)

/**
 * @api {get} /tickets Retrieve tickets
 * @apiName RetrieveTickets
 * @apiGroup Tickets
 * @apiUse listParams
 * @apiSuccess {Object[]} tickets List of tickets.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /tickets/:id Retrieve tickets
 * @apiName RetrieveTickets
 * @apiGroup Tickets
 * @apiSuccess {Object} tickets Tickets's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Tickets not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /tickets/:id Update tickets
 * @apiName UpdateTickets
 * @apiGroup Tickets
 * @apiParam TicketId, ticketTypeId Tickets's TicketId, ticketTypeId.
 * @apiParam ticketType Tickets's ticketType.
 * @apiParam scrollNo Tickets's scrollNo.
 * @apiParam recordDate Tickets's recordDate.
 * @apiParam creatorParty Tickets's creatorParty.
 * @apiParam forParty Tickets's forParty.
 * @apiParam description Tickets's description.
 * @apiParam closed Tickets's closed.
 * @apiParam closedDate Tickets's closedDate.
 * @apiParam poId Tickets's poId.
 * @apiParam piId Tickets's piId.
 * @apiSuccess {Object} tickets Tickets's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Tickets not found.
 */
router.put('/:id',
  body({ TicketId, ticketTypeId, ticketType, scrollNo, recordDate, creatorParty, forParty, description, closed, closedDate, poId, piId }),
  update)

/**
 * @api {delete} /tickets/:id Delete tickets
 * @apiName DeleteTickets
 * @apiGroup Tickets
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Tickets not found.
 */
router.delete('/:id',
  destroy)

export default router
