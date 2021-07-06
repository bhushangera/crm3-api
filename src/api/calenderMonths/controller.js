import { success, notFound } from '../../services/response/'
import { CalenderMonths } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  CalenderMonths.create(body)
    .then((calenderMonths) => calenderMonths.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  CalenderMonths.find(query, select)
    .then((calenderMonths) => calenderMonths.map((calenderMonths) => calenderMonths.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  CalenderMonths.findById(params.id)
    .then(notFound(res))
    .then((calenderMonths) => calenderMonths ? calenderMonths.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  CalenderMonths.findById(params.id)
    .then(notFound(res))
    .then((calenderMonths) => calenderMonths ? Object.assign(calenderMonths, body).save() : null)
    .then((calenderMonths) => calenderMonths ? calenderMonths.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  CalenderMonths.findById(params.id)
    .then(notFound(res))
    .then((calenderMonths) => calenderMonths ? calenderMonths.remove() : null)
    .then(success(res, 204))
    .catch(next)
