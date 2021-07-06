import { success, notFound } from '../../services/response/'
import { FixedAssetAssignments } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  FixedAssetAssignments.create(body)
    .then((fixedAssetAssignments) => fixedAssetAssignments.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  FixedAssetAssignments.find(query, select)
    .then((fixedAssetAssignments) => fixedAssetAssignments.map((fixedAssetAssignments) => fixedAssetAssignments.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  FixedAssetAssignments.findById(params.id)
    .then(notFound(res))
    .then((fixedAssetAssignments) => fixedAssetAssignments ? fixedAssetAssignments.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  FixedAssetAssignments.findById(params.id)
    .then(notFound(res))
    .then((fixedAssetAssignments) => fixedAssetAssignments ? Object.assign(fixedAssetAssignments, body).save() : null)
    .then((fixedAssetAssignments) => fixedAssetAssignments ? fixedAssetAssignments.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  FixedAssetAssignments.findById(params.id)
    .then(notFound(res))
    .then((fixedAssetAssignments) => fixedAssetAssignments ? fixedAssetAssignments.remove() : null)
    .then(success(res, 204))
    .catch(next)
