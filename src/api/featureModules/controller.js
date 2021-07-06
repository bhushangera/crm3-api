import { success, notFound } from '../../services/response/'
import { FeatureModules } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  FeatureModules.create(body)
    .then((featureModules) => featureModules.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  FeatureModules.find(query, select)
    .then((featureModules) => featureModules.map((featureModules) => featureModules.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  FeatureModules.findById(params.id)
    .then(notFound(res))
    .then((featureModules) => featureModules ? featureModules.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  FeatureModules.findById(params.id)
    .then(notFound(res))
    .then((featureModules) => featureModules ? Object.assign(featureModules, body).save() : null)
    .then((featureModules) => featureModules ? featureModules.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  FeatureModules.findById(params.id)
    .then(notFound(res))
    .then((featureModules) => featureModules ? featureModules.remove() : null)
    .then(success(res, 204))
    .catch(next)
