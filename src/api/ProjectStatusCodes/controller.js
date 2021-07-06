import { success, notFound } from '../../services/response/'
import { ProjectStatusCodes } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  ProjectStatusCodes.create(body)
    .then((projectStatusCodes) => projectStatusCodes.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select} }, res, next) =>
  ProjectStatusCodes.find(query, select)
    .then((projectStatusCodes) => projectStatusCodes.map((projectStatusCodes) => projectStatusCodes.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  ProjectStatusCodes.findById(params.id)
    .then(notFound(res))
    .then((projectStatusCodes) => projectStatusCodes ? projectStatusCodes.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  ProjectStatusCodes.findById(params.id)
    .then(notFound(res))
    .then((projectStatusCodes) => projectStatusCodes ? Object.assign(projectStatusCodes, body).save() : null)
    .then((projectStatusCodes) => projectStatusCodes ? projectStatusCodes.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  ProjectStatusCodes.findById(params.id)
    .then(notFound(res))
    .then((projectStatusCodes) => projectStatusCodes ? projectStatusCodes.remove() : null)
    .then(success(res, 204))
    .catch(next)
