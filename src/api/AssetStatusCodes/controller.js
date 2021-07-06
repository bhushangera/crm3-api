import { success, notFound } from '../../services/response/'
import { AssetStatusCodes } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  AssetStatusCodes.create(body)
    .then((assetStatusCodes) => assetStatusCodes.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select} }, res, next) =>
  AssetStatusCodes.find(query, select)
    .then((assetStatusCodes) => assetStatusCodes.map((assetStatusCodes) => assetStatusCodes.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  AssetStatusCodes.findById(params.id)
    .then(notFound(res))
    .then((assetStatusCodes) => assetStatusCodes ? assetStatusCodes.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  AssetStatusCodes.findById(params.id)
    .then(notFound(res))
    .then((assetStatusCodes) => assetStatusCodes ? Object.assign(assetStatusCodes, body).save() : null)
    .then((assetStatusCodes) => assetStatusCodes ? assetStatusCodes.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  AssetStatusCodes.findById(params.id)
    .then(notFound(res))
    .then((assetStatusCodes) => assetStatusCodes ? assetStatusCodes.remove() : null)
    .then(success(res, 204))
    .catch(next)
