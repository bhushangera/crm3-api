import { success, notFound } from '../../services/response/'
import { Ag } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Ag.create(body)
    .then((ag) => ag.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  Ag.find(query, select)
    .then((ags) => ags.map((ag) => ag.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Ag.findById(params.id)
    .then(notFound(res))
    .then((ag) => ag ? ag.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Ag.findById(params.id)
    .then(notFound(res))
    .then((ag) => ag ? Object.assign(ag, body).save() : null)
    .then((ag) => ag ? ag.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Ag.findById(params.id)
    .then(notFound(res))
    .then((ag) => ag ? ag.remove() : null)
    .then(success(res, 204))
    .catch(next)
