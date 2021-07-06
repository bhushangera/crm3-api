import { success, notFound } from '../../services/response/'
import { VisitorTypes } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  VisitorTypes.create(body)
    .then((visitorTypes) => visitorTypes.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select} }, res, next) =>
  VisitorTypes.find(query, select)
    .then((visitorTypes) => visitorTypes.map((visitorTypes) => visitorTypes.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  VisitorTypes.findById(params.id)
    .then(notFound(res))
    .then((visitorTypes) => visitorTypes ? visitorTypes.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  VisitorTypes.findById(params.id)
    .then(notFound(res))
    .then((visitorTypes) => visitorTypes ? Object.assign(visitorTypes, body).save() : null)
    .then((visitorTypes) => visitorTypes ? visitorTypes.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  VisitorTypes.findById(params.id)
    .then(notFound(res))
    .then((visitorTypes) => visitorTypes ? visitorTypes.remove() : null)
    .then(success(res, 204))
    .catch(next)
