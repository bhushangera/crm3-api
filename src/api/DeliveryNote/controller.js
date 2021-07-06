import { success, notFound } from '../../services/response/'
import { DeliveryNote } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  DeliveryNote.create(body)
    .then((deliveryNote) => deliveryNote.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select} }, res, next) =>
  DeliveryNote.find(query, select)
    .then((deliveryNotes) => deliveryNotes.map((deliveryNote) => deliveryNote.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  DeliveryNote.findById(params.id)
    .then(notFound(res))
    .then((deliveryNote) => deliveryNote ? deliveryNote.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  DeliveryNote.findById(params.id)
    .then(notFound(res))
    .then((deliveryNote) => deliveryNote ? Object.assign(deliveryNote, body).save() : null)
    .then((deliveryNote) => deliveryNote ? deliveryNote.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  DeliveryNote.findById(params.id)
    .then(notFound(res))
    .then((deliveryNote) => deliveryNote ? deliveryNote.remove() : null)
    .then(success(res, 204))
    .catch(next)
