import { success, notFound } from '../../services/response/'
import { TrainingTypes } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  TrainingTypes.create(body)
    .then((trainingTypes) => trainingTypes.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select} }, res, next) =>
  TrainingTypes.find(query, select)
    .then((trainingTypes) => trainingTypes.map((trainingTypes) => trainingTypes.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  TrainingTypes.findById(params.id)
    .then(notFound(res))
    .then((trainingTypes) => trainingTypes ? trainingTypes.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  TrainingTypes.findById(params.id)
    .then(notFound(res))
    .then((trainingTypes) => trainingTypes ? Object.assign(trainingTypes, body).save() : null)
    .then((trainingTypes) => trainingTypes ? trainingTypes.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  TrainingTypes.findById(params.id)
    .then(notFound(res))
    .then((trainingTypes) => trainingTypes ? trainingTypes.remove() : null)
    .then(success(res, 204))
    .catch(next)
