import { success, notFound } from '../../services/response/'
import { Gl } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Gl.create(body)
    .then((gl) => gl.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select} }, res, next) =>
  Gl.find(query, select)
    .then((gls) => gls.map((gl) => gl.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Gl.findById(params.id)
    .then(notFound(res))
    .then((gl) => gl ? gl.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Gl.findById(params.id)
    .then(notFound(res))
    .then((gl) => gl ? Object.assign(gl, body).save() : null)
    .then((gl) => gl ? gl.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Gl.findById(params.id)
    .then(notFound(res))
    .then((gl) => gl ? gl.remove() : null)
    .then(success(res, 204))
    .catch(next)
