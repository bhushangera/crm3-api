import { success, notFound } from '../../services/response/'
import { Parties } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Parties.create(body)
    .then((parties) => parties.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  Parties.find(query, select)
    .then((parties) => parties.map((parties) => parties.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Parties.findById(params.id)
    .then(notFound(res))
    .then((parties) => parties ? parties.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Parties.findById(params.id)
    .then(notFound(res))
    .then((parties) => parties ? Object.assign(parties, body).save() : null)
    .then((parties) => parties ? parties.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Parties.findById(params.id)
    .then(notFound(res))
    .then((parties) => parties ? parties.remove() : null)
    .then(success(res, 204))
    .catch(next)
