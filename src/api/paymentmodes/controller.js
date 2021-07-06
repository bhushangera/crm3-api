import { success, notFound } from '../../services/response/'
import { PaymentModes } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  PaymentModes.create(body)
    .then((paymentModes) => paymentModes.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select} }, res, next) =>
  PaymentModes.find(query, select)
    .then((paymentModes) => paymentModes.map((paymentModes) => paymentModes.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  PaymentModes.findById(params.id)
    .then(notFound(res))
    .then((paymentModes) => paymentModes ? paymentModes.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  PaymentModes.findById(params.id)
    .then(notFound(res))
    .then((paymentModes) => paymentModes ? Object.assign(paymentModes, body).save() : null)
    .then((paymentModes) => paymentModes ? paymentModes.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  PaymentModes.findById(params.id)
    .then(notFound(res))
    .then((paymentModes) => paymentModes ? paymentModes.remove() : null)
    .then(success(res, 204))
    .catch(next)
