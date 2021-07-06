import { success, notFound } from '../../services/response/'
import { Tcities } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Tcities.create(body)
    .then((tcities) => tcities.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select} }, res, next) =>
  Tcities.find(query, select)
    .then((tcities) => tcities.map((tcities) => tcities.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Tcities.findById(params.id)
    .then(notFound(res))
    .then((tcities) => tcities ? tcities.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Tcities.findById(params.id)
    .then(notFound(res))
    .then((tcities) => tcities ? Object.assign(tcities, body).save() : null)
    .then((tcities) => tcities ? tcities.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Tcities.findById(params.id)
    .then(notFound(res))
    .then((tcities) => tcities ? tcities.remove() : null)
    .then(success(res, 204))
    .catch(next)
