import { success, notFound } from '../../services/response/'
import { PartCategories } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  PartCategories.create(body)
    .then((partCategories) => partCategories.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  PartCategories.find(query, select)
    .then((partCategories) => partCategories.map((partCategories) => partCategories.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  PartCategories.findById(params.id)
    .then(notFound(res))
    .then((partCategories) => partCategories ? partCategories.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  PartCategories.findById(params.id)
    .then(notFound(res))
    .then((partCategories) => partCategories ? Object.assign(partCategories, body).save() : null)
    .then((partCategories) => partCategories ? partCategories.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  PartCategories.findById(params.id)
    .then(notFound(res))
    .then((partCategories) => partCategories ? partCategories.remove() : null)
    .then(success(res, 204))
    .catch(next)
