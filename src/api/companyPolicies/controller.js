import { success, notFound } from '../../services/response/'
import { CompanyPolicies } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  CompanyPolicies.create(body)
    .then((companyPolicies) => companyPolicies.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query } }, res, next) =>
  CompanyPolicies.find(query)
    .then((companyPolicies) => companyPolicies.map((companyPolicies) => companyPolicies.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  CompanyPolicies.findById(params.id)
    .then(notFound(res))
    .then((companyPolicies) => companyPolicies ? companyPolicies.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  CompanyPolicies.findById(params.id)
    .then(notFound(res))
    .then((companyPolicies) => companyPolicies ? Object.assign(companyPolicies, body).save() : null)
    .then((companyPolicies) => companyPolicies ? companyPolicies.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  CompanyPolicies.findById(params.id)
    .then(notFound(res))
    .then((companyPolicies) => companyPolicies ? companyPolicies.remove() : null)
    .then(success(res, 204))
    .catch(next)
