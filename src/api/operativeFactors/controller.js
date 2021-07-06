import { success, notFound } from '../../services/response/'
import { OperativeFactors } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  OperativeFactors.create(body)
    .then((operativeFactors) => operativeFactors.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  OperativeFactors.find(query, select)
    .then((operativeFactors) => operativeFactors.map((operativeFactors) => operativeFactors.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  OperativeFactors.findById(params.id)
    .then(notFound(res))
    .then((operativeFactors) => operativeFactors ? operativeFactors.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  OperativeFactors.findById(params.id)
    .then(notFound(res))
    .then((operativeFactors) => operativeFactors ? Object.assign(operativeFactors, body).save() : null)
    .then((operativeFactors) => operativeFactors ? operativeFactors.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  OperativeFactors.findById(params.id)
    .then(notFound(res))
    .then((operativeFactors) => operativeFactors ? operativeFactors.remove() : null)
    .then(success(res, 204))
    .catch(next)
