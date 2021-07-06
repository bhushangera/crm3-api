import { success, notFound } from '../../services/response/'
import { OrderScroll } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  OrderScroll.create(body)
    .then((orderScroll) => orderScroll.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  OrderScroll.find(query, select)
    .then((orderScrolls) => orderScrolls.map((orderScroll) => orderScroll.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  OrderScroll.findById(params.id)
    .then(notFound(res))
    .then((orderScroll) => orderScroll ? orderScroll.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  OrderScroll.findById(params.id)
    .then(notFound(res))
    .then((orderScroll) => orderScroll ? Object.assign(orderScroll, body).save() : null)
    .then((orderScroll) => orderScroll ? orderScroll.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  OrderScroll.findById(params.id)
    .then(notFound(res))
    .then((orderScroll) => orderScroll ? orderScroll.remove() : null)
    .then(success(res, 204))
    .catch(next)
