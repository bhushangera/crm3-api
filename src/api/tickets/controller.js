import { success, notFound } from '../../services/response/'
import { Tickets } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Tickets.create(body)
    .then((tickets) => tickets.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  Tickets.find(query, select)
    .then((tickets) => tickets.map((tickets) => tickets.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Tickets.findById(params.id)
    .then(notFound(res))
    .then((tickets) => tickets ? tickets.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Tickets.findById(params.id)
    .then(notFound(res))
    .then((tickets) => tickets ? Object.assign(tickets, body).save() : null)
    .then((tickets) => tickets ? tickets.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Tickets.findById(params.id)
    .then(notFound(res))
    .then((tickets) => tickets ? tickets.remove() : null)
    .then(success(res, 204))
    .catch(next)
