import { success, notFound } from '../../services/response/'
import { Employees } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Employees.create(body)
    .then((employees) => employees.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  Employees.find(query, select)
    .then((employees) => employees.map((employees) => employees.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Employees.findById(params.id)
    .then(notFound(res))
    .then((employees) => employees ? employees.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Employees.findById(params.id)
    .then(notFound(res))
    .then((employees) => employees ? Object.assign(employees, body).save() : null)
    .then((employees) => employees ? employees.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Employees.findById(params.id)
    .then(notFound(res))
    .then((employees) => employees ? employees.remove() : null)
    .then(success(res, 204))
    .catch(next)
