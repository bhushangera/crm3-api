import { success, notFound } from '../../services/response/'
import { Warehouse } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Warehouse.create(body)
    .then((warehouse) => warehouse.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select} }, res, next) =>
  Warehouse.find(query, select)
    .then((warehouses) => warehouses.map((warehouse) => warehouse.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Warehouse.findById(params.id)
    .then(notFound(res))
    .then((warehouse) => warehouse ? warehouse.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Warehouse.findById(params.id)
    .then(notFound(res))
    .then((warehouse) => warehouse ? Object.assign(warehouse, body).save() : null)
    .then((warehouse) => warehouse ? warehouse.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Warehouse.findById(params.id)
    .then(notFound(res))
    .then((warehouse) => warehouse ? warehouse.remove() : null)
    .then(success(res, 204))
    .catch(next)
