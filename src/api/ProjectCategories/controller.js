import { success, notFound } from '../../services/response/'
import { ProjectCategories } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  ProjectCategories.create(body)
    .then((projectCategories) => projectCategories.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select} }, res, next) =>
  ProjectCategories.find(query, select)
    .then((projectCategories) => projectCategories.map((projectCategories) => projectCategories.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  ProjectCategories.findById(params.id)
    .then(notFound(res))
    .then((projectCategories) => projectCategories ? projectCategories.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  ProjectCategories.findById(params.id)
    .then(notFound(res))
    .then((projectCategories) => projectCategories ? Object.assign(projectCategories, body).save() : null)
    .then((projectCategories) => projectCategories ? projectCategories.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  ProjectCategories.findById(params.id)
    .then(notFound(res))
    .then((projectCategories) => projectCategories ? projectCategories.remove() : null)
    .then(success(res, 204))
    .catch(next)
