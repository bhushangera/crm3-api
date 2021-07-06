import { success, notFound } from '../../services/response/'
import { PartyStorageUnits } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  PartyStorageUnits.create(body)
    .then((partyStorageUnits) => partyStorageUnits.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  PartyStorageUnits.find(query, select)
    .then((partyStorageUnits) => partyStorageUnits.map((partyStorageUnits) => partyStorageUnits.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  PartyStorageUnits.findById(params.id)
    .then(notFound(res))
    .then((partyStorageUnits) => partyStorageUnits ? partyStorageUnits.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  PartyStorageUnits.findById(params.id)
    .then(notFound(res))
    .then((partyStorageUnits) => partyStorageUnits ? Object.assign(partyStorageUnits, body).save() : null)
    .then((partyStorageUnits) => partyStorageUnits ? partyStorageUnits.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  PartyStorageUnits.findById(params.id)
    .then(notFound(res))
    .then((partyStorageUnits) => partyStorageUnits ? partyStorageUnits.remove() : null)
    .then(success(res, 204))
    .catch(next)
