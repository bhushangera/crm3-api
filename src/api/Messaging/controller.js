import { success, notFound } from '../../services/response/'
import { Messaging } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Messaging.create(body)
    .then((messaging) => messaging.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select} }, res, next) =>
  Messaging.find(query, select)
    .then((messagings) => messagings.map((messaging) => messaging.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Messaging.findById(params.id)
    .then(notFound(res))
    .then((messaging) => messaging ? messaging.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Messaging.findById(params.id)
    .then(notFound(res))
    .then((messaging) => messaging ? Object.assign(messaging, body).save() : null)
    .then((messaging) => messaging ? messaging.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Messaging.findById(params.id)
    .then(notFound(res))
    .then((messaging) => messaging ? messaging.remove() : null)
    .then(success(res, 204))
    .catch(next)
