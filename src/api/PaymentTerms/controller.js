import { success, notFound } from '../../services/response/'
import { PaymentTerms } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  PaymentTerms.create(body)
    .then((paymentTerms) => paymentTerms.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select} }, res, next) =>
  PaymentTerms.find(query, select)
    .then((paymentTerms) => paymentTerms.map((paymentTerms) => paymentTerms.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  PaymentTerms.findById(params.id)
    .then(notFound(res))
    .then((paymentTerms) => paymentTerms ? paymentTerms.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  PaymentTerms.findById(params.id)
    .then(notFound(res))
    .then((paymentTerms) => paymentTerms ? Object.assign(paymentTerms, body).save() : null)
    .then((paymentTerms) => paymentTerms ? paymentTerms.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  PaymentTerms.findById(params.id)
    .then(notFound(res))
    .then((paymentTerms) => paymentTerms ? paymentTerms.remove() : null)
    .then(success(res, 204))
    .catch(next)
