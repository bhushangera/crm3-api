import { success, notFound } from '../../services/response/'
import { Integrations } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Integrations.create(body)
    .then((integrations) => integrations.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select} }, res, next) =>
  Integrations.find(query, select)
    .then((integrations) => integrations.map((integrations) => integrations.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Integrations.findById(params.id)
    .then(notFound(res))
    .then((integrations) => integrations ? integrations.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Integrations.findById(params.id)
    .then(notFound(res))
    .then((integrations) => integrations ? Object.assign(integrations, body).save() : null)
    .then((integrations) => integrations ? integrations.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Integrations.findById(params.id)
    .then(notFound(res))
    .then((integrations) => integrations ? integrations.remove() : null)
    .then(success(res, 204))
    .catch(next)
