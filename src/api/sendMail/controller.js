import { success, notFound } from '../../services/response/'
import { SendMail } from '.'


export const create = ({ bodymen: { body } }, res, next) =>
  SendMail.create(body)
    .then((sendMail) => sendMail.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  SendMail.count(query)
    .then(count => SendMail.find(query, select)
      .then((sendMails) => ({
        count,
        rows: sendMails.map((sendMail) => sendMail.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  SendMail.findById(params.id)
    .then(notFound(res))
    .then((sendMail) => sendMail ? sendMail.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  SendMail.findById(params.id)
    .then(notFound(res))
    .then((sendMail) => sendMail ? Object.assign(sendMail, body).save() : null)
    .then((sendMail) => sendMail ? sendMail.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  SendMail.findById(params.id)
    .then(notFound(res))
    .then((sendMail) => sendMail ? sendMail.remove() : null)
    .then(success(res, 204))
    .catch(next)
