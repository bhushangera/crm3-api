import { success, notFound } from '../../services/response/'
import { ModuleVariant } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  ModuleVariant.create(body)
    .then((moduleVariant) => moduleVariant.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query } }, res, next) =>
  ModuleVariant.find(query)
    .then((moduleVariants) => moduleVariants.map((moduleVariant) => moduleVariant.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  ModuleVariant.findById(params.id)
    .then(notFound(res))
    .then((moduleVariant) => moduleVariant ? moduleVariant.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  ModuleVariant.findById(params.id)
    .then(notFound(res))
    .then((moduleVariant) => moduleVariant ? Object.assign(moduleVariant, body).save() : null)
    .then((moduleVariant) => moduleVariant ? moduleVariant.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  ModuleVariant.findById(params.id)
    .then(notFound(res))
    .then((moduleVariant) => moduleVariant ? moduleVariant.remove() : null)
    .then(success(res, 204))
    .catch(next)
