import { success, notFound } from '../../services/response/'
import { SerialNumbers } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  SerialNumbers.create(body)
    .then((serialNumbers) => serialNumbers.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select} }, res, next) =>
  SerialNumbers.find(query, select)
    .then((serialNumbers) => serialNumbers.map((serialNumbers) => serialNumbers.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  SerialNumbers.findById(params.id)
    .then(notFound(res))
    .then((serialNumbers) => serialNumbers ? serialNumbers.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  SerialNumbers.findById(params.id)
    .then(notFound(res))
    .then((serialNumbers) => serialNumbers ? Object.assign(serialNumbers, body).save() : null)
    .then((serialNumbers) => serialNumbers ? serialNumbers.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  SerialNumbers.findById(params.id)
    .then(notFound(res))
    .then((serialNumbers) => serialNumbers ? serialNumbers.remove() : null)
    .then(success(res, 204))
    .catch(next)
