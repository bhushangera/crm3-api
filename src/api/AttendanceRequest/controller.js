import { success, notFound } from '../../services/response/'
import { AttendanceRequest } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  AttendanceRequest.create(body)
    .then((attendanceRequest) => attendanceRequest.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select} }, res, next) =>
  AttendanceRequest.find(query, select)
    .then((attendanceRequests) => attendanceRequests.map((attendanceRequest) => attendanceRequest.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  AttendanceRequest.findById(params.id)
    .then(notFound(res))
    .then((attendanceRequest) => attendanceRequest ? attendanceRequest.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  AttendanceRequest.findById(params.id)
    .then(notFound(res))
    .then((attendanceRequest) => attendanceRequest ? Object.assign(attendanceRequest, body).save() : null)
    .then((attendanceRequest) => attendanceRequest ? attendanceRequest.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  AttendanceRequest.findById(params.id)
    .then(notFound(res))
    .then((attendanceRequest) => attendanceRequest ? attendanceRequest.remove() : null)
    .then(success(res, 204))
    .catch(next)
