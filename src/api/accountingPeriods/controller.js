import { success, notFound } from '../../services/response/'
import { AccountingPeriods } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  AccountingPeriods.create(body)
    .then((accountingPeriods) => accountingPeriods.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  AccountingPeriods.find(query, select)
    .then((accountingPeriods) => accountingPeriods.map((accountingPeriods) => accountingPeriods.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  AccountingPeriods.findById(params.id)
    .then(notFound(res))
    .then((accountingPeriods) => accountingPeriods ? accountingPeriods.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  AccountingPeriods.findById(params.id)
    .then(notFound(res))
    .then((accountingPeriods) => accountingPeriods ? Object.assign(accountingPeriods, body).save() : null)
    .then((accountingPeriods) => accountingPeriods ? accountingPeriods.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  AccountingPeriods.findById(params.id)
    .then(notFound(res))
    .then((accountingPeriods) => accountingPeriods ? accountingPeriods.remove() : null)
    .then(success(res, 204))
    .catch(next)
