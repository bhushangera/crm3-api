import { success, notFound } from '../../services/response/'
import { Saas } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Saas.create(body)
    .then((saas) => saas.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  Saas.find(query, select)
    .then((saas) => saas.map((saas) => saas.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Saas.findById(params.id)
    .then(notFound(res))
    .then((saas) => saas ? saas.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Saas.findById(params.id)
    .then(notFound(res))
    .then((saas) => saas ? Object.assign(saas, body).save() : null)
    .then((saas) => saas ? saas.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Saas.findById(params.id)
    .then(notFound(res))
    .then((saas) => saas ? saas.remove() : null)
    .then(success(res, 204))
    .catch(next)
