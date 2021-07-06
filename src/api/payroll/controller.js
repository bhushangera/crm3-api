import { success, notFound } from '../../services/response/'
import { Payroll } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Payroll.create(body)
    .then((payroll) => payroll.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  Payroll.find(query, select)
    .then((payrolls) => payrolls.map((payroll) => payroll.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Payroll.findById(params.id)
    .then(notFound(res))
    .then((payroll) => payroll ? payroll.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Payroll.findById(params.id)
    .then(notFound(res))
    .then((payroll) => payroll ? Object.assign(payroll, body).save() : null)
    .then((payroll) => payroll ? payroll.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Payroll.findById(params.id)
    .then(notFound(res))
    .then((payroll) => payroll ? payroll.remove() : null)
    .then(success(res, 204))
    .catch(next)
