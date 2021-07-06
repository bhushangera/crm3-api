import { success, notFound } from '../../services/response/'
import { ScaleCharts } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  ScaleCharts.create(body)
    .then((scaleCharts) => scaleCharts.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query } }, res, next) =>
  ScaleCharts.find(query)
    .then((scaleCharts) => scaleCharts.map((scaleCharts) => scaleCharts.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  ScaleCharts.findById(params.id)
    .then(notFound(res))
    .then((scaleCharts) => scaleCharts ? scaleCharts.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  ScaleCharts.findById(params.id)
    .then(notFound(res))
    .then((scaleCharts) => scaleCharts ? Object.assign(scaleCharts, body).save() : null)
    .then((scaleCharts) => scaleCharts ? scaleCharts.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  ScaleCharts.findById(params.id)
    .then(notFound(res))
    .then((scaleCharts) => scaleCharts ? scaleCharts.remove() : null)
    .then(success(res, 204))
    .catch(next)
