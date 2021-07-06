import { success, notFound } from '../../services/response/'
import { Uom } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Uom.create(body)
    .then((uom) => uom.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  Uom.find(query, select)
    .then((uoms) => uoms.map((uom) => uom.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Uom.findById(params.id)
    .then(notFound(res))
    .then((uom) => uom ? uom.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Uom.findById(params.id)
    .then(notFound(res))
    .then((uom) => uom ? Object.assign(uom, body).save() : null)
    .then((uom) => uom ? uom.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Uom.findById(params.id)
    .then(notFound(res))
    .then((uom) => uom ? uom.remove() : null)
    .then(success(res, 204))
    .catch(next)
