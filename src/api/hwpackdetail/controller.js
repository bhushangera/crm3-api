import { success, notFound } from '../../services/response/'
import { Hwpackdetail } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Hwpackdetail.create(body)
    .then((hwpackdetail) => hwpackdetail.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  Hwpackdetail.find(query, select)
    .then((hwpackdetails) => hwpackdetails.map((hwpackdetail) => hwpackdetail.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Hwpackdetail.findById(params.id)
    .then(notFound(res))
    .then((hwpackdetail) => hwpackdetail ? hwpackdetail.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Hwpackdetail.findById(params.id)
    .then(notFound(res))
    .then((hwpackdetail) => hwpackdetail ? Object.assign(hwpackdetail, body).save() : null)
    .then((hwpackdetail) => hwpackdetail ? hwpackdetail.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Hwpackdetail.findById(params.id)
    .then(notFound(res))
    .then((hwpackdetail) => hwpackdetail ? hwpackdetail.remove() : null)
    .then(success(res, 204))
    .catch(next)
