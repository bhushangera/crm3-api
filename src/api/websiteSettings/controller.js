import { success, notFound } from '../../services/response/'
import { WebsiteSettings } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  WebsiteSettings.create(body)
    .then((websiteSettings) => websiteSettings.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  WebsiteSettings.find(query, select)
    .then((websiteSettings) => websiteSettings.map((websiteSettings) => websiteSettings.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  WebsiteSettings.findById(params.id)
    .then(notFound(res))
    .then((websiteSettings) => websiteSettings ? websiteSettings.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  WebsiteSettings.findById(params.id)
    .then(notFound(res))
    .then((websiteSettings) => websiteSettings ? Object.assign(websiteSettings, body).save() : null)
    .then((websiteSettings) => websiteSettings ? websiteSettings.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  WebsiteSettings.findById(params.id)
    .then(notFound(res))
    .then((websiteSettings) => websiteSettings ? websiteSettings.remove() : null)
    .then(success(res, 204))
    .catch(next)
