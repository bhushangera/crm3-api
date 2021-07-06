import { success, notFound } from '../../services/response/'
import { PanelSize } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  PanelSize.create(body)
    .then((panelSize) => panelSize.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query } }, res, next) =>
  PanelSize.find(query)
    .then((panelSizes) => panelSizes.map((panelSize) => panelSize.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  PanelSize.findById(params.id)
    .then(notFound(res))
    .then((panelSize) => panelSize ? panelSize.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  PanelSize.findById(params.id)
    .then(notFound(res))
    .then((panelSize) => panelSize ? Object.assign(panelSize, body).save() : null)
    .then((panelSize) => panelSize ? panelSize.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  PanelSize.findById(params.id)
    .then(notFound(res))
    .then((panelSize) => panelSize ? panelSize.remove() : null)
    .then(success(res, 204))
    .catch(next)
