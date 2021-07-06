import { success, notFound } from '../../services/response/'
import { DlrProducts } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  DlrProducts.create(body)
    .then((dlrProducts) => dlrProducts.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  DlrProducts.find(query, select)
    .then((dlrProducts) => dlrProducts.map((dlrProducts) => dlrProducts.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  DlrProducts.findById(params.id)
    .then(notFound(res))
    .then((dlrProducts) => dlrProducts ? dlrProducts.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  DlrProducts.findById(params.id)
    .then(notFound(res))
    .then((dlrProducts) => dlrProducts ? Object.assign(dlrProducts, body).save() : null)
    .then((dlrProducts) => dlrProducts ? dlrProducts.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  DlrProducts.findById(params.id)
    .then(notFound(res))
    .then((dlrProducts) => dlrProducts ? dlrProducts.remove() : null)
    .then(success(res, 204))
    .catch(next)
