import { success, notFound } from '../../services/response/'
import { License } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  License.create(body)
    .then((license) => license.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  License.find(query, select)
    .then((licenses) => licenses.map((license) => license.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  License.findById(params.id)
    .then(notFound(res))
    .then((license) => license ? license.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  License.findById(params.id)
    .then(notFound(res))
    .then((license) => license ? Object.assign(license, body).save() : null)
    .then((license) => license ? license.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  License.findById(params.id)
    .then(notFound(res))
    .then((license) => license ? license.remove() : null)
    .then(success(res, 204))
    .catch(next)
