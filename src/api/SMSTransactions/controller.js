import { success, notFound } from '../../services/response/'
import { SmsTransactions } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  SmsTransactions.create(body)
    .then((smsTransactions) => smsTransactions.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select} }, res, next) =>
  SmsTransactions.find(query, select)
    .then((smsTransactions) => smsTransactions.map((smsTransactions) => smsTransactions.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  SmsTransactions.findById(params.id)
    .then(notFound(res))
    .then((smsTransactions) => smsTransactions ? smsTransactions.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  SmsTransactions.findById(params.id)
    .then(notFound(res))
    .then((smsTransactions) => smsTransactions ? Object.assign(smsTransactions, body).save() : null)
    .then((smsTransactions) => smsTransactions ? smsTransactions.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  SmsTransactions.findById(params.id)
    .then(notFound(res))
    .then((smsTransactions) => smsTransactions ? smsTransactions.remove() : null)
    .then(success(res, 204))
    .catch(next)
