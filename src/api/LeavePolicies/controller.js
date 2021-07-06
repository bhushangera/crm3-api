import { success, notFound } from '../../services/response/'
import { LeavePolicies } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  LeavePolicies.create(body)
    .then((leavePolicies) => leavePolicies.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select} }, res, next) =>
  LeavePolicies.find(query, select)
    .then((leavePolicies) => leavePolicies.map((leavePolicies) => leavePolicies.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  LeavePolicies.findById(params.id)
    .then(notFound(res))
    .then((leavePolicies) => leavePolicies ? leavePolicies.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  LeavePolicies.findById(params.id)
    .then(notFound(res))
    .then((leavePolicies) => leavePolicies ? Object.assign(leavePolicies, body).save() : null)
    .then((leavePolicies) => leavePolicies ? leavePolicies.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  LeavePolicies.findById(params.id)
    .then(notFound(res))
    .then((leavePolicies) => leavePolicies ? leavePolicies.remove() : null)
    .then(success(res, 204))
    .catch(next)
