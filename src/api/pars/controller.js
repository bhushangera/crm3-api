import { success, notFound } from '../../services/response/'
import { Pars } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Pars.create(body)
    .then((pars) => pars.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  Pars.find(query, select)
    .then((pars) => pars.map((pars) => pars.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Pars.findById(params.id)
    .then(notFound(res))
    .then((pars) => pars ? pars.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Pars.findById(params.id)
    .then(notFound(res))
    .then((pars) => pars ? Object.assign(pars, body).save() : null)
    .then((pars) => pars ? pars.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Pars.findById(params.id)
    .then(notFound(res))
    .then((pars) => pars ? pars.remove() : null)
    .then(success(res, 204))
    .catch(next)
