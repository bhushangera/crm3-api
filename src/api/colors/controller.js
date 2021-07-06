import { success, notFound } from '../../services/response/'
import { Colors } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Colors.create(body)
    .then((colors) => colors.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  Colors.find(query, select)
    .then((colors) => colors.map((colors) => colors.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Colors.findById(params.id)
    .then(notFound(res))
    .then((colors) => colors ? colors.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Colors.findById(params.id)
    .then(notFound(res))
    .then((colors) => colors ? Object.assign(colors, body).save() : null)
    .then((colors) => colors ? colors.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Colors.findById(params.id)
    .then(notFound(res))
    .then((colors) => colors ? colors.remove() : null)
    .then(success(res, 204))
    .catch(next)
