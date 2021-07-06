import { success, notFound } from '../../services/response/'
import { Routing } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Routing.create(body)
    .then((routing) => routing.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select} }, res, next) =>
  Routing.find(query, select)
    .then((routings) => routings.map((routing) => routing.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Routing.findById(params.id)
    .then(notFound(res))
    .then((routing) => routing ? routing.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Routing.findById(params.id)
    .then(notFound(res))
    .then((routing) => routing ? Object.assign(routing, body).save() : null)
    .then((routing) => routing ? routing.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Routing.findById(params.id)
    .then(notFound(res))
    .then((routing) => routing ? routing.remove() : null)
    .then(success(res, 204))
    .catch(next)
