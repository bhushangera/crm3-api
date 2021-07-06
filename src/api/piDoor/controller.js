import { success, notFound } from '../../services/response/'
import { PiDoor } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  PiDoor.create(body)
    .then((piDoor) => piDoor.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  PiDoor.find(query, select)
    .then((piDoors) => piDoors.map((piDoor) => piDoor.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  PiDoor.findById(params.id)
    .then(notFound(res))
    .then((piDoor) => piDoor ? piDoor.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  PiDoor.findById(params.id)
    .then(notFound(res))
    .then((piDoor) => piDoor ? Object.assign(piDoor, body).save() : null)
    .then((piDoor) => piDoor ? piDoor.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  PiDoor.findById(params.id)
    .then(notFound(res))
    .then((piDoor) => piDoor ? piDoor.remove() : null)
    .then(success(res, 204))
    .catch(next)
