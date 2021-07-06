import { success, notFound } from '../../services/response/'
import { Teams } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Teams.create(body)
    .then((teams) => teams.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select} }, res, next) =>
  Teams.find(query, select)
    .then((teams) => teams.map((teams) => teams.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Teams.findById(params.id)
    .then(notFound(res))
    .then((teams) => teams ? teams.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Teams.findById(params.id)
    .then(notFound(res))
    .then((teams) => teams ? Object.assign(teams, body).save() : null)
    .then((teams) => teams ? teams.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Teams.findById(params.id)
    .then(notFound(res))
    .then((teams) => teams ? teams.remove() : null)
    .then(success(res, 204))
    .catch(next)
