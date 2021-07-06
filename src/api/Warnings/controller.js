import { success, notFound } from '../../services/response/'
import { Warnings } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Warnings.create(body)
    .then((warnings) => warnings.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select} }, res, next) =>
  Warnings.find(query, select)
    .then((warnings) => warnings.map((warnings) => warnings.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Warnings.findById(params.id)
    .then(notFound(res))
    .then((warnings) => warnings ? warnings.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Warnings.findById(params.id)
    .then(notFound(res))
    .then((warnings) => warnings ? Object.assign(warnings, body).save() : null)
    .then((warnings) => warnings ? warnings.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Warnings.findById(params.id)
    .then(notFound(res))
    .then((warnings) => warnings ? warnings.remove() : null)
    .then(success(res, 204))
    .catch(next)
