import { success, notFound } from '../../services/response/'
import { CalenderWeeks } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  CalenderWeeks.create(body)
    .then((calenderWeeks) => calenderWeeks.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  CalenderWeeks.find(query, select)
    .then((calenderWeeks) => calenderWeeks.map((calenderWeeks) => calenderWeeks.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  CalenderWeeks.findById(params.id)
    .then(notFound(res))
    .then((calenderWeeks) => calenderWeeks ? calenderWeeks.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  CalenderWeeks.findById(params.id)
    .then(notFound(res))
    .then((calenderWeeks) => calenderWeeks ? Object.assign(calenderWeeks, body).save() : null)
    .then((calenderWeeks) => calenderWeeks ? calenderWeeks.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  CalenderWeeks.findById(params.id)
    .then(notFound(res))
    .then((calenderWeeks) => calenderWeeks ? calenderWeeks.remove() : null)
    .then(success(res, 204))
    .catch(next)
