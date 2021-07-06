import { success, notFound } from '../../services/response/'
import { PurchaseOrders } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  PurchaseOrders.create(body)
    .then((purchaseOrders) => purchaseOrders.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select} }, res, next) =>
  PurchaseOrders.find(query, select)
    .then((purchaseOrders) => purchaseOrders.map((purchaseOrders) => purchaseOrders.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  PurchaseOrders.findById(params.id)
    .then(notFound(res))
    .then((purchaseOrders) => purchaseOrders ? purchaseOrders.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  PurchaseOrders.findById(params.id)
    .then(notFound(res))
    .then((purchaseOrders) => purchaseOrders ? Object.assign(purchaseOrders, body).save() : null)
    .then((purchaseOrders) => purchaseOrders ? purchaseOrders.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  PurchaseOrders.findById(params.id)
    .then(notFound(res))
    .then((purchaseOrders) => purchaseOrders ? purchaseOrders.remove() : null)
    .then(success(res, 204))
    .catch(next)
