import { success, notFound } from '../../services/response/'
import { StatusReasons } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  StatusReasons.create(body)
    .then((statusReasons) => statusReasons.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  StatusReasons.find(query, select)
    .then((statusReasons) => statusReasons.map((statusReasons) => statusReasons.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  StatusReasons.findById(params.id)
    .then(notFound(res))
    .then((statusReasons) => statusReasons ? statusReasons.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  StatusReasons.findById(params.id)
    .then(notFound(res))
    .then((statusReasons) => statusReasons ? Object.assign(statusReasons, body).save() : null)
    .then((statusReasons) => statusReasons ? statusReasons.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  StatusReasons.findById(params.id)
    .then(notFound(res))
    .then((statusReasons) => statusReasons ? statusReasons.remove() : null)
    .then(success(res, 204))
    .catch(next)
