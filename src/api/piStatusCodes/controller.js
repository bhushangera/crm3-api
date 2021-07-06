import { success, notFound } from '../../services/response/'
import { PiStatusCodes } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  PiStatusCodes.create(body)
    .then((piStatusCodes) => piStatusCodes.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  PiStatusCodes.find(query, select)
    .then((piStatusCodes) => piStatusCodes.map((piStatusCodes) => piStatusCodes.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  PiStatusCodes.findById(params.id)
    .then(notFound(res))
    .then((piStatusCodes) => piStatusCodes ? piStatusCodes.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  PiStatusCodes.findById(params.id)
    .then(notFound(res))
    .then((piStatusCodes) => piStatusCodes ? Object.assign(piStatusCodes, body).save() : null)
    .then((piStatusCodes) => piStatusCodes ? piStatusCodes.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  PiStatusCodes.findById(params.id)
    .then(notFound(res))
    .then((piStatusCodes) => piStatusCodes ? piStatusCodes.remove() : null)
    .then(success(res, 204))
    .catch(next)
