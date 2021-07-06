import { success, notFound } from '../../services/response/'
import { Attendance } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Attendance.create(body)
    .then((attendance) => attendance.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select} }, res, next) =>
  Attendance.find(query, select)
    .then((attendances) => attendances.map((attendance) => attendance.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Attendance.findById(params.id)
    .then(notFound(res))
    .then((attendance) => attendance ? attendance.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Attendance.findById(params.id)
    .then(notFound(res))
    .then((attendance) => attendance ? Object.assign(attendance, body).save() : null)
    .then((attendance) => attendance ? attendance.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Attendance.findById(params.id)
    .then(notFound(res))
    .then((attendance) => attendance ? attendance.remove() : null)
    .then(success(res, 204))
    .catch(next)
