import { success, notFound } from '../../services/response/'
import { EmployeePerformance } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  EmployeePerformance.create(body)
    .then((employeePerformance) => employeePerformance.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  EmployeePerformance.find(query, select)
    .then((employeePerformances) => employeePerformances.map((employeePerformance) => employeePerformance.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  EmployeePerformance.findById(params.id)
    .then(notFound(res))
    .then((employeePerformance) => employeePerformance ? employeePerformance.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  EmployeePerformance.findById(params.id)
    .then(notFound(res))
    .then((employeePerformance) => employeePerformance ? Object.assign(employeePerformance, body).save() : null)
    .then((employeePerformance) => employeePerformance ? employeePerformance.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  EmployeePerformance.findById(params.id)
    .then(notFound(res))
    .then((employeePerformance) => employeePerformance ? employeePerformance.remove() : null)
    .then(success(res, 204))
    .catch(next)
