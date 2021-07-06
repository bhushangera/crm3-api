import { success, notFound } from '../../services/response/'
import { FiscalYears } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  FiscalYears.create(body)
    .then((fiscalYears) => fiscalYears.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select} }, res, next) =>
  FiscalYears.find(query, select)
    .then((fiscalYears) => fiscalYears.map((fiscalYears) => fiscalYears.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  FiscalYears.findById(params.id)
    .then(notFound(res))
    .then((fiscalYears) => fiscalYears ? fiscalYears.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  FiscalYears.findById(params.id)
    .then(notFound(res))
    .then((fiscalYears) => fiscalYears ? Object.assign(fiscalYears, body).save() : null)
    .then((fiscalYears) => fiscalYears ? fiscalYears.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  FiscalYears.findById(params.id)
    .then(notFound(res))
    .then((fiscalYears) => fiscalYears ? fiscalYears.remove() : null)
    .then(success(res, 204))
    .catch(next)
