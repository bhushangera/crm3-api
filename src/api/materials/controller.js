import { success, notFound } from '../../services/response/'
import { Materials } from '.'
var url = require('url')

export const create = ({ bodymen: { body } }, res, next) =>
  Materials.create(body)
    .then((materials) => materials.view(true))
    .then(success(res, 201))
    .catch(next)

// export const index = ({ querymen: { query, select } }, res, next) =>
//   Materials.find(query, select)
//     .then((materials) => materials.map((materials) => materials.view()))
//     .then(success(res))
//     .catch(next)
export const index = (req, res, next) => {
  var string = url.parse(req.url, true)
  var query = string.query
  Materials.find(query)
    .then((codes) => codes.map((codes) => codes.view()))
    .then(success(res))
    .catch(next)
}

export const show = ({ params }, res, next) =>
  Materials.findById(params.id)
    .then(notFound(res))
    .then((materials) => materials ? materials.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Materials.findById(params.id)
    .then(notFound(res))
    .then((materials) => materials ? Object.assign(materials, body).save() : null)
    .then((materials) => materials ? materials.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Materials.findById(params.id)
    .then(notFound(res))
    .then((materials) => materials ? materials.remove() : null)
    .then(success(res, 204))
    .catch(next)
