import { success, notFound } from '../../services/response/'
import { Vouchers } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Vouchers.create(body)
    .then((vouchers) => vouchers.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select} }, res, next) =>
  Vouchers.find(query, select)
    .then((vouchers) => vouchers.map((vouchers) => vouchers.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Vouchers.findById(params.id)
    .then(notFound(res))
    .then((vouchers) => vouchers ? vouchers.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Vouchers.findById(params.id)
    .then(notFound(res))
    .then((vouchers) => vouchers ? Object.assign(vouchers, body).save() : null)
    .then((vouchers) => vouchers ? vouchers.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Vouchers.findById(params.id)
    .then(notFound(res))
    .then((vouchers) => vouchers ? vouchers.remove() : null)
    .then(success(res, 204))
    .catch(next)
