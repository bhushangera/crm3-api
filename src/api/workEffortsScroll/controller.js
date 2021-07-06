import { success, notFound } from '../../services/response/'
import { WorkEffortsScroll } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  WorkEffortsScroll.create(body)
    .then((workEffortsScroll) => workEffortsScroll.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  WorkEffortsScroll.find(query, select)
    .then((workEffortsScrolls) => workEffortsScrolls.map((workEffortsScroll) => workEffortsScroll.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  WorkEffortsScroll.findById(params.id)
    .then(notFound(res))
    .then((workEffortsScroll) => workEffortsScroll ? workEffortsScroll.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  WorkEffortsScroll.findById(params.id)
    .then(notFound(res))
    .then((workEffortsScroll) => workEffortsScroll ? Object.assign(workEffortsScroll, body).save() : null)
    .then((workEffortsScroll) => workEffortsScroll ? workEffortsScroll.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  WorkEffortsScroll.findById(params.id)
    .then(notFound(res))
    .then((workEffortsScroll) => workEffortsScroll ? workEffortsScroll.remove() : null)
    .then(success(res, 204))
    .catch(next)
