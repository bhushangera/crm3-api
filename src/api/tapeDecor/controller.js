import { success, notFound } from '../../services/response/'
import { TapeDecor } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  TapeDecor.create(body)
    .then((tapeDecor) => tapeDecor.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  TapeDecor.find(query, select)
    .then((tapeDecors) => tapeDecors.map((tapeDecor) => tapeDecor.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  TapeDecor.findById(params.id)
    .then(notFound(res))
    .then((tapeDecor) => tapeDecor ? tapeDecor.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  TapeDecor.findById(params.id)
    .then(notFound(res))
    .then((tapeDecor) => tapeDecor ? Object.assign(tapeDecor, body).save() : null)
    .then((tapeDecor) => tapeDecor ? tapeDecor.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  TapeDecor.findById(params.id)
    .then(notFound(res))
    .then((tapeDecor) => tapeDecor ? tapeDecor.remove() : null)
    .then(success(res, 204))
    .catch(next)
