import { success, notFound } from '../../services/response/'
import { Counters } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Counters.create(body)
    .then((counters) => counters.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select} }, res, next) =>
  Counters.find(query, select)
    .then((counters) => counters.map((counters) => counters.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Counters.findById(params.id)
    .then(notFound(res))
    .then((counters) => counters ? counters.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Counters.findById(params.id)
    .then(notFound(res))
    .then((counters) => counters ? Object.assign(counters, body).save() : null)
    .then((counters) => counters ? counters.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Counters.findById(params.id)
    .then(notFound(res))
    .then((counters) => counters ? counters.remove() : null)
    .then(success(res, 204))
    .catch(next)
