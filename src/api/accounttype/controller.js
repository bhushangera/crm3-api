import { success, notFound } from '../../services/response/'
import { Accounttype } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Accounttype.create(body)
    .then((accounttype) => accounttype.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select} }, res, next) =>
  Accounttype.find(query, select)
    .then((accounttypes) => accounttypes.map((accounttype) => accounttype.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Accounttype.findById(params.id)
    .then(notFound(res))
    .then((accounttype) => accounttype ? accounttype.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Accounttype.findById(params.id)
    .then(notFound(res))
    .then((accounttype) => accounttype ? Object.assign(accounttype, body).save() : null)
    .then((accounttype) => accounttype ? accounttype.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Accounttype.findById(params.id)
    .then(notFound(res))
    .then((accounttype) => accounttype ? accounttype.remove() : null)
    .then(success(res, 204))
    .catch(next)
