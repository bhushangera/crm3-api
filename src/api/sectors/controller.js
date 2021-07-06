import { success, notFound } from '../../services/response/'
import { Sectors } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Sectors.create(body)
    .then((sectors) => sectors.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  Sectors.find(query, select)
    .then((sectors) => sectors.map((sectors) => sectors.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Sectors.findById(params.id)
    .then(notFound(res))
    .then((sectors) => sectors ? sectors.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Sectors.findById(params.id)
    .then(notFound(res))
    .then((sectors) => sectors ? Object.assign(sectors, body).save() : null)
    .then((sectors) => sectors ? sectors.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Sectors.findById(params.id)
    .then(notFound(res))
    .then((sectors) => sectors ? sectors.remove() : null)
    .then(success(res, 204))
    .catch(next)
