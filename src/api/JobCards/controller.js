import { success, notFound } from '../../services/response/'
import { JobCards } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  JobCards.create(body)
    .then((jobCards) => jobCards.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select} }, res, next) =>
  JobCards.find(query, select)
    .then((jobCards) => jobCards.map((jobCards) => jobCards.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  JobCards.findById(params.id)
    .then(notFound(res))
    .then((jobCards) => jobCards ? jobCards.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  JobCards.findById(params.id)
    .then(notFound(res))
    .then((jobCards) => jobCards ? Object.assign(jobCards, body).save() : null)
    .then((jobCards) => jobCards ? jobCards.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  JobCards.findById(params.id)
    .then(notFound(res))
    .then((jobCards) => jobCards ? jobCards.remove() : null)
    .then(success(res, 204))
    .catch(next)
