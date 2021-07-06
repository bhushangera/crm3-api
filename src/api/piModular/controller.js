import { success, notFound } from '../../services/response/'
import { PiModular } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  PiModular.create(body)
    .then((piModular) => piModular.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  PiModular.find(query, select)
    .then((piModulars) => piModulars.map((piModular) => piModular.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  PiModular.findById(params.id)
    .then(notFound(res))
    .then((piModular) => piModular ? piModular.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  PiModular.findById(params.id)
    .then(notFound(res))
    .then((piModular) => piModular ? Object.assign(piModular, body).save() : null)
    .then((piModular) => piModular ? piModular.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  PiModular.findById(params.id)
    .then(notFound(res))
    .then((piModular) => piModular ? piModular.remove() : null)
    .then(success(res, 204))
    .catch(next)
