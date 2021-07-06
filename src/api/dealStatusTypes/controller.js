import { success, notFound } from '../../services/response/'
import { DealStatusTypes } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  DealStatusTypes.create(body)
    .then((dealStatusTypes) => dealStatusTypes.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  DealStatusTypes.find(query, select)
    .then((dealStatusTypes) => dealStatusTypes.map((dealStatusTypes) => dealStatusTypes.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  DealStatusTypes.findById(params.id)
    .then(notFound(res))
    .then((dealStatusTypes) => dealStatusTypes ? dealStatusTypes.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  DealStatusTypes.findById(params.id)
    .then(notFound(res))
    .then((dealStatusTypes) => dealStatusTypes ? Object.assign(dealStatusTypes, body).save() : null)
    .then((dealStatusTypes) => dealStatusTypes ? dealStatusTypes.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  DealStatusTypes.findById(params.id)
    .then(notFound(res))
    .then((dealStatusTypes) => dealStatusTypes ? dealStatusTypes.remove() : null)
    .then(success(res, 204))
    .catch(next)
