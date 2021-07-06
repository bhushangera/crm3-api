import { success, notFound } from '../../services/response/'
import { WorkStations } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  WorkStations.create(body)
    .then((workStations) => workStations.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select} }, res, next) =>
  WorkStations.find(query, select)
    .then((workStations) => workStations.map((workStations) => workStations.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  WorkStations.findById(params.id)
    .then(notFound(res))
    .then((workStations) => workStations ? workStations.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  WorkStations.findById(params.id)
    .then(notFound(res))
    .then((workStations) => workStations ? Object.assign(workStations, body).save() : null)
    .then((workStations) => workStations ? workStations.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  WorkStations.findById(params.id)
    .then(notFound(res))
    .then((workStations) => workStations ? workStations.remove() : null)
    .then(success(res, 204))
    .catch(next)
