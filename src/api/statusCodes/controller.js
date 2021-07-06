import { success, notFound } from '../../services/response/'
import { StatusCodes } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  StatusCodes.create(body)
    .then((statusCodes) => statusCodes.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  StatusCodes.find(query, select)
    .then((statusCodes) => statusCodes.map((statusCodes) => statusCodes.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  StatusCodes.findById(params.id)
    .then(notFound(res))
    .then((statusCodes) => statusCodes ? statusCodes.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  StatusCodes.findById(params.id)
    .then(notFound(res))
    .then((statusCodes) => statusCodes ? Object.assign(statusCodes, body).save() : null)
    .then((statusCodes) => statusCodes ? statusCodes.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  StatusCodes.findById(params.id)
    .then(notFound(res))
    .then((statusCodes) => statusCodes ? statusCodes.remove() : null)
    .then(success(res, 204))
    .catch(next)
