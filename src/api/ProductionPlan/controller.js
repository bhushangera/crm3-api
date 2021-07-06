import { success, notFound } from '../../services/response/'
import { ProductionPlan } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  ProductionPlan.create(body)
    .then((productionPlan) => productionPlan.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select} }, res, next) =>
  ProductionPlan.find(query, select)
    .then((productionPlans) => productionPlans.map((productionPlan) => productionPlan.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  ProductionPlan.findById(params.id)
    .then(notFound(res))
    .then((productionPlan) => productionPlan ? productionPlan.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  ProductionPlan.findById(params.id)
    .then(notFound(res))
    .then((productionPlan) => productionPlan ? Object.assign(productionPlan, body).save() : null)
    .then((productionPlan) => productionPlan ? productionPlan.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  ProductionPlan.findById(params.id)
    .then(notFound(res))
    .then((productionPlan) => productionPlan ? productionPlan.remove() : null)
    .then(success(res, 204))
    .catch(next)
