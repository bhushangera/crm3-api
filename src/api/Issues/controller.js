import { success, notFound } from '../../services/response/'
import { Issues } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Issues.create(body)
    .then((issues) => issues.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select} }, res, next) =>
  Issues.find(query, select)
    .then((issues) => issues.map((issues) => issues.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Issues.findById(params.id)
    .then(notFound(res))
    .then((issues) => issues ? issues.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Issues.findById(params.id)
    .then(notFound(res))
    .then((issues) => issues ? Object.assign(issues, body).save() : null)
    .then((issues) => issues ? issues.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Issues.findById(params.id)
    .then(notFound(res))
    .then((issues) => issues ? issues.remove() : null)
    .then(success(res, 204))
    .catch(next)
