import { success, notFound } from '../../services/response/'
import { Ars } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Ars.create(body)
    .then((ars) => ars.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  Ars.find(query, select)
    .then((ars) => ars.map((ars) => ars.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Ars.findById(params.id)
    .then(notFound(res))
    .then((ars) => ars ? ars.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Ars.findById(params.id)
    .then(notFound(res))
    .then((ars) => ars ? Object.assign(ars, body).save() : null)
    .then((ars) => ars ? ars.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Ars.findById(params.id)
    .then(notFound(res))
    .then((ars) => ars ? ars.remove() : null)
    .then(success(res, 204))
    .catch(next)
