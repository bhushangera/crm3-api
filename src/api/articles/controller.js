import { success, notFound } from '../../services/response/'
import { Articles } from '.'
var url = require('url')

export const create = ({ bodymen: { body } }, res, next) =>
  Articles.create(body)
    .then((articles) => articles.view(true))
    .then(success(res, 201))
    .catch(next)

// export const index = ({ querymen: { query, select } }, res, next) =>
//   Articles.find(query, select)
//     .then((articles) => articles.map((articles) => articles.view()))
//     .then(success(res))
//     .catch(next)

export const index = (req, res, next) => {
  var string = url.parse(req.url, true)
  var query = string.query
  Articles.find(query)
    .then((codes) => codes.map((codes) => codes.view()))
    .then(success(res))
    .catch(next)
}
export const show = ({ params }, res, next) =>
  Articles.findById(params.id)
    .then(notFound(res))
    .then((articles) => articles ? articles.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Articles.findById(params.id)
    .then(notFound(res))
    .then((articles) => articles ? Object.assign(articles, body).save() : null)
    .then((articles) => articles ? articles.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Articles.findById(params.id)
    .then(notFound(res))
    .then((articles) => articles ? articles.remove() : null)
    .then(success(res, 204))
    .catch(next)
