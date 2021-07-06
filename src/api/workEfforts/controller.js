import { success, notFound } from '../../services/response/'
import { WorkEfforts } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  WorkEfforts.create(body)
    .then((workEfforts) => workEfforts.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  WorkEfforts.find(query, select)
    .then((workEfforts) => workEfforts.map((workEfforts) => workEfforts.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  WorkEfforts.findById(params.id)
    .then(notFound(res))
    .then((workEfforts) => workEfforts ? workEfforts.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  WorkEfforts.findById(params.id)
    .then(notFound(res))
    .then((workEfforts) => workEfforts ? Object.assign(workEfforts, body).save() : null)
    .then((workEfforts) => workEfforts ? workEfforts.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  WorkEfforts.findById(params.id)
    .then(notFound(res))
    .then((workEfforts) => workEfforts ? workEfforts.remove() : null)
    .then(success(res, 204))
    .catch(next)
