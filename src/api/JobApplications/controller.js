import { success, notFound } from '../../services/response/'
import { JobApplications } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  JobApplications.create(body)
    .then((jobApplications) => jobApplications.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select} }, res, next) =>
  JobApplications.find(query, select)
    .then((jobApplications) => jobApplications.map((jobApplications) => jobApplications.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  JobApplications.findById(params.id)
    .then(notFound(res))
    .then((jobApplications) => jobApplications ? jobApplications.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  JobApplications.findById(params.id)
    .then(notFound(res))
    .then((jobApplications) => jobApplications ? Object.assign(jobApplications, body).save() : null)
    .then((jobApplications) => jobApplications ? jobApplications.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  JobApplications.findById(params.id)
    .then(notFound(res))
    .then((jobApplications) => jobApplications ? jobApplications.remove() : null)
    .then(success(res, 204))
    .catch(next)
