import { success, notFound } from '../../services/response/'
import { Trainings } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Trainings.create(body)
    .then((trainings) => trainings.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select} }, res, next) =>
  Trainings.find(query, select)
    .then((trainings) => trainings.map((trainings) => trainings.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Trainings.findById(params.id)
    .then(notFound(res))
    .then((trainings) => trainings ? trainings.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Trainings.findById(params.id)
    .then(notFound(res))
    .then((trainings) => trainings ? Object.assign(trainings, body).save() : null)
    .then((trainings) => trainings ? trainings.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Trainings.findById(params.id)
    .then(notFound(res))
    .then((trainings) => trainings ? trainings.remove() : null)
    .then(success(res, 204))
    .catch(next)
