import { success, notFound } from '../../services/response/'
import { Jd } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Jd.create(body)
    .then((jd) => jd.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  Jd.find(query, select)
    .then((jds) => jds.map((jd) => jd.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Jd.findById(params.id)
    .then(notFound(res))
    .then((jd) => jd ? jd.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Jd.findById(params.id)
    .then(notFound(res))
    .then((jd) => jd ? Object.assign(jd, body).save() : null)
    .then((jd) => jd ? jd.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Jd.findById(params.id)
    .then(notFound(res))
    .then((jd) => jd ? jd.remove() : null)
    .then(success(res, 204))
    .catch(next)
