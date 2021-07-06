import { success, notFound } from '../../services/response/'
import { Icons } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Icons.create(body)
    .then((icons) => icons.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  Icons.find(query, select)
    .then((icons) => icons.map((icons) => icons.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Icons.findById(params.id)
    .then(notFound(res))
    .then((icons) => icons ? icons.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Icons.findById(params.id)
    .then(notFound(res))
    .then((icons) => icons ? Object.assign(icons, body).save() : null)
    .then((icons) => icons ? icons.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Icons.findById(params.id)
    .then(notFound(res))
    .then((icons) => icons ? icons.remove() : null)
    .then(success(res, 204))
    .catch(next)
