import { success, notFound } from '../../services/response/'
import { HrPositions } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  HrPositions.create(body)
    .then((hrPositions) => hrPositions.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  HrPositions.find(query, select)
    .then((hrPositions) => hrPositions.map((hrPositions) => hrPositions.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  HrPositions.findById(params.id)
    .then(notFound(res))
    .then((hrPositions) => hrPositions ? hrPositions.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  HrPositions.findById(params.id)
    .then(notFound(res))
    .then((hrPositions) => hrPositions ? Object.assign(hrPositions, body).save() : null)
    .then((hrPositions) => hrPositions ? hrPositions.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  HrPositions.findById(params.id)
    .then(notFound(res))
    .then((hrPositions) => hrPositions ? hrPositions.remove() : null)
    .then(success(res, 204))
    .catch(next)
