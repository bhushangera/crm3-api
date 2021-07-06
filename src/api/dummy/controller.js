import { success, notFound } from '../../services/response/'
import { Dummy } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Dummy.create(body)
    .then((dummy) => dummy.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  Dummy.find(query, select)
    .then((dummies) => dummies.map((dummy) => dummy.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Dummy.findById(params.id)
    .then(notFound(res))
    .then((dummy) => dummy ? dummy.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Dummy.findById(params.id)
    .then(notFound(res))
    .then((dummy) => dummy ? Object.assign(dummy, body).save() : null)
    .then((dummy) => dummy ? dummy.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Dummy.findById(params.id)
    .then(notFound(res))
    .then((dummy) => dummy ? dummy.remove() : null)
    .then(success(res, 204))
    .catch(next)
