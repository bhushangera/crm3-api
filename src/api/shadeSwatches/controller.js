import { success, notFound } from '../../services/response/'
import { ShadeSwatches } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  ShadeSwatches.create(body)
    .then((shadeSwatches) => shadeSwatches.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query } }, res, next) =>
  ShadeSwatches.find(query)
    .then((shadeSwatches) => shadeSwatches.map((shadeSwatches) => shadeSwatches.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  ShadeSwatches.findById(params.id)
    .then(notFound(res))
    .then((shadeSwatches) => shadeSwatches ? shadeSwatches.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  ShadeSwatches.findById(params.id)
    .then(notFound(res))
    .then((shadeSwatches) => shadeSwatches ? Object.assign(shadeSwatches, body).save() : null)
    .then((shadeSwatches) => shadeSwatches ? shadeSwatches.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  ShadeSwatches.findById(params.id)
    .then(notFound(res))
    .then((shadeSwatches) => shadeSwatches ? shadeSwatches.remove() : null)
    .then(success(res, 204))
    .catch(next)
