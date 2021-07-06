import { success, notFound } from '../../services/response/'
import { ShoppingCart } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  ShoppingCart.create(body)
    .then((shoppingCart) => shoppingCart.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  ShoppingCart.find(query, select)
    .then((shoppingCarts) => shoppingCarts.map((shoppingCart) => shoppingCart.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  ShoppingCart.findById(params.id)
    .then(notFound(res))
    .then((shoppingCart) => shoppingCart ? shoppingCart.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  ShoppingCart.findById(params.id)
    .then(notFound(res))
    .then((shoppingCart) => shoppingCart ? Object.assign(shoppingCart, body).save() : null)
    .then((shoppingCart) => shoppingCart ? shoppingCart.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  ShoppingCart.findById(params.id)
    .then(notFound(res))
    .then((shoppingCart) => shoppingCart ? shoppingCart.remove() : null)
    .then(success(res, 204))
    .catch(next)
