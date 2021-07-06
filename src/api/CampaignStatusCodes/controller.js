import { success, notFound } from '../../services/response/'
import { CampaignStatusCodes } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  CampaignStatusCodes.create(body)
    .then((campaignStatusCodes) => campaignStatusCodes.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  CampaignStatusCodes.find(query, select)
    .then((campaignStatusCodes) => campaignStatusCodes.map((campaignStatusCodes) => campaignStatusCodes.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  CampaignStatusCodes.findById(params.id)
    .then(notFound(res))
    .then((campaignStatusCodes) => campaignStatusCodes ? campaignStatusCodes.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  CampaignStatusCodes.findById(params.id)
    .then(notFound(res))
    .then((campaignStatusCodes) => campaignStatusCodes ? Object.assign(campaignStatusCodes, body).save() : null)
    .then((campaignStatusCodes) => campaignStatusCodes ? campaignStatusCodes.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  CampaignStatusCodes.findById(params.id)
    .then(notFound(res))
    .then((campaignStatusCodes) => campaignStatusCodes ? campaignStatusCodes.remove() : null)
    .then(success(res, 204))
    .catch(next)
