import { success, notFound } from '../../services/response/'
import { MarketingLists } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  MarketingLists.create(body)
    .then((marketingLists) => marketingLists.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query } }, res, next) =>
  MarketingLists.find(query)
    .then((marketingLists) => marketingLists.map((marketingLists) => marketingLists.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  MarketingLists.findById(params.id)
    .then(notFound(res))
    .then((marketingLists) => marketingLists ? marketingLists.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  MarketingLists.findById(params.id)
    .then(notFound(res))
    .then((marketingLists) => marketingLists ? Object.assign(marketingLists, body).save() : null)
    .then((marketingLists) => marketingLists ? marketingLists.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  MarketingLists.findById(params.id)
    .then(notFound(res))
    .then((marketingLists) => marketingLists ? marketingLists.remove() : null)
    .then(success(res, 204))
    .catch(next)
