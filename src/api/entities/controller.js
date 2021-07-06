import { success, notFound } from '../../services/response/'
import { Entities } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Entities.create(body)
    .then((entities) => entities.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  Entities.find(query, select)
    .then((entities) => entities.map((entities) => entities.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Entities.findById(params.id)
    .then(notFound(res))
    .then((entities) => entities ? entities.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Entities.findById(params.id)
    .then(notFound(res))
    .then((entities) => entities ? Object.assign(entities, body).save() : null)
    .then((entities) => entities ? entities.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Entities.findById(params.id)
    .then(notFound(res))
    .then((entities) => entities ? entities.remove() : null)
    .then(success(res, 204))
    .catch(next)
