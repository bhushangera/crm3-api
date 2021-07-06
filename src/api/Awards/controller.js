import { success, notFound } from '../../services/response/'
import { Awards } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Awards.create(body)
    .then((awards) => awards.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select} }, res, next) =>
  Awards.find(query, select)
    .then((awards) => awards.map((awards) => awards.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Awards.findById(params.id)
    .then(notFound(res))
    .then((awards) => awards ? awards.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Awards.findById(params.id)
    .then(notFound(res))
    .then((awards) => awards ? Object.assign(awards, body).save() : null)
    .then((awards) => awards ? awards.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Awards.findById(params.id)
    .then(notFound(res))
    .then((awards) => awards ? awards.remove() : null)
    .then(success(res, 204))
    .catch(next)
