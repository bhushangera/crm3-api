import { success, notFound } from '../../services/response/'
import { PayGrades } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  PayGrades.create(body)
    .then((payGrades) => payGrades.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  PayGrades.find(query, select)
    .then((payGrades) => payGrades.map((payGrades) => payGrades.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  PayGrades.findById(params.id)
    .then(notFound(res))
    .then((payGrades) => payGrades ? payGrades.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  PayGrades.findById(params.id)
    .then(notFound(res))
    .then((payGrades) => payGrades ? Object.assign(payGrades, body).save() : null)
    .then((payGrades) => payGrades ? payGrades.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  PayGrades.findById(params.id)
    .then(notFound(res))
    .then((payGrades) => payGrades ? payGrades.remove() : null)
    .then(success(res, 204))
    .catch(next)
