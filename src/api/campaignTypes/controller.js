import { success, notFound } from '../../services/response/'
import { CampaignTypes } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  CampaignTypes.create(body)
    .then((campaignTypes) => campaignTypes.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  CampaignTypes.find(query, select)
    .then((campaignTypes) => campaignTypes.map((campaignTypes) => campaignTypes.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  CampaignTypes.findById(params.id)
    .then(notFound(res))
    .then((campaignTypes) => campaignTypes ? campaignTypes.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  CampaignTypes.findById(params.id)
    .then(notFound(res))
    .then((campaignTypes) => campaignTypes ? Object.assign(campaignTypes, body).save() : null)
    .then((campaignTypes) => campaignTypes ? campaignTypes.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  CampaignTypes.findById(params.id)
    .then(notFound(res))
    .then((campaignTypes) => campaignTypes ? campaignTypes.remove() : null)
    .then(success(res, 204))
    .catch(next)
