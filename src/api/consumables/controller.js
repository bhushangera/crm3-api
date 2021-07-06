import { success, notFound } from '../../services/response/'
import { Consumables } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Consumables.create(body)
    .then((consumables) => consumables.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  Consumables.find(query, select)
    .then((consumables) => consumables.map((consumables) => consumables.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Consumables.findById(params.id)
    .then(notFound(res))
    .then((consumables) => consumables ? consumables.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Consumables.findById(params.id)
    .then(notFound(res))
    .then((consumables) => consumables ? Object.assign(consumables, body).save() : null)
    .then((consumables) => consumables ? consumables.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Consumables.findById(params.id)
    .then(notFound(res))
    .then((consumables) => consumables ? consumables.remove() : null)
    .then(success(res, 204))
    .catch(next)
