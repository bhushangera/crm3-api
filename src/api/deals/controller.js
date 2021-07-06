import { success, notFound } from '../../services/response/'
import { Deals } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Deals.create(body)
    .then((deals) => deals.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  Deals.find(query, select)
    .then((deals) => deals.map((deals) => deals.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Deals.findById(params.id)
    .then(notFound(res))
    .then((deals) => deals ? deals.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Deals.findById(params.id)
    .then(notFound(res))
    .then((deals) => deals ? Object.assign(deals, body).save() : null)
    .then((deals) => deals ? deals.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Deals.findById(params.id)
    .then(notFound(res))
    .then((deals) => deals ? deals.remove() : null)
    .then(success(res, 204))
    .catch(next)
