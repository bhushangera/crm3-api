import { success, notFound } from '../../services/response/'
import { ProjectMilestomes } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  ProjectMilestomes.create(body)
    .then((projectMilestomes) => projectMilestomes.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select} }, res, next) =>
  ProjectMilestomes.find(query, select)
    .then((projectMilestomes) => projectMilestomes.map((projectMilestomes) => projectMilestomes.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  ProjectMilestomes.findById(params.id)
    .then(notFound(res))
    .then((projectMilestomes) => projectMilestomes ? projectMilestomes.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  ProjectMilestomes.findById(params.id)
    .then(notFound(res))
    .then((projectMilestomes) => projectMilestomes ? Object.assign(projectMilestomes, body).save() : null)
    .then((projectMilestomes) => projectMilestomes ? projectMilestomes.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  ProjectMilestomes.findById(params.id)
    .then(notFound(res))
    .then((projectMilestomes) => projectMilestomes ? projectMilestomes.remove() : null)
    .then(success(res, 204))
    .catch(next)
