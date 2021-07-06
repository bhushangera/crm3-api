import { success, notFound } from '../../services/response/'
import { Salutations } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Salutations.create(body)
    .then((salutations) => salutations.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select} }, res, next) =>
  Salutations.find(query, select)
    .then((salutations) => salutations.map((salutations) => salutations.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Salutations.findById(params.id)
    .then(notFound(res))
    .then((salutations) => salutations ? salutations.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Salutations.findById(params.id)
    .then(notFound(res))
    .then((salutations) => salutations ? Object.assign(salutations, body).save() : null)
    .then((salutations) => salutations ? salutations.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Salutations.findById(params.id)
    .then(notFound(res))
    .then((salutations) => salutations ? salutations.remove() : null)
    .then(success(res, 204))
    .catch(next)
