import { success, notFound } from '../../services/response/'
import { SalesOrders } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  SalesOrders.create(body)
    .then((salesOrders) => salesOrders.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select} }, res, next) =>
  SalesOrders.find(query, select)
    .then((salesOrders) => salesOrders.map((salesOrders) => salesOrders.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  SalesOrders.findById(params.id)
    .then(notFound(res))
    .then((salesOrders) => salesOrders ? salesOrders.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  SalesOrders.findById(params.id)
    .then(notFound(res))
    .then((salesOrders) => salesOrders ? Object.assign(salesOrders, body).save() : null)
    .then((salesOrders) => salesOrders ? salesOrders.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  SalesOrders.findById(params.id)
    .then(notFound(res))
    .then((salesOrders) => salesOrders ? salesOrders.remove() : null)
    .then(success(res, 204))
    .catch(next)
