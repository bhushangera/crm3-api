import { success, notFound } from '../../services/response/'
import { Quotations } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Quotations.create(body)
    .then((quotations) => quotations.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  Quotations.find(query, select)
    .then((quotations) => quotations.map((quotations) => quotations.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Quotations.findById(params.id)
    .then(notFound(res))
    .then((quotations) => quotations ? quotations.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Quotations.findById(params.id)
    .then(notFound(res))
    .then((quotations) => quotations ? Object.assign(quotations, body).save() : null)
    .then((quotations) => quotations ? quotations.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Quotations.findById(params.id)
    .then(notFound(res))
    .then((quotations) => quotations ? quotations.remove() : null)
    .then(success(res, 204))
    .catch(next)
