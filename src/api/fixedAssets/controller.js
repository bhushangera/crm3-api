import { success, notFound } from '../../services/response/'
import { FixedAssets } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  FixedAssets.create(body)
    .then((fixedAssets) => fixedAssets.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  FixedAssets.find(query, select)
    .then((fixedAssets) => fixedAssets.map((fixedAssets) => fixedAssets.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  FixedAssets.findById(params.id)
    .then(notFound(res))
    .then((fixedAssets) => fixedAssets ? fixedAssets.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  FixedAssets.findById(params.id)
    .then(notFound(res))
    .then((fixedAssets) => fixedAssets ? Object.assign(fixedAssets, body).save() : null)
    .then((fixedAssets) => fixedAssets ? fixedAssets.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  FixedAssets.findById(params.id)
    .then(notFound(res))
    .then((fixedAssets) => fixedAssets ? fixedAssets.remove() : null)
    .then(success(res, 204))
    .catch(next)
