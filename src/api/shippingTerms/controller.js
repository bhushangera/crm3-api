import { success, notFound } from '../../services/response/'
import { ShippingTerms } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  ShippingTerms.create(body)
    .then((shippingTerms) => shippingTerms.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query } }, res, next) =>
  ShippingTerms.find(query)
    .then((shippingTerms) => shippingTerms.map((shippingTerms) => shippingTerms.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  ShippingTerms.findById(params.id)
    .then(notFound(res))
    .then((shippingTerms) => shippingTerms ? shippingTerms.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  ShippingTerms.findById(params.id)
    .then(notFound(res))
    .then((shippingTerms) => shippingTerms ? Object.assign(shippingTerms, body).save() : null)
    .then((shippingTerms) => shippingTerms ? shippingTerms.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  ShippingTerms.findById(params.id)
    .then(notFound(res))
    .then((shippingTerms) => shippingTerms ? shippingTerms.remove() : null)
    .then(success(res, 204))
    .catch(next)
