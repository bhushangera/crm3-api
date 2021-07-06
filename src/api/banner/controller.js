import { success, notFound } from '../../services/response/'
import { Banner } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Banner.create(body)
    .then((banner) => banner.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  Banner.find(query, select)
    .then((banners) => banners.map((banner) => banner.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Banner.findById(params.id)
    .then(notFound(res))
    .then((banner) => banner ? banner.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Banner.findById(params.id)
    .then(notFound(res))
    .then((banner) => banner ? Object.assign(banner, body).save() : null)
    .then((banner) => banner ? banner.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Banner.findById(params.id)
    .then(notFound(res))
    .then((banner) => banner ? banner.remove() : null)
    .then(success(res, 204))
    .catch(next)
