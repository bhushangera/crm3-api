import { success, notFound } from '../../services/response/'
import { GatePassTypes } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  GatePassTypes.create(body)
    .then((gatePassTypes) => gatePassTypes.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select} }, res, next) =>
  GatePassTypes.find(query, select)
    .then((gatePassTypes) => gatePassTypes.map((gatePassTypes) => gatePassTypes.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  GatePassTypes.findById(params.id)
    .then(notFound(res))
    .then((gatePassTypes) => gatePassTypes ? gatePassTypes.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  GatePassTypes.findById(params.id)
    .then(notFound(res))
    .then((gatePassTypes) => gatePassTypes ? Object.assign(gatePassTypes, body).save() : null)
    .then((gatePassTypes) => gatePassTypes ? gatePassTypes.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  GatePassTypes.findById(params.id)
    .then(notFound(res))
    .then((gatePassTypes) => gatePassTypes ? gatePassTypes.remove() : null)
    .then(success(res, 204))
    .catch(next)
