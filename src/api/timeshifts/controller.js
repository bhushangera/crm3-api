import { success, notFound } from '../../services/response/'
import { Timeshifts } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Timeshifts.create(body)
    .then((timeshifts) => timeshifts.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select} }, res, next) =>
  Timeshifts.find(query, select)
    .then((timeshifts) => timeshifts.map((timeshifts) => timeshifts.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Timeshifts.findById(params.id)
    .then(notFound(res))
    .then((timeshifts) => timeshifts ? timeshifts.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Timeshifts.findById(params.id)
    .then(notFound(res))
    .then((timeshifts) => timeshifts ? Object.assign(timeshifts, body).save() : null)
    .then((timeshifts) => timeshifts ? timeshifts.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Timeshifts.findById(params.id)
    .then(notFound(res))
    .then((timeshifts) => timeshifts ? timeshifts.remove() : null)
    .then(success(res, 204))
    .catch(next)
