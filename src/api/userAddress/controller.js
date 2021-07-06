import { success, notFound } from '../../services/response/'
import { UserAddress } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  UserAddress.create(body)
    .then((userAddress) => userAddress.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  UserAddress.find(query, select)
  .then((UserAddress) => UserAddress.map((UserAddress) => UserAddress.view()))
  .then(success(res))
  .catch(next)

export const show = ({ params }, res, next) =>
  UserAddress.findById(params.id)
    .then(notFound(res))
    .then((userAddress) => userAddress ? userAddress.view() : null)
    .then(success(res))
    .catch(next)



export const update = ({ bodymen: { body }, params }, res, next) =>
  UserAddress.findById(params.id)
    .then(notFound(res))
    .then((userAddress) => userAddress ? Object.assign(userAddress, body).save() : null)
    .then((userAddress) => userAddress ? userAddress.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  UserAddress.findById(params.id)
    .then(notFound(res))
    .then((userAddress) => userAddress ? userAddress.remove() : null)
    .then(success(res, 204))
    .catch(next)
