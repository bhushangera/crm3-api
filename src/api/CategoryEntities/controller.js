import { success, notFound } from '../../services/response/'
import { CategoryEntities } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  CategoryEntities.create(body)
    .then((categoryEntities) => categoryEntities.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  CategoryEntities.find(query, select)
    .then((categoryEntities) => categoryEntities.map((categoryEntities) => categoryEntities.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  CategoryEntities.findById(params.id)
    .then(notFound(res))
    .then((categoryEntities) => categoryEntities ? categoryEntities.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  CategoryEntities.findById(params.id)
    .then(notFound(res))
    .then((categoryEntities) => categoryEntities ? Object.assign(categoryEntities, body).save() : null)
    .then((categoryEntities) => categoryEntities ? categoryEntities.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  CategoryEntities.findById(params.id)
    .then(notFound(res))
    .then((categoryEntities) => categoryEntities ? categoryEntities.remove() : null)
    .then(success(res, 204))
    .catch(next)
