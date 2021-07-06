import { success, notFound } from '../../services/response/'
import { Postal } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Postal.create(body)
    .then((postal) => postal.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  Postal.find(query, select)
    .then((postals) => postals.map((postal) => postal.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Postal.findById(params.id)
    .then(notFound(res))
    .then((postal) => postal ? postal.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Postal.findById(params.id)
    .then(notFound(res))
    .then((postal) => postal ? Object.assign(postal, body).save() : null)
    .then((postal) => postal ? postal.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Postal.findById(params.id)
    .then(notFound(res))
    .then((postal) => postal ? postal.remove() : null)
    .then(success(res, 204))
    .catch(next)
