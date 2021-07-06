import { success, notFound } from '../../services/response/'
import { TicketGroups } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  TicketGroups.create(body)
    .then((ticketGroups) => ticketGroups.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  TicketGroups.find(query, select)
    .then((ticketGroups) => ticketGroups.map((ticketGroups) => ticketGroups.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  TicketGroups.findById(params.id)
    .then(notFound(res))
    .then((ticketGroups) => ticketGroups ? ticketGroups.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  TicketGroups.findById(params.id)
    .then(notFound(res))
    .then((ticketGroups) => ticketGroups ? Object.assign(ticketGroups, body).save() : null)
    .then((ticketGroups) => ticketGroups ? ticketGroups.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  TicketGroups.findById(params.id)
    .then(notFound(res))
    .then((ticketGroups) => ticketGroups ? ticketGroups.remove() : null)
    .then(success(res, 204))
    .catch(next)
