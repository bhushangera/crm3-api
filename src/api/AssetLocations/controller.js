import { success, notFound } from '../../services/response/'
import { AssetLocations } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  AssetLocations.create(body)
    .then((assetLocations) => assetLocations.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select} }, res, next) =>
  AssetLocations.find(query, select)
    .then((assetLocations) => assetLocations.map((assetLocations) => assetLocations.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  AssetLocations.findById(params.id)
    .then(notFound(res))
    .then((assetLocations) => assetLocations ? assetLocations.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  AssetLocations.findById(params.id)
    .then(notFound(res))
    .then((assetLocations) => assetLocations ? Object.assign(assetLocations, body).save() : null)
    .then((assetLocations) => assetLocations ? assetLocations.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  AssetLocations.findById(params.id)
    .then(notFound(res))
    .then((assetLocations) => assetLocations ? assetLocations.remove() : null)
    .then(success(res, 204))
    .catch(next)
