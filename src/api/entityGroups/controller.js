import { success, notFound } from '../../services/response/'
import { EntityGroups } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  EntityGroups.create(body)
    .then((entityGroups) => entityGroups.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  EntityGroups.find(query, select)
    .then((entityGroups) => entityGroups.map((entityGroups) => entityGroups.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  EntityGroups.findById(params.id)
    .then(notFound(res))
    .then((entityGroups) => entityGroups ? entityGroups.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  EntityGroups.findById(params.id)
    .then(notFound(res))
    .then((entityGroups) => entityGroups ? Object.assign(entityGroups, body).save() : null)
    .then((entityGroups) => entityGroups ? entityGroups.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  EntityGroups.findById(params.id)
    .then(notFound(res))
    .then((entityGroups) => entityGroups ? entityGroups.remove() : null)
    .then(success(res, 204))
    .catch(next)
