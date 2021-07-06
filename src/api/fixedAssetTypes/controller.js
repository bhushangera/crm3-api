import { success, notFound } from '../../services/response/'
import { FixedAssetTypes } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  FixedAssetTypes.create(body)
    .then((fixedAssetTypes) => fixedAssetTypes.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  FixedAssetTypes.find(query, select)
    .then((fixedAssetTypes) => fixedAssetTypes.map((fixedAssetTypes) => fixedAssetTypes.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  FixedAssetTypes.findById(params.id)
    .then(notFound(res))
    .then((fixedAssetTypes) => fixedAssetTypes ? fixedAssetTypes.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  FixedAssetTypes.findById(params.id)
    .then(notFound(res))
    .then((fixedAssetTypes) => fixedAssetTypes ? Object.assign(fixedAssetTypes, body).save() : null)
    .then((fixedAssetTypes) => fixedAssetTypes ? fixedAssetTypes.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  FixedAssetTypes.findById(params.id)
    .then(notFound(res))
    .then((fixedAssetTypes) => fixedAssetTypes ? fixedAssetTypes.remove() : null)
    .then(success(res, 204))
    .catch(next)
