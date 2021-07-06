import { success, notFound } from '../../services/response/'
import { Roles } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Roles.create(body)
    .then((roles) => roles.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  Roles.find(query, select)
    .then((roles) => roles.map((roles) => roles.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Roles.findById(params.id)
    .then(notFound(res))
    .then((roles) => roles ? roles.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Roles.findById(params.id)
    .then(notFound(res))
    .then((roles) => roles ? Object.assign(roles, body).save() : null)
    .then((roles) => roles ? roles.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Roles.findById(params.id)
    .then(notFound(res))
    .then((roles) => roles ? roles.remove() : null)
    .then(success(res, 204))
    .catch(next)
