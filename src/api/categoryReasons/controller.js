import { success, notFound } from '../../services/response/'
import { CategoryReasons } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  CategoryReasons.create(body)
    .then((categoryReasons) => categoryReasons.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  CategoryReasons.find(query, select)
    .then((categoryReasons) => categoryReasons.map((categoryReasons) => categoryReasons.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  CategoryReasons.findById(params.id)
    .then(notFound(res))
    .then((categoryReasons) => categoryReasons ? categoryReasons.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  CategoryReasons.findById(params.id)
    .then(notFound(res))
    .then((categoryReasons) => categoryReasons ? Object.assign(categoryReasons, body).save() : null)
    .then((categoryReasons) => categoryReasons ? categoryReasons.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  CategoryReasons.findById(params.id)
    .then(notFound(res))
    .then((categoryReasons) => categoryReasons ? categoryReasons.remove() : null)
    .then(success(res, 204))
    .catch(next)
