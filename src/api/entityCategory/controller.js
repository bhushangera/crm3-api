import { success, notFound } from '../../services/response/'
import { EntityCategory } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  EntityCategory.create(body)
    .then((entityCategory) => entityCategory.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  EntityCategory.find(query, select)
    .then((entityCategories) => entityCategories.map((entityCategory) => entityCategory.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  EntityCategory.findById(params.id)
    .then(notFound(res))
    .then((entityCategory) => entityCategory ? entityCategory.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  EntityCategory.findById(params.id)
    .then(notFound(res))
    .then((entityCategory) => entityCategory ? Object.assign(entityCategory, body).save() : null)
    .then((entityCategory) => entityCategory ? entityCategory.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  EntityCategory.findById(params.id)
    .then(notFound(res))
    .then((entityCategory) => entityCategory ? entityCategory.remove() : null)
    .then(success(res, 204))
    .catch(next)
