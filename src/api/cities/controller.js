import { success, notFound } from '../../services/response/'
import { Cities } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Cities.create(body)
    .then((cities) => cities.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select} }, res, next) =>
  Cities.find(query, select)
    .then((cities) => cities.map((cities) => cities.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Cities.findById(params.id)
    .then(notFound(res))
    .then((cities) => cities ? cities.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Cities.findById(params.id)
    .then(notFound(res))
    .then((cities) => cities ? Object.assign(cities, body).save() : null)
    .then((cities) => cities ? cities.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Cities.findById(params.id)
    .then(notFound(res))
    .then((cities) => cities ? cities.remove() : null)
    .then(success(res, 204))
    .catch(next)
