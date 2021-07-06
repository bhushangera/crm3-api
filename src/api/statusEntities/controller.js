import { success, notFound } from '../../services/response/'
import { StatusEntities } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  StatusEntities.create(body)
    .then((statusEntities) => statusEntities.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  StatusEntities.find(query, select)
    .then((statusEntities) => statusEntities.map((statusEntities) => statusEntities.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  StatusEntities.findById(params.id)
    .then(notFound(res))
    .then((statusEntities) => statusEntities ? statusEntities.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  StatusEntities.findById(params.id)
    .then(notFound(res))
    .then((statusEntities) => statusEntities ? Object.assign(statusEntities, body).save() : null)
    .then((statusEntities) => statusEntities ? statusEntities.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  StatusEntities.findById(params.id)
    .then(notFound(res))
    .then((statusEntities) => statusEntities ? statusEntities.remove() : null)
    .then(success(res, 204))
    .catch(next)
