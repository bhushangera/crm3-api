import { success, notFound } from '../../services/response/'
import { WorkEffortTypes } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  WorkEffortTypes.create(body)
    .then((workEffortTypes) => workEffortTypes.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  WorkEffortTypes.find(query, select)
    .then((workEffortTypes) => workEffortTypes.map((workEffortTypes) => workEffortTypes.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  WorkEffortTypes.findById(params.id)
    .then(notFound(res))
    .then((workEffortTypes) => workEffortTypes ? workEffortTypes.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  WorkEffortTypes.findById(params.id)
    .then(notFound(res))
    .then((workEffortTypes) => workEffortTypes ? Object.assign(workEffortTypes, body).save() : null)
    .then((workEffortTypes) => workEffortTypes ? workEffortTypes.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  WorkEffortTypes.findById(params.id)
    .then(notFound(res))
    .then((workEffortTypes) => workEffortTypes ? workEffortTypes.remove() : null)
    .then(success(res, 204))
    .catch(next)
