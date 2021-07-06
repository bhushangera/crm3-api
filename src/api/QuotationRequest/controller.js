import { success, notFound } from '../../services/response/'
import { QuotationRequest } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  QuotationRequest.create(body)
    .then((quotationRequest) => quotationRequest.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select} }, res, next) =>
  QuotationRequest.find(query, select)
    .then((quotationRequests) => quotationRequests.map((quotationRequest) => quotationRequest.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  QuotationRequest.findById(params.id)
    .then(notFound(res))
    .then((quotationRequest) => quotationRequest ? quotationRequest.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  QuotationRequest.findById(params.id)
    .then(notFound(res))
    .then((quotationRequest) => quotationRequest ? Object.assign(quotationRequest, body).save() : null)
    .then((quotationRequest) => quotationRequest ? quotationRequest.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  QuotationRequest.findById(params.id)
    .then(notFound(res))
    .then((quotationRequest) => quotationRequest ? quotationRequest.remove() : null)
    .then(success(res, 204))
    .catch(next)
