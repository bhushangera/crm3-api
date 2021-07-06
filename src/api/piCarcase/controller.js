import { success, notFound } from '../../services/response/'
import { PiCarcase } from '.'
const url = require('url')

export const create = ({ bodymen: { body } }, res, next) =>
  PiCarcase.create(body)
    .then((piCarcase) => piCarcase.view(true))
    .then(success(res, 201))
    .catch(next)

// export const index = ({ querymen: { query, select } }, res, next) =>
//   PiCarcase.find(query, select)
//     .then((piCarcases) => piCarcases.map((piCarcase) => piCarcase.view()))
//     .then(success(res))
//     .catch(next)

export const index = (req, res, next) => {
  var string = url.parse(req.url, true)
  var query = string.query
  PiCarcase.find(query)
    .then((codes) => codes.map((codes) => codes.view()))
    .then(success(res))
    .catch(next)
}
export const show = ({ params }, res, next) =>
  PiCarcase.findById(params.id)
    .then(notFound(res))
    .then((piCarcase) => piCarcase ? piCarcase.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  PiCarcase.findById(params.id)
    .then(notFound(res))
    .then((piCarcase) => piCarcase ? Object.assign(piCarcase, body).save() : null)
    .then((piCarcase) => piCarcase ? piCarcase.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  PiCarcase.findById(params.id)
    .then(notFound(res))
    .then((piCarcase) => piCarcase ? piCarcase.remove() : null)
    .then(success(res, 204))
    .catch(next)
