import { success, notFound } from '../../services/response/'
import { CategoryCodes } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  CategoryCodes.create(body)
    .then((categoryCodes) => categoryCodes.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  CategoryCodes.find(query, select)
    .then((categoryCodes) => categoryCodes.map((categoryCodes) => categoryCodes.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  CategoryCodes.findById(params.id)
    .then(notFound(res))
    .then((categoryCodes) => categoryCodes ? categoryCodes.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  CategoryCodes.findById(params.id)
    .then(notFound(res))
    .then((categoryCodes) => categoryCodes ? Object.assign(categoryCodes, body).save() : null)
    .then((categoryCodes) => categoryCodes ? categoryCodes.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  CategoryCodes.findById(params.id)
    .then(notFound(res))
    .then((categoryCodes) => categoryCodes ? categoryCodes.remove() : null)
    .then(success(res, 204))
    .catch(next)
