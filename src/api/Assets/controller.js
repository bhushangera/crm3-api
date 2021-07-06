import { success, notFound } from '../../services/response/'
import { Assets } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Assets.create(body)
    .then((assets) => assets.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select} }, res, next) =>
  Assets.find(query, select)
    .then((assets) => assets.map((assets) => assets.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Assets.findById(params.id)
    .then(notFound(res))
    .then((assets) => assets ? assets.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Assets.findById(params.id)
    .then(notFound(res))
    .then((assets) => assets ? Object.assign(assets, body).save() : null)
    .then((assets) => assets ? assets.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Assets.findById(params.id)
    .then(notFound(res))
    .then((assets) => assets ? assets.remove() : null)
    .then(success(res, 204))
    .catch(next)
