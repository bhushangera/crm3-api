import { success, notFound } from '../../services/response/'
import { Contactus } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Contactus.create(body)
    .then((contactus) => contactus.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  Contactus.find(query, select)
    .then((contactuses) => contactuses.map((contactus) => contactus.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Contactus.findById(params.id)
    .then(notFound(res))
    .then((contactus) => contactus ? contactus.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Contactus.findById(params.id)
    .then(notFound(res))
    .then((contactus) => contactus ? Object.assign(contactus, body).save() : null)
    .then((contactus) => contactus ? contactus.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Contactus.findById(params.id)
    .then(notFound(res))
    .then((contactus) => contactus ? contactus.remove() : null)
    .then(success(res, 204))
    .catch(next)
