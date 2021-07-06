import { success, notFound } from '../../services/response/'
import { TeamMembers } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  TeamMembers.create(body)
    .then((teamMembers) => teamMembers.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select} }, res, next) =>
  TeamMembers.find(query, select)
    .then((teamMembers) => teamMembers.map((teamMembers) => teamMembers.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  TeamMembers.findById(params.id)
    .then(notFound(res))
    .then((teamMembers) => teamMembers ? teamMembers.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  TeamMembers.findById(params.id)
    .then(notFound(res))
    .then((teamMembers) => teamMembers ? Object.assign(teamMembers, body).save() : null)
    .then((teamMembers) => teamMembers ? teamMembers.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  TeamMembers.findById(params.id)
    .then(notFound(res))
    .then((teamMembers) => teamMembers ? teamMembers.remove() : null)
    .then(success(res, 204))
    .catch(next)
