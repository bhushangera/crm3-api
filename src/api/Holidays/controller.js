import { success, notFound } from '../../services/response/'
import { Holidays } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Holidays.create(body)
    .then((holidays) => holidays.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select} }, res, next) =>
  Holidays.find(query, select)
    .then((holidays) => holidays.map((holidays) => holidays.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Holidays.findById(params.id)
    .then(notFound(res))
    .then((holidays) => holidays ? holidays.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Holidays.findById(params.id)
    .then(notFound(res))
    .then((holidays) => holidays ? Object.assign(holidays, body).save() : null)
    .then((holidays) => holidays ? holidays.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Holidays.findById(params.id)
    .then(notFound(res))
    .then((holidays) => holidays ? holidays.remove() : null)
    .then(success(res, 204))
    .catch(next)
