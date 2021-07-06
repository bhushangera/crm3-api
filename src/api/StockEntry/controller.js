import { success, notFound } from '../../services/response/'
import { StockEntry } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  StockEntry.create(body)
    .then((stockEntry) => stockEntry.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select} }, res, next) =>
  StockEntry.find(query, select)
    .then((stockEntries) => stockEntries.map((stockEntry) => stockEntry.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  StockEntry.findById(params.id)
    .then(notFound(res))
    .then((stockEntry) => stockEntry ? stockEntry.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  StockEntry.findById(params.id)
    .then(notFound(res))
    .then((stockEntry) => stockEntry ? Object.assign(stockEntry, body).save() : null)
    .then((stockEntry) => stockEntry ? stockEntry.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  StockEntry.findById(params.id)
    .then(notFound(res))
    .then((stockEntry) => stockEntry ? stockEntry.remove() : null)
    .then(success(res, 204))
    .catch(next)
