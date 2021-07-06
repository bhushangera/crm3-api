import { success, notFound } from '../../services/response/'
import { Tenders } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Tenders.create(body)
    .then((tenders) => tenders.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  Tenders.find(query, select)
    .then((tenders) => tenders.map((tenders) => tenders.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Tenders.findById(params.id)
    .then(notFound(res))
    .then((tenders) => tenders ? tenders.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Tenders.findById(params.id)
    .then(notFound(res))
    .then((tenders) => tenders ? Object.assign(tenders, body).save() : null)
    .then((tenders) => tenders ? tenders.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Tenders.findById(params.id)
    .then(notFound(res))
    .then((tenders) => tenders ? tenders.remove() : null)
    .then(success(res, 204))
    .catch(next)
