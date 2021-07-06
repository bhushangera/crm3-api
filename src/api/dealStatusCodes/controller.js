import { success, notFound } from '../../services/response/'
import { DealStatusCodes } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  DealStatusCodes.create(body)
    .then((dealStatusCodes) => dealStatusCodes.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  DealStatusCodes.find(query, select)
    .then((dealStatusCodes) => dealStatusCodes.map((dealStatusCodes) => dealStatusCodes.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  DealStatusCodes.findById(params.id)
    .then(notFound(res))
    .then((dealStatusCodes) => dealStatusCodes ? dealStatusCodes.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  DealStatusCodes.findById(params.id)
    .then(notFound(res))
    .then((dealStatusCodes) => dealStatusCodes ? Object.assign(dealStatusCodes, body).save() : null)
    .then((dealStatusCodes) => dealStatusCodes ? dealStatusCodes.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  DealStatusCodes.findById(params.id)
    .then(notFound(res))
    .then((dealStatusCodes) => dealStatusCodes ? dealStatusCodes.remove() : null)
    .then(success(res, 204))
    .catch(next)
