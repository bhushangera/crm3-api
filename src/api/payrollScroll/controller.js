import { success, notFound } from '../../services/response/'
import { PayrollScroll } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  PayrollScroll.create(body)
    .then((payrollScroll) => payrollScroll.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  PayrollScroll.find(query, select)
    .then((payrollScrolls) => payrollScrolls.map((payrollScroll) => payrollScroll.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  PayrollScroll.findById(params.id)
    .then(notFound(res))
    .then((payrollScroll) => payrollScroll ? payrollScroll.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  PayrollScroll.findById(params.id)
    .then(notFound(res))
    .then((payrollScroll) => payrollScroll ? Object.assign(payrollScroll, body).save() : null)
    .then((payrollScroll) => payrollScroll ? payrollScroll.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  PayrollScroll.findById(params.id)
    .then(notFound(res))
    .then((payrollScroll) => payrollScroll ? payrollScroll.remove() : null)
    .then(success(res, 204))
    .catch(next)
