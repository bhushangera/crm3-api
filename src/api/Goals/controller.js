import { success, notFound } from '../../services/response/'
import { Goals } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Goals.create(body)
    .then((goals) => goals.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select} }, res, next) =>
  Goals.find(query, select)
    .then((goals) => goals.map((goals) => goals.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Goals.findById(params.id)
    .then(notFound(res))
    .then((goals) => goals ? goals.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Goals.findById(params.id)
    .then(notFound(res))
    .then((goals) => goals ? Object.assign(goals, body).save() : null)
    .then((goals) => goals ? goals.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Goals.findById(params.id)
    .then(notFound(res))
    .then((goals) => goals ? goals.remove() : null)
    .then(success(res, 204))
    .catch(next)
