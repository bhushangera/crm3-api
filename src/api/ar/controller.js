import { success, notFound } from '../../services/response/'
import { Ar } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Ar.create(body)
    .then((ar) => ar.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  Ar.find(query, select)
    .then((ars) => ars.map((ar) => ar.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Ar.findById(params.id)
    .then(notFound(res))
    .then((ar) => ar ? ar.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Ar.findById(params.id)
    .then(notFound(res))
    .then((ar) => ar ? Object.assign(ar, body).save() : null)
    .then((ar) => ar ? ar.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Ar.findById(params.id)
    .then(notFound(res))
    .then((ar) => ar ? ar.remove() : null)
    .then(success(res, 204))
    .catch(next)
