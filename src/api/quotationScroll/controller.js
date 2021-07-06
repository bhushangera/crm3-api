import { success, notFound } from '../../services/response/'
import { QuotationScroll } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  QuotationScroll.create(body)
    .then((quotationScroll) => quotationScroll.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  QuotationScroll.find(query, select)
    .then((quotationScrolls) => quotationScrolls.map((quotationScroll) => quotationScroll.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  QuotationScroll.findById(params.id)
    .then(notFound(res))
    .then((quotationScroll) => quotationScroll ? quotationScroll.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  QuotationScroll.findById(params.id)
    .then(notFound(res))
    .then((quotationScroll) => quotationScroll ? Object.assign(quotationScroll, body).save() : null)
    .then((quotationScroll) => quotationScroll ? quotationScroll.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  QuotationScroll.findById(params.id)
    .then(notFound(res))
    .then((quotationScroll) => quotationScroll ? quotationScroll.remove() : null)
    .then(success(res, 204))
    .catch(next)
