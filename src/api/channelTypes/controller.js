import { success, notFound } from '../../services/response/'
import { ChannelTypes } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  ChannelTypes.create(body)
    .then((channelTypes) => channelTypes.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  ChannelTypes.find(query, select)
    .then((channelTypes) => channelTypes.map((channelTypes) => channelTypes.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  ChannelTypes.findById(params.id)
    .then(notFound(res))
    .then((channelTypes) => channelTypes ? channelTypes.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  ChannelTypes.findById(params.id)
    .then(notFound(res))
    .then((channelTypes) => channelTypes ? Object.assign(channelTypes, body).save() : null)
    .then((channelTypes) => channelTypes ? channelTypes.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  ChannelTypes.findById(params.id)
    .then(notFound(res))
    .then((channelTypes) => channelTypes ? channelTypes.remove() : null)
    .then(success(res, 204))
    .catch(next)
