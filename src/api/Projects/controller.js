import { success, notFound } from '../../services/response/'
import { Projects } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Projects.create(body)
    .then((projects) => projects.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select} }, res, next) =>
  Projects.find(query, select)
    .then((projects) => projects.map((projects) => projects.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Projects.findById(params.id)
    .then(notFound(res))
    .then((projects) => projects ? projects.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Projects.findById(params.id)
    .then(notFound(res))
    .then((projects) => projects ? Object.assign(projects, body).save() : null)
    .then((projects) => projects ? projects.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Projects.findById(params.id)
    .then(notFound(res))
    .then((projects) => projects ? projects.remove() : null)
    .then(success(res, 204))
    .catch(next)
