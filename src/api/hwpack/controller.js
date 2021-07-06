import { success, notFound } from '../../services/response/'
import { Hwpack } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Hwpack.create(body)
    .then((hwpack) => hwpack.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  Hwpack.find(query, select)
    .then((hwpacks) => hwpacks.map((hwpack) => hwpack.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Hwpack.findById(params.id)
    .then(notFound(res))
    .then((hwpack) => hwpack ? hwpack.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Hwpack.findById(params.id)
    .then(notFound(res))
    .then((hwpack) => hwpack ? Object.assign(hwpack, body).save() : null)
    .then((hwpack) => hwpack ? hwpack.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Hwpack.findById(params.id)
    .then(notFound(res))
    .then((hwpack) => hwpack ? hwpack.remove() : null)
    .then(success(res, 204))
    .catch(next)
