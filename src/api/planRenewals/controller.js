import { success, notFound } from '../../services/response/'
import { PlanRenewals } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  PlanRenewals.create(body)
    .then((planRenewals) => planRenewals.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query } }, res, next) =>
  PlanRenewals.find(query)
    .then((planRenewals) => planRenewals.map((planRenewals) => planRenewals.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  PlanRenewals.findById(params.id)
    .then(notFound(res))
    .then((planRenewals) => planRenewals ? planRenewals.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  PlanRenewals.findById(params.id)
    .then(notFound(res))
    .then((planRenewals) => planRenewals ? Object.assign(planRenewals, body).save() : null)
    .then((planRenewals) => planRenewals ? planRenewals.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  PlanRenewals.findById(params.id)
    .then(notFound(res))
    .then((planRenewals) => planRenewals ? planRenewals.remove() : null)
    .then(success(res, 204))
    .catch(next)
