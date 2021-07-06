import { success, notFound } from '../../services/response/'
import { Transfers } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Transfers.create(body)
    .then((transfers) => transfers.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select} }, res, next) =>
  Transfers.find(query, select)
    .then((transfers) => transfers.map((transfers) => transfers.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Transfers.findById(params.id)
    .then(notFound(res))
    .then((transfers) => transfers ? transfers.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Transfers.findById(params.id)
    .then(notFound(res))
    .then((transfers) => transfers ? Object.assign(transfers, body).save() : null)
    .then((transfers) => transfers ? transfers.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Transfers.findById(params.id)
    .then(notFound(res))
    .then((transfers) => transfers ? transfers.remove() : null)
    .then(success(res, 204))
    .catch(next)
