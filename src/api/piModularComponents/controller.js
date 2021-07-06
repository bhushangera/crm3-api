import { success, notFound } from '../../services/response/'
import { PiModularComponents } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  PiModularComponents.create(body)
    .then((piModularComponents) => piModularComponents.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  PiModularComponents.find(query, select)
    .then((piModularComponents) => piModularComponents.map((piModularComponents) => piModularComponents.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  PiModularComponents.findById(params.id)
    .then(notFound(res))
    .then((piModularComponents) => piModularComponents ? piModularComponents.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  PiModularComponents.findById(params.id)
    .then(notFound(res))
    .then((piModularComponents) => piModularComponents ? Object.assign(piModularComponents, body).save() : null)
    .then((piModularComponents) => piModularComponents ? piModularComponents.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  PiModularComponents.findById(params.id)
    .then(notFound(res))
    .then((piModularComponents) => piModularComponents ? piModularComponents.remove() : null)
    .then(success(res, 204))
    .catch(next)
