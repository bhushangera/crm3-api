import { success, notFound } from '../../services/response/'
import { PromoEmails } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  PromoEmails.create(body)
    .then((promoEmails) => promoEmails.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select} }, res, next) =>
  PromoEmails.find(query, select)
    .then((promoEmails) => promoEmails.map((promoEmails) => promoEmails.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  PromoEmails.findById(params.id)
    .then(notFound(res))
    .then((promoEmails) => promoEmails ? promoEmails.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  PromoEmails.findById(params.id)
    .then(notFound(res))
    .then((promoEmails) => promoEmails ? Object.assign(promoEmails, body).save() : null)
    .then((promoEmails) => promoEmails ? promoEmails.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  PromoEmails.findById(params.id)
    .then(notFound(res))
    .then((promoEmails) => promoEmails ? promoEmails.remove() : null)
    .then(success(res, 204))
    .catch(next)
