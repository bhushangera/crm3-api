import { success, notFound } from '../../services/response/'
import { Accountingquarters } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Accountingquarters.create(body)
    .then((accountingquarters) => accountingquarters.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select} }, res, next) =>
  Accountingquarters.find(query, select)
    .then((accountingquarters) => accountingquarters.map((accountingquarters) => accountingquarters.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Accountingquarters.findById(params.id)
    .then(notFound(res))
    .then((accountingquarters) => accountingquarters ? accountingquarters.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Accountingquarters.findById(params.id)
    .then(notFound(res))
    .then((accountingquarters) => accountingquarters ? Object.assign(accountingquarters, body).save() : null)
    .then((accountingquarters) => accountingquarters ? accountingquarters.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Accountingquarters.findById(params.id)
    .then(notFound(res))
    .then((accountingquarters) => accountingquarters ? accountingquarters.remove() : null)
    .then(success(res, 204))
    .catch(next)
