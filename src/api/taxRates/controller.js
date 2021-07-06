import { success, notFound } from '../../services/response/'
import { TaxRates } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  TaxRates.create(body)
    .then((taxRates) => taxRates.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query } }, res, next) =>
  TaxRates.find(query)
    .then((taxRates) => taxRates.map((taxRates) => taxRates.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  TaxRates.findById(params.id)
    .then(notFound(res))
    .then((taxRates) => taxRates ? taxRates.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  TaxRates.findById(params.id)
    .then(notFound(res))
    .then((taxRates) => taxRates ? Object.assign(taxRates, body).save() : null)
    .then((taxRates) => taxRates ? taxRates.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  TaxRates.findById(params.id)
    .then(notFound(res))
    .then((taxRates) => taxRates ? taxRates.remove() : null)
    .then(success(res, 204))
    .catch(next)
