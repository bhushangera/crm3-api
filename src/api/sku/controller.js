import { success, notFound } from '../../services/response/'
import { Sku } from '.'
var url = require('url')
export const create = ({ bodymen: { body } }, res, next) =>
  Sku.create(body)
    .then((sku) => sku.view(true))
    .then(success(res, 201))
    .catch(next)

// export const index = ({ querymen: { query, select } }, res, next) =>

//   Sku.find(query, select)
//     .then((skus) => skus.map((sku) => sku.view()))
//     .then(success(res))
//     .catch(next)

// export const index = ({ querymen: { query, select } }, res, next) =>
//   Sku.count(query)
//     .then(count => Sku.find(query, select)
//       .then((skus) => ({
//         count,
//         rows: skus.map((testing) => testing.view())
//       }))
//     )
//     .then(success(res))
//     .catch(next)

export const index = (req, res, next) => {
  var string = url.parse(req.url, true)
  var query = string.query
  Sku.find(query)
    .then((codes) => codes.map((codes) => codes.view()))
    .then(success(res))
    .catch(next)
}

export const show = ({ params }, res, next) =>
  Sku.findById(params.id)
    .then(notFound(res))
    .then((sku) => sku ? sku.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Sku.findById(params.id)
    .then(notFound(res))
    .then((sku) => sku ? Object.assign(sku, body).save() : null)
    .then((sku) => sku ? sku.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Sku.findById(params.id)
    .then(notFound(res))
    .then((sku) => sku ? sku.remove() : null)
    .then(success(res, 204))
    .catch(next)
