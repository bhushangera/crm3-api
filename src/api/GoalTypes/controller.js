import { success, notFound } from '../../services/response/'
import { GoalTypes } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  GoalTypes.create(body)
    .then((goalTypes) => goalTypes.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select} }, res, next) =>
  GoalTypes.find(query, select)
    .then((goalTypes) => goalTypes.map((goalTypes) => goalTypes.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  GoalTypes.findById(params.id)
    .then(notFound(res))
    .then((goalTypes) => goalTypes ? goalTypes.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  GoalTypes.findById(params.id)
    .then(notFound(res))
    .then((goalTypes) => goalTypes ? Object.assign(goalTypes, body).save() : null)
    .then((goalTypes) => goalTypes ? goalTypes.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  GoalTypes.findById(params.id)
    .then(notFound(res))
    .then((goalTypes) => goalTypes ? goalTypes.remove() : null)
    .then(success(res, 204))
    .catch(next)
