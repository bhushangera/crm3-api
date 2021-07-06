import { success, notFound } from '../../services/response/'
import { ArticleCodes } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  ArticleCodes.create(body)
    .then((articleCodes) => articleCodes.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  ArticleCodes.find(query, select)
      .then((articleCodes) => articleCodes.map((articleCodes) => articleCodes.view()))
      .then(success(res))
      .catch(next)

export const show = ({ params }, res, next) =>
  ArticleCodes.findById(params.id)
    .then(notFound(res))
    .then((articleCodes) => articleCodes ? articleCodes.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  ArticleCodes.findById(params.id)
    .then(notFound(res))
    .then((articleCodes) => articleCodes ? Object.assign(articleCodes, body).save() : null)
    .then((articleCodes) => articleCodes ? articleCodes.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  ArticleCodes.findById(params.id)
    .then(notFound(res))
    .then((articleCodes) => articleCodes ? articleCodes.remove() : null)
    .then(success(res, 204))
    .catch(next)
