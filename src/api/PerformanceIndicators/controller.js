import { success, notFound } from '../../services/response/'
import { PerformanceIndicators } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  PerformanceIndicators.create(body)
    .then((performanceIndicators) => performanceIndicators.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select} }, res, next) =>
  PerformanceIndicators.find(query, select)
    .then((performanceIndicators) => performanceIndicators.map((performanceIndicators) => performanceIndicators.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  PerformanceIndicators.findById(params.id)
    .then(notFound(res))
    .then((performanceIndicators) => performanceIndicators ? performanceIndicators.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  PerformanceIndicators.findById(params.id)
    .then(notFound(res))
    .then((performanceIndicators) => performanceIndicators ? Object.assign(performanceIndicators, body).save() : null)
    .then((performanceIndicators) => performanceIndicators ? performanceIndicators.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  PerformanceIndicators.findById(params.id)
    .then(notFound(res))
    .then((performanceIndicators) => performanceIndicators ? performanceIndicators.remove() : null)
    .then(success(res, 204))
    .catch(next)
