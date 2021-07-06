import { success, notFound } from '../../services/response/'
import { Visitors } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Visitors.create(body)
    .then((visitors) => visitors.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select} }, res, next) =>
  Visitors.find(query, select)
    .then((visitors) => visitors.map((visitors) => visitors.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Visitors.findById(params.id)
    .then(notFound(res))
    .then((visitors) => visitors ? visitors.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Visitors.findById(params.id)
    .then(notFound(res))
    .then((visitors) => visitors ? Object.assign(visitors, body).save() : null)
    .then((visitors) => visitors ? visitors.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Visitors.findById(params.id)
    .then(notFound(res))
    .then((visitors) => visitors ? visitors.remove() : null)
    .then(success(res, 204))
    .catch(next)
