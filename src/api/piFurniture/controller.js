import { success, notFound } from '../../services/response/'
import { PiFurniture } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  PiFurniture.create(body)
    .then((piFurniture) => piFurniture.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  PiFurniture.find(query, select)
    .then((piFurnitures) => piFurnitures.map((piFurniture) => piFurniture.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  PiFurniture.findById(params.id)
    .then(notFound(res))
    .then((piFurniture) => piFurniture ? piFurniture.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  PiFurniture.findById(params.id)
    .then(notFound(res))
    .then((piFurniture) => piFurniture ? Object.assign(piFurniture, body).save() : null)
    .then((piFurniture) => piFurniture ? piFurniture.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  PiFurniture.findById(params.id)
    .then(notFound(res))
    .then((piFurniture) => piFurniture ? piFurniture.remove() : null)
    .then(success(res, 204))
    .catch(next)
