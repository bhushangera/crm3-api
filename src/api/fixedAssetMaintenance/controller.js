import { success, notFound } from '../../services/response/'
import { FixedAssetMaintenance } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  FixedAssetMaintenance.create(body)
    .then((fixedAssetMaintenance) => fixedAssetMaintenance.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  FixedAssetMaintenance.find(query, select)
    .then((fixedAssetMaintenances) => fixedAssetMaintenances.map((fixedAssetMaintenance) => fixedAssetMaintenance.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  FixedAssetMaintenance.findById(params.id)
    .then(notFound(res))
    .then((fixedAssetMaintenance) => fixedAssetMaintenance ? fixedAssetMaintenance.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  FixedAssetMaintenance.findById(params.id)
    .then(notFound(res))
    .then((fixedAssetMaintenance) => fixedAssetMaintenance ? Object.assign(fixedAssetMaintenance, body).save() : null)
    .then((fixedAssetMaintenance) => fixedAssetMaintenance ? fixedAssetMaintenance.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  FixedAssetMaintenance.findById(params.id)
    .then(notFound(res))
    .then((fixedAssetMaintenance) => fixedAssetMaintenance ? fixedAssetMaintenance.remove() : null)
    .then(success(res, 204))
    .catch(next)
