import { success, notFound } from '../../services/response/'
import { Ifsc } from '.'
var url = require('url')

export const create = ({ bodymen: { body } }, res, next) =>
  Ifsc.create(body)
    .then((ifsc) => ifsc.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = (req, res, next) => {
  var string = url.parse(req.url, true)
  var query = string.query
  Ifsc.find(query)
    .then((codes) => codes.map((codes) => codes.view()))
    .then(success(res))
    .catch(next)
}

export const show = ({ params }, res, next) =>
  Ifsc.findById(params.id)
    .then(notFound(res))
    .then((ifsc) => (ifsc ? ifsc.view() : null))
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Ifsc.findById(params.id)
    .then(notFound(res))
    .then((ifsc) => (ifsc ? Object.assign(ifsc, body).save() : null))
    .then((ifsc) => (ifsc ? ifsc.view(true) : null))
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Ifsc.findById(params.id)
    .then(notFound(res))
    .then((ifsc) => (ifsc ? ifsc.remove() : null))
    .then(success(res, 204))
    .catch(next)
