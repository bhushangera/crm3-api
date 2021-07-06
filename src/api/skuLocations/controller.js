import { success, notFound } from '../../services/response/'
import { SkuLocations } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  SkuLocations.create(body)
    .then((skuLocations) => skuLocations.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  SkuLocations.find(query, select)
    .then((skuLocations) => skuLocations.map((skuLocations) => skuLocations.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  SkuLocations.findById(params.id)
    .then(notFound(res))
    .then((skuLocations) => skuLocations ? skuLocations.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  SkuLocations.findById(params.id)
    .then(notFound(res))
    .then((skuLocations) => skuLocations ? Object.assign(skuLocations, body).save() : null)
    .then((skuLocations) => skuLocations ? skuLocations.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  SkuLocations.findById(params.id)
    .then(notFound(res))
    .then((skuLocations) => skuLocations ? skuLocations.remove() : null)
    .then(success(res, 204))
    .catch(next)
