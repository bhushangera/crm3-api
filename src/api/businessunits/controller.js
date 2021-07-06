import { success, notFound } from '../../services/response/'
import { Businessunits } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Businessunits.create(body)
    .then((businessunits) => businessunits.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select} }, res, next) =>
  Businessunits.find(query, select)
    .then((businessunits) => businessunits.map((businessunits) => businessunits.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Businessunits.findById(params.id)
    .then(notFound(res))
    .then((businessunits) => businessunits ? businessunits.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Businessunits.findById(params.id)
    .then(notFound(res))
    .then((businessunits) => businessunits ? Object.assign(businessunits, body).save() : null)
    .then((businessunits) => businessunits ? businessunits.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Businessunits.findById(params.id)
    .then(notFound(res))
    .then((businessunits) => businessunits ? businessunits.remove() : null)
    .then(success(res, 204))
    .catch(next)
