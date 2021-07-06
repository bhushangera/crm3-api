import { success, notFound } from '../../services/response/'
import { Terminations } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Terminations.create(body)
    .then((terminations) => terminations.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select} }, res, next) =>
  Terminations.find(query, select)
    .then((terminations) => terminations.map((terminations) => terminations.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Terminations.findById(params.id)
    .then(notFound(res))
    .then((terminations) => terminations ? terminations.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Terminations.findById(params.id)
    .then(notFound(res))
    .then((terminations) => terminations ? Object.assign(terminations, body).save() : null)
    .then((terminations) => terminations ? terminations.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Terminations.findById(params.id)
    .then(notFound(res))
    .then((terminations) => terminations ? terminations.remove() : null)
    .then(success(res, 204))
    .catch(next)
