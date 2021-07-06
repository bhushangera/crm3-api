import { success, notFound } from '../../services/response/'
import { Travels } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Travels.create(body)
    .then((travels) => travels.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select} }, res, next) =>
  Travels.find(query, select)
    .then((travels) => travels.map((travels) => travels.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Travels.findById(params.id)
    .then(notFound(res))
    .then((travels) => travels ? travels.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Travels.findById(params.id)
    .then(notFound(res))
    .then((travels) => travels ? Object.assign(travels, body).save() : null)
    .then((travels) => travels ? travels.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Travels.findById(params.id)
    .then(notFound(res))
    .then((travels) => travels ? travels.remove() : null)
    .then(success(res, 204))
    .catch(next)
