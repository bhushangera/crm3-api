import { success, notFound } from '../../services/response/'
import { PageTags } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  PageTags.create(body)
    .then((pageTags) => pageTags.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  PageTags.find(query, select)
    .then((pageTags) => pageTags.map((pageTags) => pageTags.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  PageTags.findById(params.id)
    .then(notFound(res))
    .then((pageTags) => pageTags ? pageTags.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  PageTags.findById(params.id)
    .then(notFound(res))
    .then((pageTags) => pageTags ? Object.assign(pageTags, body).save() : null)
    .then((pageTags) => pageTags ? pageTags.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  PageTags.findById(params.id)
    .then(notFound(res))
    .then((pageTags) => pageTags ? pageTags.remove() : null)
    .then(success(res, 204))
    .catch(next)
