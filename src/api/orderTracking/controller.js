import { success, notFound } from '../../services/response/'
import { OrderTracking } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  OrderTracking.create(body)
    .then((orderTracking) => orderTracking.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  OrderTracking.find(query, select)
    .then((orderTrackings) => orderTrackings.map((orderTracking) => orderTracking.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  OrderTracking.findById(params.id)
    .then(notFound(res))
    .then((orderTracking) => orderTracking ? orderTracking.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  OrderTracking.findById(params.id)
    .then(notFound(res))
    .then((orderTracking) => orderTracking ? Object.assign(orderTracking, body).save() : null)
    .then((orderTracking) => orderTracking ? orderTracking.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  OrderTracking.findById(params.id)
    .then(notFound(res))
    .then((orderTracking) => orderTracking ? orderTracking.remove() : null)
    .then(success(res, 204))
    .catch(next)
