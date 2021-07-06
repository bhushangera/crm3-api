import { success, notFound } from '../../services/response/'
import { Contacts } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Contacts.create(body)
    .then((contacts) => contacts.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  Contacts.find(query, select)
    .then((contacts) => contacts.map((contacts) => contacts.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Contacts.findById(params.id)
    .then(notFound(res))
    .then((contacts) => contacts ? contacts.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Contacts.findById(params.id)
    .then(notFound(res))
    .then((contacts) => contacts ? Object.assign(contacts, body).save() : null)
    .then((contacts) => contacts ? contacts.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Contacts.findById(params.id)
    .then(notFound(res))
    .then((contacts) => contacts ? contacts.remove() : null)
    .then(success(res, 204))
    .catch(next)
