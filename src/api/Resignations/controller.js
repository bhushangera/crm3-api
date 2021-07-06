import { success, notFound } from '../../services/response/'
import { Resignations } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Resignations.create(body)
    .then((resignations) => resignations.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select} }, res, next) =>
  Resignations.find(query, select)
    .then((resignations) => resignations.map((resignations) => resignations.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Resignations.findById(params.id)
    .then(notFound(res))
    .then((resignations) => resignations ? resignations.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Resignations.findById(params.id)
    .then(notFound(res))
    .then((resignations) => resignations ? Object.assign(resignations, body).save() : null)
    .then((resignations) => resignations ? resignations.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Resignations.findById(params.id)
    .then(notFound(res))
    .then((resignations) => resignations ? resignations.remove() : null)
    .then(success(res, 204))
    .catch(next)
