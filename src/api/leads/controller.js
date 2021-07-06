import { success, notFound } from '../../services/response/'
import { Leads } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Leads.create(body)
    .then((leads) => leads.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select} }, res, next) =>
   Leads.find(query, select)
   .then((leads) => leads.map((lead) => lead.view()))
   .then(success(res))
   .catch(next)

export const show = ({ params }, res, next) =>
  Leads.findById(params.id)
    .then(notFound(res))
    .then((leads) => leads ? leads.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Leads.findById(params.id)
    .then(notFound(res))
    .then((leads) => leads ? Object.assign(leads, body).save() : null)
    .then((leads) => leads ? leads.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Leads.findById(params.id)
    .then(notFound(res))
    .then((leads) => leads ? leads.remove() : null)
    .then(success(res, 204))
    .catch(next)
