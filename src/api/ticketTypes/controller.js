import { success, notFound } from '../../services/response/'
import { TicketTypes } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  TicketTypes.create(body)
    .then((ticketTypes) => ticketTypes.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  TicketTypes.find(query, select)
    .then((ticketTypes) => ticketTypes.map((ticketTypes) => ticketTypes.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  TicketTypes.findById(params.id)
    .then(notFound(res))
    .then((ticketTypes) => ticketTypes ? ticketTypes.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  TicketTypes.findById(params.id)
    .then(notFound(res))
    .then((ticketTypes) => ticketTypes ? Object.assign(ticketTypes, body).save() : null)
    .then((ticketTypes) => ticketTypes ? ticketTypes.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  TicketTypes.findById(params.id)
    .then(notFound(res))
    .then((ticketTypes) => ticketTypes ? ticketTypes.remove() : null)
    .then(success(res, 204))
    .catch(next)
