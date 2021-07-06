import { success, notFound } from '../../services/response/'
import { Plans } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Plans.create(body)
    .then((plans) => plans.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  Plans.find(query, select)
    .then((plans) => plans.map((plans) => plans.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Plans.findById(params.id)
    .then(notFound(res))
    .then((plans) => plans ? plans.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Plans.findById(params.id)
    .then(notFound(res))
    .then((plans) => plans ? Object.assign(plans, body).save() : null)
    .then((plans) => plans ? plans.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Plans.findById(params.id)
    .then(notFound(res))
    .then((plans) => plans ? plans.remove() : null)
    .then(success(res, 204))
    .catch(next)
