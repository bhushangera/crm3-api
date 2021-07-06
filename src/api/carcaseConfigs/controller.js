import { success, notFound } from '../../services/response/'
import { CarcaseConfigs } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  CarcaseConfigs.create(body)
    .then((carcaseConfigs) => carcaseConfigs.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  CarcaseConfigs.find(query, select)
    .then((carcaseConfigs) => carcaseConfigs.map((carcaseConfigs) => carcaseConfigs.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  CarcaseConfigs.findById(params.id)
    .then(notFound(res))
    .then((carcaseConfigs) => carcaseConfigs ? carcaseConfigs.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  CarcaseConfigs.findById(params.id)
    .then(notFound(res))
    .then((carcaseConfigs) => carcaseConfigs ? Object.assign(carcaseConfigs, body).save() : null)
    .then((carcaseConfigs) => carcaseConfigs ? carcaseConfigs.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  CarcaseConfigs.findById(params.id)
    .then(notFound(res))
    .then((carcaseConfigs) => carcaseConfigs ? carcaseConfigs.remove() : null)
    .then(success(res, 204))
    .catch(next)
