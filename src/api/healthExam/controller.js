import { success, notFound } from '../../services/response/'
import { HealthExam } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  HealthExam.create(body)
    .then((healthExam) => healthExam.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  HealthExam.find(query, select)
    .then((healthExams) => healthExams.map((healthExam) => healthExam.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  HealthExam.findById(params.id)
    .then(notFound(res))
    .then((healthExam) => healthExam ? healthExam.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  HealthExam.findById(params.id)
    .then(notFound(res))
    .then((healthExam) => healthExam ? Object.assign(healthExam, body).save() : null)
    .then((healthExam) => healthExam ? healthExam.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  HealthExam.findById(params.id)
    .then(notFound(res))
    .then((healthExam) => healthExam ? healthExam.remove() : null)
    .then(success(res, 204))
    .catch(next)
