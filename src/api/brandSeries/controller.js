import { success, notFound } from '../../services/response/'
import { BrandSeries } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  BrandSeries.create(body)
    .then((brandSeries) => brandSeries.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
 BrandSeries.find(query, select)
      .then((brandSeries) => brandSeries.map((brandSeries) => brandSeries.view()))
      .then(success(res))
      .catch(next)

export const show = ({ params }, res, next) =>
  BrandSeries.findById(params.id)
    .then(notFound(res))
    .then((brandSeries) => brandSeries ? brandSeries.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  BrandSeries.findById(params.id)
    .then(notFound(res))
    .then((brandSeries) => brandSeries ? Object.assign(brandSeries, body).save() : null)
    .then((brandSeries) => brandSeries ? brandSeries.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  BrandSeries.findById(params.id)
    .then(notFound(res))
    .then((brandSeries) => brandSeries ? brandSeries.remove() : null)
    .then(success(res, 204))
    .catch(next)
