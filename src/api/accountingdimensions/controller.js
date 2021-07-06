import { success, notFound } from '../../services/response/'
import { Accountingdimensions } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Accountingdimensions.create(body)
    .then((accountingdimensions) => accountingdimensions.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  Accountingdimensions.find(query, select)
    .then((accountingdimensions) => accountingdimensions.map((accountingdimensions) => accountingdimensions.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Accountingdimensions.findById(params.id)
    .then(notFound(res))
    .then((accountingdimensions) => accountingdimensions ? accountingdimensions.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Accountingdimensions.findById(params.id)
    .then(notFound(res))
    .then((accountingdimensions) => accountingdimensions ? Object.assign(accountingdimensions, body).save() : null)
    .then((accountingdimensions) => accountingdimensions ? accountingdimensions.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Accountingdimensions.findById(params.id)
    .then(notFound(res))
    .then((accountingdimensions) => accountingdimensions ? accountingdimensions.remove() : null)
    .then(success(res, 204))
    .catch(next)
