import { success, notFound } from '../../services/response/'
import { Locations } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Locations.create(body)
    .then((locations) => locations.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  Locations.find(query, select)
    .then((locations) => locations.map((locations) => locations.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Locations.findById(params.id)
    .then(notFound(res))
    .then((locations) => locations ? locations.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Locations.findById(params.id)
    .then(notFound(res))
    .then((locations) => locations ? Object.assign(locations, body).save() : null)
    .then((locations) => locations ? locations.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Locations.findById(params.id)
    .then(notFound(res))
    .then((locations) => locations ? locations.remove() : null)
    .then(success(res, 204))
    .catch(next)
