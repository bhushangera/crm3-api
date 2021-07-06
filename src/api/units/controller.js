import { success, notFound } from '../../services/response/'
import { Units } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Units.create(body)
    .then((units) => units.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  Units.find(query, select)
    .then((units) => units.map((units) => units.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Units.findById(params.id)
    .then(notFound(res))
    .then((units) => units ? units.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Units.findById(params.id)
    .then(notFound(res))
    .then((units) => units ? Object.assign(units, body).save() : null)
    .then((units) => units ? units.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Units.findById(params.id)
    .then(notFound(res))
    .then((units) => units ? units.remove() : null)
    .then(success(res, 204))
    .catch(next)
