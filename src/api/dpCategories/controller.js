import { success, notFound } from '../../services/response/'
import { DpCategories } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  DpCategories.create(body)
    .then((dpCategories) => dpCategories.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  DpCategories.find(query, select)
    .then((dpCategories) => dpCategories.map((dpCategories) => dpCategories.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  DpCategories.findById(params.id)
    .then(notFound(res))
    .then((dpCategories) => dpCategories ? dpCategories.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  DpCategories.findById(params.id)
    .then(notFound(res))
    .then((dpCategories) => dpCategories ? Object.assign(dpCategories, body).save() : null)
    .then((dpCategories) => dpCategories ? dpCategories.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  DpCategories.findById(params.id)
    .then(notFound(res))
    .then((dpCategories) => dpCategories ? dpCategories.remove() : null)
    .then(success(res, 204))
    .catch(next)
