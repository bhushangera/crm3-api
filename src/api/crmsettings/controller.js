import { success, notFound } from '../../services/response/'
import { Crmsettings } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Crmsettings.create(body)
    .then((crmsettings) => crmsettings.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query } }, res, next) =>
  Crmsettings.find(query)
    .then((crmsettings) => crmsettings.map((crmsettings) => crmsettings.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Crmsettings.findById(params.id)
    .then(notFound(res))
    .then((crmsettings) => crmsettings ? crmsettings.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Crmsettings.findById(params.id)
    .then(notFound(res))
    .then((crmsettings) => crmsettings ? Object.assign(crmsettings, body).save() : null)
    .then((crmsettings) => crmsettings ? crmsettings.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Crmsettings.findById(params.id)
    .then(notFound(res))
    .then((crmsettings) => crmsettings ? crmsettings.remove() : null)
    .then(success(res, 204))
    .catch(next)
