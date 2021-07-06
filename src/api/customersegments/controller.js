import { success, notFound } from '../../services/response/'
import { Customersegments } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Customersegments.create(body)
    .then((customersegments) => customersegments.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select} }, res, next) =>
  Customersegments.find(query, select)
    .then((customersegments) => customersegments.map((customersegments) => customersegments.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Customersegments.findById(params.id)
    .then(notFound(res))
    .then((customersegments) => customersegments ? customersegments.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Customersegments.findById(params.id)
    .then(notFound(res))
    .then((customersegments) => customersegments ? Object.assign(customersegments, body).save() : null)
    .then((customersegments) => customersegments ? customersegments.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Customersegments.findById(params.id)
    .then(notFound(res))
    .then((customersegments) => customersegments ? customersegments.remove() : null)
    .then(success(res, 204))
    .catch(next)
