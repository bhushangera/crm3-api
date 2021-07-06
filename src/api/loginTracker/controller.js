import { success, notFound } from '../../services/response/'
import { LoginTracker } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  LoginTracker.create(body)
    .then((loginTracker) => loginTracker.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  LoginTracker.find(query, select)
    .then((loginTrackers) => loginTrackers.map((loginTracker) => loginTracker.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  LoginTracker.findById(params.id)
    .then(notFound(res))
    .then((loginTracker) => loginTracker ? loginTracker.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  LoginTracker.findById(params.id)
    .then(notFound(res))
    .then((loginTracker) => loginTracker ? Object.assign(loginTracker, body).save() : null)
    .then((loginTracker) => loginTracker ? loginTracker.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  LoginTracker.findById(params.id)
    .then(notFound(res))
    .then((loginTracker) => loginTracker ? loginTracker.remove() : null)
    .then(success(res, 204))
    .catch(next)
