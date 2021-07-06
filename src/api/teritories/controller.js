import { success, notFound } from '../../services/response/'
import { Teritories } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Teritories.create(body)
    .then((teritories) => teritories.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  Teritories.find(query, select)
    .then((teritories) => teritories.map((teritories) => teritories.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Teritories.findById(params.id)
    .then(notFound(res))
    .then((teritories) => teritories ? teritories.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Teritories.findById(params.id)
    .then(notFound(res))
    .then((teritories) => teritories ? Object.assign(teritories, body).save() : null)
    .then((teritories) => teritories ? teritories.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Teritories.findById(params.id)
    .then(notFound(res))
    .then((teritories) => teritories ? teritories.remove() : null)
    .then(success(res, 204))
    .catch(next)
