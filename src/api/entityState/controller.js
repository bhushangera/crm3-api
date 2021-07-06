import { success, notFound } from '../../services/response/'
import { EntityState } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  EntityState.create(body)
    .then((entityState) => entityState.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  EntityState.find(query, select)
    .then((entityStates) => entityStates.map((entityState) => entityState.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  EntityState.findById(params.id)
    .then(notFound(res))
    .then((entityState) => entityState ? entityState.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  EntityState.findById(params.id)
    .then(notFound(res))
    .then((entityState) => entityState ? Object.assign(entityState, body).save() : null)
    .then((entityState) => entityState ? entityState.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  EntityState.findById(params.id)
    .then(notFound(res))
    .then((entityState) => entityState ? entityState.remove() : null)
    .then(success(res, 204))
    .catch(next)
