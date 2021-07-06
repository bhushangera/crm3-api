import { success, notFound } from '../../services/response/'
import { LeadCategories } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  LeadCategories.create(body)
    .then((leadCategories) => leadCategories.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  LeadCategories.find(query, select)
    .then((leadCategories) => leadCategories.map((leadCategories) => leadCategories.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  LeadCategories.findById(params.id)
    .then(notFound(res))
    .then((leadCategories) => leadCategories ? leadCategories.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  LeadCategories.findById(params.id)
    .then(notFound(res))
    .then((leadCategories) => leadCategories ? Object.assign(leadCategories, body).save() : null)
    .then((leadCategories) => leadCategories ? leadCategories.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  LeadCategories.findById(params.id)
    .then(notFound(res))
    .then((leadCategories) => leadCategories ? leadCategories.remove() : null)
    .then(success(res, 204))
    .catch(next)
