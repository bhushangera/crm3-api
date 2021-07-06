import { success, notFound } from '../../services/response/'
import { ProductImages } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  ProductImages.create(body)
    .then((productImages) => productImages.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  ProductImages.count(query)
    .then(count => ProductImages.find(query, select)
      .then((productImages) => ({
        count,
        rows: productImages.map((productImages) => productImages.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  ProductImages.findById(params.id)
    .then(notFound(res))
    .then((productImages) => productImages ? productImages.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  ProductImages.findById(params.id)
    .then(notFound(res))
    .then((productImages) => productImages ? Object.assign(productImages, body).save() : null)
    .then((productImages) => productImages ? productImages.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  ProductImages.findById(params.id)
    .then(notFound(res))
    .then((productImages) => productImages ? productImages.remove() : null)
    .then(success(res, 204))
    .catch(next)
