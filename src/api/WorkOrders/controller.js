import { success, notFound } from '../../services/response/'
import { WorkOrders } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  WorkOrders.create(body)
    .then((workOrders) => workOrders.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select} }, res, next) =>
  WorkOrders.find(query, select)
    .then((workOrders) => workOrders.map((workOrders) => workOrders.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  WorkOrders.findById(params.id)
    .then(notFound(res))
    .then((workOrders) => workOrders ? workOrders.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  WorkOrders.findById(params.id)
    .then(notFound(res))
    .then((workOrders) => workOrders ? Object.assign(workOrders, body).save() : null)
    .then((workOrders) => workOrders ? workOrders.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  WorkOrders.findById(params.id)
    .then(notFound(res))
    .then((workOrders) => workOrders ? workOrders.remove() : null)
    .then(success(res, 204))
    .catch(next)
