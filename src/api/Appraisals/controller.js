import { success, notFound } from '../../services/response/'
import { Appraisals } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Appraisals.create(body)
    .then((appraisals) => appraisals.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select} }, res, next) =>
  Appraisals.find(query, select)
    .then((appraisals) => appraisals.map((appraisals) => appraisals.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Appraisals.findById(params.id)
    .then(notFound(res))
    .then((appraisals) => appraisals ? appraisals.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Appraisals.findById(params.id)
    .then(notFound(res))
    .then((appraisals) => appraisals ? Object.assign(appraisals, body).save() : null)
    .then((appraisals) => appraisals ? appraisals.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Appraisals.findById(params.id)
    .then(notFound(res))
    .then((appraisals) => appraisals ? appraisals.remove() : null)
    .then(success(res, 204))
    .catch(next)
