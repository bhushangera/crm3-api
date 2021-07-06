import { success, notFound } from '../../services/response/'
import { CalenderDays } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  CalenderDays.create(body)
    .then((calenderDays) => calenderDays.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select} }, res, next) =>
  CalenderDays.find(query, select)
    .then((calenderDays) => calenderDays.map((calenderDays) => calenderDays.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  CalenderDays.findById(params.id)
    .then(notFound(res))
    .then((calenderDays) => calenderDays ? calenderDays.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  CalenderDays.findById(params.id)
    .then(notFound(res))
    .then((calenderDays) => calenderDays ? Object.assign(calenderDays, body).save() : null)
    .then((calenderDays) => calenderDays ? calenderDays.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  CalenderDays.findById(params.id)
    .then(notFound(res))
    .then((calenderDays) => calenderDays ? calenderDays.remove() : null)
    .then(success(res, 204))
    .catch(next)
