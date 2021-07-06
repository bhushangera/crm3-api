import { success, notFound } from '../../services/response/'
import { PiInterior } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  PiInterior.create(body)
    .then((piInterior) => piInterior.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  PiInterior.find(query, select)
    .then((piInteriors) => piInteriors.map((piInterior) => piInterior.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  PiInterior.findById(params.id)
    .then(notFound(res))
    .then((piInterior) => piInterior ? piInterior.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  PiInterior.findById(params.id)
    .then(notFound(res))
    .then((piInterior) => piInterior ? Object.assign(piInterior, body).save() : null)
    .then((piInterior) => piInterior ? piInterior.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  PiInterior.findById(params.id)
    .then(notFound(res))
    .then((piInterior) => piInterior ? piInterior.remove() : null)
    .then(success(res, 204))
    .catch(next)
