import { success, notFound } from '../../services/response/'
import { PriceBook } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  PriceBook.create(body)
    .then((priceBook) => priceBook.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query } }, res, next) =>
  PriceBook.find(query)
    .then((priceBooks) => priceBooks.map((priceBook) => priceBook.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  PriceBook.findById(params.id)
    .then(notFound(res))
    .then((priceBook) => priceBook ? priceBook.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  PriceBook.findById(params.id)
    .then(notFound(res))
    .then((priceBook) => priceBook ? Object.assign(priceBook, body).save() : null)
    .then((priceBook) => priceBook ? priceBook.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  PriceBook.findById(params.id)
    .then(notFound(res))
    .then((priceBook) => priceBook ? priceBook.remove() : null)
    .then(success(res, 204))
    .catch(next)
