import { success, notFound } from '../../services/response/'
import { ComponentModule } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  ComponentModule.create(body)
    .then((componentModule) => componentModule.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query } }, res, next) =>
  ComponentModule.find(query)
    .then((componentModules) => componentModules.map((componentModule) => componentModule.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  ComponentModule.findById(params.id)
    .then(notFound(res))
    .then((componentModule) => componentModule ? componentModule.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  ComponentModule.findById(params.id)
    .then(notFound(res))
    .then((componentModule) => componentModule ? Object.assign(componentModule, body).save() : null)
    .then((componentModule) => componentModule ? componentModule.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  ComponentModule.findById(params.id)
    .then(notFound(res))
    .then((componentModule) => componentModule ? componentModule.remove() : null)
    .then(success(res, 204))
    .catch(next)
