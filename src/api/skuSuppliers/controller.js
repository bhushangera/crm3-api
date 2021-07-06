import { success, notFound } from '../../services/response/'
import { SkuSuppliers } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  SkuSuppliers.create(body)
    .then((skuSuppliers) => skuSuppliers.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  SkuSuppliers.find(query, select)
    .then((skuSuppliers) => skuSuppliers.map((skuSuppliers) => skuSuppliers.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  SkuSuppliers.findById(params.id)
    .then(notFound(res))
    .then((skuSuppliers) => skuSuppliers ? skuSuppliers.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  SkuSuppliers.findById(params.id)
    .then(notFound(res))
    .then((skuSuppliers) => skuSuppliers ? Object.assign(skuSuppliers, body).save() : null)
    .then((skuSuppliers) => skuSuppliers ? skuSuppliers.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  SkuSuppliers.findById(params.id)
    .then(notFound(res))
    .then((skuSuppliers) => skuSuppliers ? skuSuppliers.remove() : null)
    .then(success(res, 204))
    .catch(next)
