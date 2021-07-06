import { success, notFound } from '../../services/response/'
import { Promotions } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Promotions.create(body)
    .then((promotions) => promotions.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select} }, res, next) =>
  Promotions.find(query, select)
    .then((promotions) => promotions.map((promotions) => promotions.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Promotions.findById(params.id)
    .then(notFound(res))
    .then((promotions) => promotions ? promotions.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Promotions.findById(params.id)
    .then(notFound(res))
    .then((promotions) => promotions ? Object.assign(promotions, body).save() : null)
    .then((promotions) => promotions ? promotions.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Promotions.findById(params.id)
    .then(notFound(res))
    .then((promotions) => promotions ? promotions.remove() : null)
    .then(success(res, 204))
    .catch(next)
