import { success, notFound } from '../../services/response/'
import { Currency } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Currency.create(body)
    .then((currency) => currency.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query } }, res, next) =>
  Currency.find(query)
    .then((currencies) => currencies.map((currency) => currency.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Currency.findById(params.id)
    .then(notFound(res))
    .then((currency) => currency ? currency.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Currency.findById(params.id)
    .then(notFound(res))
    .then((currency) => currency ? Object.assign(currency, body).save() : null)
    .then((currency) => currency ? currency.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Currency.findById(params.id)
    .then(notFound(res))
    .then((currency) => currency ? currency.remove() : null)
    .then(success(res, 204))
    .catch(next)
