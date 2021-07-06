import { success, notFound } from '../../services/response/'
import { TenderTypes } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  TenderTypes.create(body)
    .then((tenderTypes) => tenderTypes.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  TenderTypes.find(query, select)
    .then((tenderTypes) => tenderTypes.map((tenderTypes) => tenderTypes.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  TenderTypes.findById(params.id)
    .then(notFound(res))
    .then((tenderTypes) => tenderTypes ? tenderTypes.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  TenderTypes.findById(params.id)
    .then(notFound(res))
    .then((tenderTypes) => tenderTypes ? Object.assign(tenderTypes, body).save() : null)
    .then((tenderTypes) => tenderTypes ? tenderTypes.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  TenderTypes.findById(params.id)
    .then(notFound(res))
    .then((tenderTypes) => tenderTypes ? tenderTypes.remove() : null)
    .then(success(res, 204))
    .catch(next)
