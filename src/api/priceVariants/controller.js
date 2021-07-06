import { success, notFound } from '../../services/response/'
import { PriceVariants } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  PriceVariants.create(body)
    .then((priceVariants) => priceVariants.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query } }, res, next) =>
  PriceVariants.find(query)
    .then((priceVariants) => priceVariants.map((priceVariants) => priceVariants.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  PriceVariants.findById(params.id)
    .then(notFound(res))
    .then((priceVariants) => priceVariants ? priceVariants.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  PriceVariants.findById(params.id)
    .then(notFound(res))
    .then((priceVariants) => priceVariants ? Object.assign(priceVariants, body).save() : null)
    .then((priceVariants) => priceVariants ? priceVariants.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  PriceVariants.findById(params.id)
    .then(notFound(res))
    .then((priceVariants) => priceVariants ? priceVariants.remove() : null)
    .then(success(res, 204))
    .catch(next)
