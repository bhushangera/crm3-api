import { success, notFound } from '../../services/response/'
import { OrderPayment } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  OrderPayment.create(body)
    .then((orderPayment) => orderPayment.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  OrderPayment.find(query, select)
    .then((orderPayments) => orderPayments.map((orderPayment) => orderPayment.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  OrderPayment.findById(params.id)
    .then(notFound(res))
    .then((orderPayment) => orderPayment ? orderPayment.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  OrderPayment.findById(params.id)
    .then(notFound(res))
    .then((orderPayment) => orderPayment ? Object.assign(orderPayment, body).save() : null)
    .then((orderPayment) => orderPayment ? orderPayment.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  OrderPayment.findById(params.id)
    .then(notFound(res))
    .then((orderPayment) => orderPayment ? orderPayment.remove() : null)
    .then(success(res, 204))
    .catch(next)
