import { success, notFound } from '../../services/response/'
import { Webpages } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Webpages.create(body)
    .then((webpages) => webpages.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  Webpages.find(query, select)
    .then((webpages) => webpages.map((webpages) => webpages.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Webpages.findById(params.id)
    .then(notFound(res))
    .then((webpages) => webpages ? webpages.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Webpages.findById(params.id)
    .then(notFound(res))
    .then((webpages) => webpages ? Object.assign(webpages, body).save() : null)
    .then((webpages) => webpages ? webpages.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Webpages.findById(params.id)
    .then(notFound(res))
    .then((webpages) => webpages ? webpages.remove() : null)
    .then(success(res, 204))
    .catch(next)
