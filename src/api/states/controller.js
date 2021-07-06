import { success, notFound } from '../../services/response/'
import { States } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  States.create(body)
    .then((states) => states.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  States.find(query, select)
    .then((states) => states.map((states) => states.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  States.findById(params.id)
    .then(notFound(res))
    .then((states) => states ? states.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  States.findById(params.id)
    .then(notFound(res))
    .then((states) => states ? Object.assign(states, body).save() : null)
    .then((states) => states ? states.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  States.findById(params.id)
    .then(notFound(res))
    .then((states) => states ? states.remove() : null)
    .then(success(res, 204))
    .catch(next)
