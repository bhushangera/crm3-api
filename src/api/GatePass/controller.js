import { success, notFound } from '../../services/response/'
import { GatePass } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  GatePass.create(body)
    .then((gatePass) => gatePass.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select} }, res, next) =>
  GatePass.find(query, select)
    .then((gatePasses) => gatePasses.map((gatePass) => gatePass.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  GatePass.findById(params.id)
    .then(notFound(res))
    .then((gatePass) => gatePass ? gatePass.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  GatePass.findById(params.id)
    .then(notFound(res))
    .then((gatePass) => gatePass ? Object.assign(gatePass, body).save() : null)
    .then((gatePass) => gatePass ? gatePass.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  GatePass.findById(params.id)
    .then(notFound(res))
    .then((gatePass) => gatePass ? gatePass.remove() : null)
    .then(success(res, 204))
    .catch(next)
