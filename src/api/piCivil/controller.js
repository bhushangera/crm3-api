import { success, notFound } from '../../services/response/'
import { PiCivil } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  PiCivil.create(body)
    .then((piCivil) => piCivil.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  PiCivil.find(query, select)
    .then((piCivils) => piCivils.map((piCivil) => piCivil.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  PiCivil.findById(params.id)
    .then(notFound(res))
    .then((piCivil) => piCivil ? piCivil.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  PiCivil.findById(params.id)
    .then(notFound(res))
    .then((piCivil) => piCivil ? Object.assign(piCivil, body).save() : null)
    .then((piCivil) => piCivil ? piCivil.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  PiCivil.findById(params.id)
    .then(notFound(res))
    .then((piCivil) => piCivil ? piCivil.remove() : null)
    .then(success(res, 204))
    .catch(next)
