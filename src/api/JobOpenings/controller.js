import { success, notFound } from '../../services/response/'
import { JobOpenings } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  JobOpenings.create(body)
    .then((jobOpenings) => jobOpenings.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select} }, res, next) =>
  JobOpenings.find(query, select)
    .then((jobOpenings) => jobOpenings.map((jobOpenings) => jobOpenings.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  JobOpenings.findById(params.id)
    .then(notFound(res))
    .then((jobOpenings) => jobOpenings ? jobOpenings.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  JobOpenings.findById(params.id)
    .then(notFound(res))
    .then((jobOpenings) => jobOpenings ? Object.assign(jobOpenings, body).save() : null)
    .then((jobOpenings) => jobOpenings ? jobOpenings.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  JobOpenings.findById(params.id)
    .then(notFound(res))
    .then((jobOpenings) => jobOpenings ? jobOpenings.remove() : null)
    .then(success(res, 204))
    .catch(next)
