import { success, notFound } from '../../services/response/'
import { MaterialBrands } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  MaterialBrands.create(body)
    .then((materialBrands) => materialBrands.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  MaterialBrands.find(query, select)
    .then((materialBrands) => materialBrands.map((materialBrands) => materialBrands.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  MaterialBrands.findById(params.id)
    .then(notFound(res))
    .then((materialBrands) => materialBrands ? materialBrands.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  MaterialBrands.findById(params.id)
    .then(notFound(res))
    .then((materialBrands) => materialBrands ? Object.assign(materialBrands, body).save() : null)
    .then((materialBrands) => materialBrands ? materialBrands.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  MaterialBrands.findById(params.id)
    .then(notFound(res))
    .then((materialBrands) => materialBrands ? materialBrands.remove() : null)
    .then(success(res, 204))
    .catch(next)
