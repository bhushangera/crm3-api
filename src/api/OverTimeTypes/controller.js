import { success, notFound } from '../../services/response/'
import { OverTimeTypes } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  OverTimeTypes.create(body)
    .then((overTimeTypes) => overTimeTypes.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select} }, res, next) =>
  OverTimeTypes.find(query, select)
    .then((overTimeTypes) => overTimeTypes.map((overTimeTypes) => overTimeTypes.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  OverTimeTypes.findById(params.id)
    .then(notFound(res))
    .then((overTimeTypes) => overTimeTypes ? overTimeTypes.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  OverTimeTypes.findById(params.id)
    .then(notFound(res))
    .then((overTimeTypes) => overTimeTypes ? Object.assign(overTimeTypes, body).save() : null)
    .then((overTimeTypes) => overTimeTypes ? overTimeTypes.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  OverTimeTypes.findById(params.id)
    .then(notFound(res))
    .then((overTimeTypes) => overTimeTypes ? overTimeTypes.remove() : null)
    .then(success(res, 204))
    .catch(next)
