import { success, notFound } from '../../services/response/'
import { ActivityLog } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  ActivityLog.create(body)
    .then((activityLog) => activityLog.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select} }, res, next) =>
  ActivityLog.find(query, select)
    .then((activityLogs) => activityLogs.map((activityLog) => activityLog.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  ActivityLog.findById(params.id)
    .then(notFound(res))
    .then((activityLog) => activityLog ? activityLog.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  ActivityLog.findById(params.id)
    .then(notFound(res))
    .then((activityLog) => activityLog ? Object.assign(activityLog, body).save() : null)
    .then((activityLog) => activityLog ? activityLog.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  ActivityLog.findById(params.id)
    .then(notFound(res))
    .then((activityLog) => activityLog ? activityLog.remove() : null)
    .then(success(res, 204))
    .catch(next)
