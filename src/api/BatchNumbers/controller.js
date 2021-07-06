import { success, notFound } from '../../services/response/'
import { BatchNumbers } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  BatchNumbers.create(body)
    .then((batchNumbers) => batchNumbers.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select} }, res, next) =>
  BatchNumbers.find(query, select)
    .then((batchNumbers) => batchNumbers.map((batchNumbers) => batchNumbers.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  BatchNumbers.findById(params.id)
    .then(notFound(res))
    .then((batchNumbers) => batchNumbers ? batchNumbers.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  BatchNumbers.findById(params.id)
    .then(notFound(res))
    .then((batchNumbers) => batchNumbers ? Object.assign(batchNumbers, body).save() : null)
    .then((batchNumbers) => batchNumbers ? batchNumbers.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  BatchNumbers.findById(params.id)
    .then(notFound(res))
    .then((batchNumbers) => batchNumbers ? batchNumbers.remove() : null)
    .then(success(res, 204))
    .catch(next)
