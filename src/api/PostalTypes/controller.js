import { success, notFound } from '../../services/response/'
import { PostalTypes } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  PostalTypes.create(body)
    .then((postalTypes) => postalTypes.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  PostalTypes.find(query, select)
    .then((postalTypes) => postalTypes.map((postalTypes) => postalTypes.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  PostalTypes.findById(params.id)
    .then(notFound(res))
    .then((postalTypes) => postalTypes ? postalTypes.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  PostalTypes.findById(params.id)
    .then(notFound(res))
    .then((postalTypes) => postalTypes ? Object.assign(postalTypes, body).save() : null)
    .then((postalTypes) => postalTypes ? postalTypes.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  PostalTypes.findById(params.id)
    .then(notFound(res))
    .then((postalTypes) => postalTypes ? postalTypes.remove() : null)
    .then(success(res, 204))
    .catch(next)
