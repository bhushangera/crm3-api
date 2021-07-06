import { success, notFound } from '../../services/response/'
import { CloudPlans } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  CloudPlans.create(body)
    .then((cloudPlans) => cloudPlans.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query } }, res, next) =>
  CloudPlans.find(query)
    .then((cloudPlans) => cloudPlans.map((cloudPlans) => cloudPlans.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  CloudPlans.findById(params.id)
    .then(notFound(res))
    .then((cloudPlans) => cloudPlans ? cloudPlans.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  CloudPlans.findById(params.id)
    .then(notFound(res))
    .then((cloudPlans) => cloudPlans ? Object.assign(cloudPlans, body).save() : null)
    .then((cloudPlans) => cloudPlans ? cloudPlans.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  CloudPlans.findById(params.id)
    .then(notFound(res))
    .then((cloudPlans) => cloudPlans ? cloudPlans.remove() : null)
    .then(success(res, 204))
    .catch(next)
