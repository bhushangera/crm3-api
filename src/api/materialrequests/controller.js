import { success, notFound } from '../../services/response/'
import { Materialrequests } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Materialrequests.create(body)
    .then((materialrequests) => materialrequests.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select} }, res, next) =>
  Materialrequests.find(query, select)
    .then((materialrequests) => materialrequests.map((materialrequests) => materialrequests.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Materialrequests.findById(params.id)
    .then(notFound(res))
    .then((materialrequests) => materialrequests ? materialrequests.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Materialrequests.findById(params.id)
    .then(notFound(res))
    .then((materialrequests) => materialrequests ? Object.assign(materialrequests, body).save() : null)
    .then((materialrequests) => materialrequests ? materialrequests.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Materialrequests.findById(params.id)
    .then(notFound(res))
    .then((materialrequests) => materialrequests ? materialrequests.remove() : null)
    .then(success(res, 204))
    .catch(next)
