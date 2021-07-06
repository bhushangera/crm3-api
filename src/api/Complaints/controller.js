import { success, notFound } from '../../services/response/'
import { Complaints } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Complaints.create(body)
    .then((complaints) => complaints.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select} }, res, next) =>
  Complaints.find(query, select)
    .then((complaints) => complaints.map((complaints) => complaints.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Complaints.findById(params.id)
    .then(notFound(res))
    .then((complaints) => complaints ? complaints.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Complaints.findById(params.id)
    .then(notFound(res))
    .then((complaints) => complaints ? Object.assign(complaints, body).save() : null)
    .then((complaints) => complaints ? complaints.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Complaints.findById(params.id)
    .then(notFound(res))
    .then((complaints) => complaints ? complaints.remove() : null)
    .then(success(res, 204))
    .catch(next)
