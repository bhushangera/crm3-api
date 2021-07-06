import { success, notFound } from '../../services/response/'
import { UserTokens } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  UserTokens.create(body)
    .then((userTokens) => userTokens.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  UserTokens.find(query, select)
    .then((userTokens) => userTokens.map((userTokens) => userTokens.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  UserTokens.findById(params.id)
    .then(notFound(res))
    .then((userTokens) => userTokens ? userTokens.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  UserTokens.findById(params.id)
    .then(notFound(res))
    .then((userTokens) => userTokens ? Object.assign(userTokens, body).save() : null)
    .then((userTokens) => userTokens ? userTokens.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  UserTokens.findById(params.id)
    .then(notFound(res))
    .then((userTokens) => userTokens ? userTokens.remove() : null)
    .then(success(res, 204))
    .catch(next)
