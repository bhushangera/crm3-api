import { success, notFound } from '../../services/response/'
import { LeadStatusCodes } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  LeadStatusCodes.create(body)
    .then((leadStatusCodes) => leadStatusCodes.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  LeadStatusCodes.find(query, select)
    .then((leadStatusCodes) => leadStatusCodes.map((leadStatusCodes) => leadStatusCodes.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  LeadStatusCodes.findById(params.id)
    .then(notFound(res))
    .then((leadStatusCodes) => leadStatusCodes ? leadStatusCodes.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  LeadStatusCodes.findById(params.id)
    .then(notFound(res))
    .then((leadStatusCodes) => leadStatusCodes ? Object.assign(leadStatusCodes, body).save() : null)
    .then((leadStatusCodes) => leadStatusCodes ? leadStatusCodes.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  LeadStatusCodes.findById(params.id)
    .then(notFound(res))
    .then((leadStatusCodes) => leadStatusCodes ? leadStatusCodes.remove() : null)
    .then(success(res, 204))
    .catch(next)
