import { success, notFound } from '../../services/response/'
import { AssetCategories } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  AssetCategories.create(body)
    .then((assetCategories) => assetCategories.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select} }, res, next) =>
  AssetCategories.find(query, select)
    .then((assetCategories) => assetCategories.map((assetCategories) => assetCategories.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  AssetCategories.findById(params.id)
    .then(notFound(res))
    .then((assetCategories) => assetCategories ? assetCategories.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  AssetCategories.findById(params.id)
    .then(notFound(res))
    .then((assetCategories) => assetCategories ? Object.assign(assetCategories, body).save() : null)
    .then((assetCategories) => assetCategories ? assetCategories.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  AssetCategories.findById(params.id)
    .then(notFound(res))
    .then((assetCategories) => assetCategories ? assetCategories.remove() : null)
    .then(success(res, 204))
    .catch(next)
