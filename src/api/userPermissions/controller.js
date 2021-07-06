import { success, notFound } from '../../services/response/'
import { UserPermissions } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  UserPermissions.create(body)
    .then((userPermissions) => userPermissions.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  UserPermissions.find(query, select)
    .then((userPermissions) => userPermissions.map((userPermissions) => userPermissions.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  UserPermissions.findById(params.id)
    .then(notFound(res))
    .then((userPermissions) => userPermissions ? userPermissions.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  UserPermissions.findById(params.id)
    .then(notFound(res))
    .then((userPermissions) => userPermissions ? Object.assign(userPermissions, body).save() : null)
    .then((userPermissions) => userPermissions ? userPermissions.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  UserPermissions.findById(params.id)
    .then(notFound(res))
    .then((userPermissions) => userPermissions ? userPermissions.remove() : null)
    .then(success(res, 204))
    .catch(next)
