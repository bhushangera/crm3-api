import { success, notFound } from '../../services/response/'
import { PiShutter } from '.'
const url = require('url')

export const create = ({ bodymen: { body } }, res, next) =>
  PiShutter.create(body)
    .then((piShutter) => piShutter.view(true))
    .then(success(res, 201))
    .catch(next)

// export const index = ({ querymen: { query, select } }, res, next) =>
//   PiShutter.find(query, select)
//     .then((piShutters) => piShutters.map((piShutter) => piShutter.view()))
//     .then(success(res))
//     .catch(next)

export const index = (req, res, next) => {
  var string = url.parse(req.url, true)
  var query = string.query
  PiShutter.find(query)
    .then((codes) => codes.map((codes) => codes.view()))
    .then(success(res))
    .catch(next)
}
export const show = ({ params }, res, next) =>
  PiShutter.findById(params.id)
    .then(notFound(res))
    .then((piShutter) => piShutter ? piShutter.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  PiShutter.findById(params.id)
    .then(notFound(res))
    .then((piShutter) => piShutter ? Object.assign(piShutter, body).save() : null)
    .then((piShutter) => piShutter ? piShutter.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  PiShutter.findById(params.id)
    .then(notFound(res))
    .then((piShutter) => piShutter ? piShutter.remove() : null)
    .then(success(res, 204))
    .catch(next)
