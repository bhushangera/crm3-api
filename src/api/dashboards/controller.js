import { success, notFound } from '../../services/response/'
import { Dashboards } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Dashboards.create(body)
    .then((dashboards) => dashboards.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select} }, res, next) =>
  Dashboards.find(query, select)
    .then((dashboards) => dashboards.map((dashboards) => dashboards.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Dashboards.findById(params.id)
    .then(notFound(res))
    .then((dashboards) => dashboards ? dashboards.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Dashboards.findById(params.id)
    .then(notFound(res))
    .then((dashboards) => dashboards ? Object.assign(dashboards, body).save() : null)
    .then((dashboards) => dashboards ? dashboards.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Dashboards.findById(params.id)
    .then(notFound(res))
    .then((dashboards) => dashboards ? dashboards.remove() : null)
    .then(success(res, 204))
    .catch(next)
