import { success, notFound } from '../../services/response/'
import { PiPanel } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  PiPanel.create(body)
    .then((piPanel) => piPanel.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  PiPanel.find(query, select)
    .then((piPanels) => piPanels.map((piPanel) => piPanel.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  PiPanel.findById(params.id)
    .then(notFound(res))
    .then((piPanel) => piPanel ? piPanel.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  PiPanel.findById(params.id)
    .then(notFound(res))
    .then((piPanel) => piPanel ? Object.assign(piPanel, body).save() : null)
    .then((piPanel) => piPanel ? piPanel.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  PiPanel.findById(params.id)
    .then(notFound(res))
    .then((piPanel) => piPanel ? piPanel.remove() : null)
    .then(success(res, 204))
    .catch(next)
