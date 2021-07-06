import { success, notFound } from '../../services/response/'
import { Designations } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Designations.create(body)
    .then((designations) => designations.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  Designations.find(query, select)
    .then((designations) => designations.map((designations) => designations.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Designations.findById(params.id)
    .then(notFound(res))
    .then((designations) => designations ? designations.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Designations.findById(params.id)
    .then(notFound(res))
    .then((designations) => designations ? Object.assign(designations, body).save() : null)
    .then((designations) => designations ? designations.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Designations.findById(params.id)
    .then(notFound(res))
    .then((designations) => designations ? designations.remove() : null)
    .then(success(res, 204))
    .catch(next)
