import { success, notFound } from '../../services/response/'
import { Notifications } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Notifications.create(body)
    .then((notifications) => notifications.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select} }, res, next) =>
  Notifications.find(query, select)
    .then((notifications) => notifications.map((notifications) => notifications.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Notifications.findById(params.id)
    .then(notFound(res))
    .then((notifications) => notifications ? notifications.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Notifications.findById(params.id)
    .then(notFound(res))
    .then((notifications) => notifications ? Object.assign(notifications, body).save() : null)
    .then((notifications) => notifications ? notifications.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Notifications.findById(params.id)
    .then(notFound(res))
    .then((notifications) => notifications ? notifications.remove() : null)
    .then(success(res, 204))
    .catch(next)
