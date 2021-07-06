import { success, notFound } from '../../services/response/'
import { PartyDiscountStructures } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  PartyDiscountStructures.create(body)
    .then((partyDiscountStructures) => partyDiscountStructures.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  PartyDiscountStructures.find(query, select)
    .then((partyDiscountStructures) => partyDiscountStructures.map((partyDiscountStructures) => partyDiscountStructures.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  PartyDiscountStructures.findById(params.id)
    .then(notFound(res))
    .then((partyDiscountStructures) => partyDiscountStructures ? partyDiscountStructures.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  PartyDiscountStructures.findById(params.id)
    .then(notFound(res))
    .then((partyDiscountStructures) => partyDiscountStructures ? Object.assign(partyDiscountStructures, body).save() : null)
    .then((partyDiscountStructures) => partyDiscountStructures ? partyDiscountStructures.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  PartyDiscountStructures.findById(params.id)
    .then(notFound(res))
    .then((partyDiscountStructures) => partyDiscountStructures ? partyDiscountStructures.remove() : null)
    .then(success(res, 204))
    .catch(next)
