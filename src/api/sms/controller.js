import { success, notFound } from '../../services/response/'
import { Sms } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Sms.create(body)
    .then((sms) => sms.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select} }, res, next) =>
  Sms.find(query, select)
    .then((sms) => sms.map((sms) => sms.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Sms.findById(params.id)
    .then(notFound(res))
    .then((sms) => sms ? sms.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Sms.findById(params.id)
    .then(notFound(res))
    .then((sms) => sms ? Object.assign(sms, body).save() : null)
    .then((sms) => sms ? sms.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Sms.findById(params.id)
    .then(notFound(res))
    .then((sms) => sms ? sms.remove() : null)
    .then(success(res, 204))
    .catch(next)
