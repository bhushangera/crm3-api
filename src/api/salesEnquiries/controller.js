import { success, notFound } from '../../services/response/'
import { SalesEnquiries } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  SalesEnquiries.create(body)
    .then((salesEnquiries) => salesEnquiries.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query } }, res, next) =>
  SalesEnquiries.find(query)
    .then((salesEnquiries) => salesEnquiries.map((salesEnquiries) => salesEnquiries.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  SalesEnquiries.findById(params.id)
    .then(notFound(res))
    .then((salesEnquiries) => salesEnquiries ? salesEnquiries.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  SalesEnquiries.findById(params.id)
    .then(notFound(res))
    .then((salesEnquiries) => salesEnquiries ? Object.assign(salesEnquiries, body).save() : null)
    .then((salesEnquiries) => salesEnquiries ? salesEnquiries.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  SalesEnquiries.findById(params.id)
    .then(notFound(res))
    .then((salesEnquiries) => salesEnquiries ? salesEnquiries.remove() : null)
    .then(success(res, 204))
    .catch(next)
