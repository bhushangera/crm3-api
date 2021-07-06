import { success, notFound } from '../../services/response/'
import { Permissions } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Permissions.create(body)
    .then((permissions) => permissions.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  Permissions.find(query, select)
    .then((permissions) => permissions.map((permissions) => permissions.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Permissions.findById(params.id)
    .then(notFound(res))
    .then((permissions) => permissions ? permissions.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Permissions.findById(params.id)
    .then(notFound(res))
    .then((permissions) => permissions ? Object.assign(permissions, body).save() : null)
    .then((permissions) => permissions ? permissions.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Permissions.findById(params.id)
    .then(notFound(res))
    .then((permissions) => permissions ? permissions.remove() : null)
    .then(success(res, 204))
    .catch(next)
