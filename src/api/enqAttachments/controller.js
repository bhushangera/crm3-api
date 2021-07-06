import { success, notFound } from '../../services/response/'
import { EnqAttachments } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  EnqAttachments.create(body)
    .then((enqAttachments) => enqAttachments.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  EnqAttachments.find(query, select)
    .then((enqAttachments) => enqAttachments.map((enqAttachments) => enqAttachments.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  EnqAttachments.findById(params.id)
    .then(notFound(res))
    .then((enqAttachments) => enqAttachments ? enqAttachments.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  EnqAttachments.findById(params.id)
    .then(notFound(res))
    .then((enqAttachments) => enqAttachments ? Object.assign(enqAttachments, body).save() : null)
    .then((enqAttachments) => enqAttachments ? enqAttachments.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  EnqAttachments.findById(params.id)
    .then(notFound(res))
    .then((enqAttachments) => enqAttachments ? enqAttachments.remove() : null)
    .then(success(res, 204))
    .catch(next)
