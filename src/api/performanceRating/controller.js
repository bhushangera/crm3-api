import { success, notFound } from '../../services/response/'
import { PerformanceRating } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  PerformanceRating.create(body)
    .then((performanceRating) => performanceRating.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  PerformanceRating.find(query, select)
    .then((performanceRatings) => performanceRatings.map((performanceRating) => performanceRating.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  PerformanceRating.findById(params.id)
    .then(notFound(res))
    .then((performanceRating) => performanceRating ? performanceRating.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  PerformanceRating.findById(params.id)
    .then(notFound(res))
    .then((performanceRating) => performanceRating ? Object.assign(performanceRating, body).save() : null)
    .then((performanceRating) => performanceRating ? performanceRating.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  PerformanceRating.findById(params.id)
    .then(notFound(res))
    .then((performanceRating) => performanceRating ? performanceRating.remove() : null)
    .then(success(res, 204))
    .catch(next)
