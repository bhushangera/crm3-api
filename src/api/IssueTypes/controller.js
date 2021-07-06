import { success, notFound } from '../../services/response/'
import { IssueTypes } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  IssueTypes.create(body)
    .then((issueTypes) => issueTypes.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select} }, res, next) =>
  IssueTypes.find(query, select)
    .then((issueTypes) => issueTypes.map((issueTypes) => issueTypes.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  IssueTypes.findById(params.id)
    .then(notFound(res))
    .then((issueTypes) => issueTypes ? issueTypes.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  IssueTypes.findById(params.id)
    .then(notFound(res))
    .then((issueTypes) => issueTypes ? Object.assign(issueTypes, body).save() : null)
    .then((issueTypes) => issueTypes ? issueTypes.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  IssueTypes.findById(params.id)
    .then(notFound(res))
    .then((issueTypes) => issueTypes ? issueTypes.remove() : null)
    .then(success(res, 204))
    .catch(next)
