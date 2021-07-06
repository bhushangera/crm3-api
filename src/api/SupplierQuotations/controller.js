import { success, notFound } from '../../services/response/'
import { SupplierQuotations } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  SupplierQuotations.create(body)
    .then((supplierQuotations) => supplierQuotations.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select} }, res, next) =>
  SupplierQuotations.find(query, select)
    .then((supplierQuotations) => supplierQuotations.map((supplierQuotations) => supplierQuotations.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  SupplierQuotations.findById(params.id)
    .then(notFound(res))
    .then((supplierQuotations) => supplierQuotations ? supplierQuotations.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  SupplierQuotations.findById(params.id)
    .then(notFound(res))
    .then((supplierQuotations) => supplierQuotations ? Object.assign(supplierQuotations, body).save() : null)
    .then((supplierQuotations) => supplierQuotations ? supplierQuotations.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  SupplierQuotations.findById(params.id)
    .then(notFound(res))
    .then((supplierQuotations) => supplierQuotations ? supplierQuotations.remove() : null)
    .then(success(res, 204))
    .catch(next)
