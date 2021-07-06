import { success, notFound } from '../../services/response/'
import { Territories } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Territories.create(body)
    .then((territories) => territories.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  Territories.find(query, select)
    .then((territories) => territories.map((territories) => territories.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Territories.findById(params.id)
    .then(notFound(res))
    .then((territories) => territories ? territories.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Territories.findById(params.id)
    .then(notFound(res))
    .then((territories) => territories ? Object.assign(territories, body).save() : null)
    .then((territories) => territories ? territories.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Territories.findById(params.id)
    .then(notFound(res))
    .then((territories) => territories ? territories.remove() : null)
    .then(success(res, 204))
    .catch(next)
