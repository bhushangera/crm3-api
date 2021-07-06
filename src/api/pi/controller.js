import { success, notFound } from '../../services/response/'
import { Pi } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Pi.create(body)
    .then((pi) => pi.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  Pi.find(query, select)
    .then((pis) => pis.map((pi) => pi.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Pi.findById(params.id)
    .then(notFound(res))
    .then((pi) => pi ? pi.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Pi.findById(params.id)
    .then(notFound(res))
    .then((pi) => pi ? Object.assign(pi, body).save() : null)
    .then((pi) => pi ? pi.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Pi.findById(params.id)
    .then(notFound(res))
    .then((pi) => pi ? pi.remove() : null)
    .then(success(res, 204))
    .catch(next)
