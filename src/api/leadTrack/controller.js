import { success, notFound } from '../../services/response/'
import { LeadTrack } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  LeadTrack.create(body)
    .then((leadTrack) => leadTrack.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  LeadTrack.find(query, select)
      .then((leadTracks) => leadTracks.map((leadTrack) => leadTrack.view()))
      .then(success(res))
      .catch(next)

export const show = ({ params }, res, next) =>
  LeadTrack.findById(params.id)
    .then(notFound(res))
    .then((leadTrack) => leadTrack ? leadTrack.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  LeadTrack.findById(params.id)
    .then(notFound(res))
    .then((leadTrack) => leadTrack ? Object.assign(leadTrack, body).save() : null)
    .then((leadTrack) => leadTrack ? leadTrack.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  LeadTrack.findById(params.id)
    .then(notFound(res))
    .then((leadTrack) => leadTrack ? leadTrack.remove() : null)
    .then(success(res, 204))
    .catch(next)
