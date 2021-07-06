import { success, notFound } from '../../services/response/'
import { TimeSheets } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  TimeSheets.create(body)
    .then((timeSheets) => timeSheets.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  TimeSheets.find(query, select)
    .then((timeSheets) => timeSheets.map((timeSheets) => timeSheets.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  TimeSheets.findById(params.id)
    .then(notFound(res))
    .then((timeSheets) => timeSheets ? timeSheets.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  TimeSheets.findById(params.id)
    .then(notFound(res))
    .then((timeSheets) => timeSheets ? Object.assign(timeSheets, body).save() : null)
    .then((timeSheets) => timeSheets ? timeSheets.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  TimeSheets.findById(params.id)
    .then(notFound(res))
    .then((timeSheets) => timeSheets ? timeSheets.remove() : null)
    .then(success(res, 204))
    .catch(next)
