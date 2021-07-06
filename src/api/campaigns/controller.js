import { success, notFound } from '../../services/response/'
import { Campaigns } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Campaigns.create(body)
    .then((campaigns) => campaigns.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  Campaigns.find(query, select)
    .then((campaigns) => campaigns.map((campaigns) => campaigns.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Campaigns.findById(params.id)
    .then(notFound(res))
    .then((campaigns) => campaigns ? campaigns.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Campaigns.findById(params.id)
    .then(notFound(res))
    .then((campaigns) => campaigns ? Object.assign(campaigns, body).save() : null)
    .then((campaigns) => campaigns ? campaigns.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Campaigns.findById(params.id)
    .then(notFound(res))
    .then((campaigns) => campaigns ? campaigns.remove() : null)
    .then(success(res, 204))
    .catch(next)
