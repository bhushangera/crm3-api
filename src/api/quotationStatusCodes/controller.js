import { success, notFound } from '../../services/response/'
import { QuotationStatusCodes } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  QuotationStatusCodes.create(body)
    .then((quotationStatusCodes) => quotationStatusCodes.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  QuotationStatusCodes.find(query, select)
    .then((quotationStatusCodes) => quotationStatusCodes.map((quotationStatusCodes) => quotationStatusCodes.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  QuotationStatusCodes.findById(params.id)
    .then(notFound(res))
    .then((quotationStatusCodes) => quotationStatusCodes ? quotationStatusCodes.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  QuotationStatusCodes.findById(params.id)
    .then(notFound(res))
    .then((quotationStatusCodes) => quotationStatusCodes ? Object.assign(quotationStatusCodes, body).save() : null)
    .then((quotationStatusCodes) => quotationStatusCodes ? quotationStatusCodes.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  QuotationStatusCodes.findById(params.id)
    .then(notFound(res))
    .then((quotationStatusCodes) => quotationStatusCodes ? quotationStatusCodes.remove() : null)
    .then(success(res, 204))
    .catch(next)
