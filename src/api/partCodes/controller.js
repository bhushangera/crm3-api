import { success, notFound } from '../../services/response/'
import { PartCodes } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  PartCodes.create(body)
    .then((partCodes) => partCodes.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  PartCodes.find(query, select)
    .then((partCodes) => partCodes.map((partCodes) => partCodes.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  PartCodes.findById(params.id)
    .then(notFound(res))
    .then((partCodes) => partCodes ? partCodes.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  PartCodes.findById(params.id)
    .then(notFound(res))
    .then((partCodes) => partCodes ? Object.assign(partCodes, body).save() : null)
    .then((partCodes) => partCodes ? partCodes.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  PartCodes.findById(params.id)
    .then(notFound(res))
    .then((partCodes) => partCodes ? partCodes.remove() : null)
    .then(success(res, 204))
    .catch(next)
