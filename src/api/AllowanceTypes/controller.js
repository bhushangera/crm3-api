import { success, notFound } from '../../services/response/'
import { AllowanceTypes } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  AllowanceTypes.create(body)
    .then((allowanceTypes) => allowanceTypes.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select} }, res, next) =>
  AllowanceTypes.find(query, select)
    .then((allowanceTypes) => allowanceTypes.map((allowanceTypes) => allowanceTypes.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  AllowanceTypes.findById(params.id)
    .then(notFound(res))
    .then((allowanceTypes) => allowanceTypes ? allowanceTypes.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  AllowanceTypes.findById(params.id)
    .then(notFound(res))
    .then((allowanceTypes) => allowanceTypes ? Object.assign(allowanceTypes, body).save() : null)
    .then((allowanceTypes) => allowanceTypes ? allowanceTypes.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  AllowanceTypes.findById(params.id)
    .then(notFound(res))
    .then((allowanceTypes) => allowanceTypes ? allowanceTypes.remove() : null)
    .then(success(res, 204))
    .catch(next)
