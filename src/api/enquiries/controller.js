import { success, notFound } from '../../services/response/'
import { Enquiries } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Enquiries.create(body)
    .then((enquiries) => enquiries.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  Enquiries.find(query, select)
    .then((enquiries) => enquiries.map((enquiries) => enquiries.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Enquiries.findById(params.id)
    .then(notFound(res))
    .then((enquiries) => enquiries ? enquiries.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Enquiries.findById(params.id)
    .then(notFound(res))
    .then((enquiries) => enquiries ? Object.assign(enquiries, body).save() : null)
    .then((enquiries) => enquiries ? enquiries.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Enquiries.findById(params.id)
    .then(notFound(res))
    .then((enquiries) => enquiries ? enquiries.remove() : null)
    .then(success(res, 204))
    .catch(next)
