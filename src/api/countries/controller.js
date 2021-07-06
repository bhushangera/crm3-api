import { success, notFound } from '../../services/response/'
import { Countries } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Countries.create(body)
    .then((countries) => countries.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  Countries.find(query, select)
    .then((countries) => countries.map((countries) => countries.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Countries.findById(params.id)
    .then(notFound(res))
    .then((countries) => countries ? countries.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Countries.findById(params.id)
    .then(notFound(res))
    .then((countries) => countries ? Object.assign(countries, body).save() : null)
    .then((countries) => countries ? countries.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Countries.findById(params.id)
    .then(notFound(res))
    .then((countries) => countries ? countries.remove() : null)
    .then(success(res, 204))
    .catch(next)
