import { success, notFound } from '../../services/response/'
import { ContactGroup } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  ContactGroup.create(body)
    .then((contactGroup) => contactGroup.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select} }, res, next) =>
  ContactGroup.find(query, select)
    .then((contactGroups) => contactGroups.map((contactGroup) => contactGroup.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  ContactGroup.findById(params.id)
    .then(notFound(res))
    .then((contactGroup) => contactGroup ? contactGroup.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  ContactGroup.findById(params.id)
    .then(notFound(res))
    .then((contactGroup) => contactGroup ? Object.assign(contactGroup, body).save() : null)
    .then((contactGroup) => contactGroup ? contactGroup.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  ContactGroup.findById(params.id)
    .then(notFound(res))
    .then((contactGroup) => contactGroup ? contactGroup.remove() : null)
    .then(success(res, 204))
    .catch(next)
