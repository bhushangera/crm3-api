import { success, notFound } from '../../services/response/'
import { DealerProfile } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  DealerProfile.create(body)
    .then((dealerProfile) => dealerProfile.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  DealerProfile.find(query, select)
  .then((DealerProfiles) => DealerProfiles.map((dealerProfile) => dealerProfile.view()))
  .then(success(res))
  .catch(next)
  
export const show = ({ params }, res, next) =>
  DealerProfile.findById(params.id)
    .then(notFound(res))
    .then((dealerProfile) => dealerProfile ? dealerProfile.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  DealerProfile.findById(params.id)
    .then(notFound(res))
    .then((dealerProfile) => dealerProfile ? Object.assign(dealerProfile, body).save() : null)
    .then((dealerProfile) => dealerProfile ? dealerProfile.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  DealerProfile.findById(params.id)
    .then(notFound(res))
    .then((dealerProfile) => dealerProfile ? dealerProfile.remove() : null)
    .then(success(res, 204))
    .catch(next)
