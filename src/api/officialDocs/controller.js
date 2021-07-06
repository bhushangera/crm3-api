import { success, notFound } from '../../services/response/'
import { OfficialDocs } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  OfficialDocs.create(body)
    .then((officialDocs) => officialDocs.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  OfficialDocs.find(query, select)
    .then((officialDocs) => officialDocs.map((officialDocs) => officialDocs.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  OfficialDocs.findById(params.id)
    .then(notFound(res))
    .then((officialDocs) => officialDocs ? officialDocs.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  OfficialDocs.findById(params.id)
    .then(notFound(res))
    .then((officialDocs) => officialDocs ? Object.assign(officialDocs, body).save() : null)
    .then((officialDocs) => officialDocs ? officialDocs.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  OfficialDocs.findById(params.id)
    .then(notFound(res))
    .then((officialDocs) => officialDocs ? officialDocs.remove() : null)
    .then(success(res, 204))
    .catch(next)
