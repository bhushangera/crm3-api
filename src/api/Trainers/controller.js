import { success, notFound } from '../../services/response/'
import { Trainers } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Trainers.create(body)
    .then((trainers) => trainers.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select} }, res, next) =>
  Trainers.find(query, select)
    .then((trainers) => trainers.map((trainers) => trainers.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Trainers.findById(params.id)
    .then(notFound(res))
    .then((trainers) => trainers ? trainers.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Trainers.findById(params.id)
    .then(notFound(res))
    .then((trainers) => trainers ? Object.assign(trainers, body).save() : null)
    .then((trainers) => trainers ? trainers.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Trainers.findById(params.id)
    .then(notFound(res))
    .then((trainers) => trainers ? trainers.remove() : null)
    .then(success(res, 204))
    .catch(next)
