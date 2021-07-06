import { success, notFound } from '../../services/response/'
import { SmsCounter } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  SmsCounter.create(body)
    .then((smsCounter) => smsCounter.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select} }, res, next) =>
  SmsCounter.find(query, select)
    .then((smsCounters) => smsCounters.map((smsCounter) => smsCounter.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  SmsCounter.findById(params.id)
    .then(notFound(res))
    .then((smsCounter) => smsCounter ? smsCounter.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  SmsCounter.findById(params.id)
    .then(notFound(res))
    .then((smsCounter) => smsCounter ? Object.assign(smsCounter, body).save() : null)
    .then((smsCounter) => smsCounter ? smsCounter.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  SmsCounter.findById(params.id)
    .then(notFound(res))
    .then((smsCounter) => smsCounter ? smsCounter.remove() : null)
    .then(success(res, 204))
    .catch(next)
