import { success, notFound } from '../../services/response/'
import { OrderShippingDetail } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  OrderShippingDetail.create(body)
    .then((orderShippingDetail) => orderShippingDetail.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  OrderShippingDetail.find(query, select)
    .then((orderShippingDetails) => orderShippingDetails.map((orderShippingDetail) => orderShippingDetail.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  OrderShippingDetail.findById(params.id)
    .then(notFound(res))
    .then((orderShippingDetail) => orderShippingDetail ? orderShippingDetail.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  OrderShippingDetail.findById(params.id)
    .then(notFound(res))
    .then((orderShippingDetail) => orderShippingDetail ? Object.assign(orderShippingDetail, body).save() : null)
    .then((orderShippingDetail) => orderShippingDetail ? orderShippingDetail.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  OrderShippingDetail.findById(params.id)
    .then(notFound(res))
    .then((orderShippingDetail) => orderShippingDetail ? orderShippingDetail.remove() : null)
    .then(success(res, 204))
    .catch(next)
