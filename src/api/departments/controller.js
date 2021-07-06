import { success, notFound } from '../../services/response/'
import { Departments } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Departments.create(body)
    .then((departments) => departments.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select} }, res, next) =>
  Departments.find(query, select)
    .then((departments) => departments.map((departments) => departments.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Departments.findById(params.id)
    .then(notFound(res))
    .then((departments) => departments ? departments.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Departments.findById(params.id)
    .then(notFound(res))
    .then((departments) => departments ? Object.assign(departments, body).save() : null)
    .then((departments) => departments ? departments.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Departments.findById(params.id)
    .then(notFound(res))
    .then((departments) => departments ? departments.remove() : null)
    .then(success(res, 204))
    .catch(next)
