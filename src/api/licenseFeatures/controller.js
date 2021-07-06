import { success, notFound } from '../../services/response/'
import { LicenseFeatures } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  LicenseFeatures.create(body)
    .then((licenseFeatures) => licenseFeatures.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  LicenseFeatures.find(query, select)
    .then((licenseFeatures) => licenseFeatures.map((licenseFeatures) => licenseFeatures.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  LicenseFeatures.findById(params.id)
    .then(notFound(res))
    .then((licenseFeatures) => licenseFeatures ? licenseFeatures.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  LicenseFeatures.findById(params.id)
    .then(notFound(res))
    .then((licenseFeatures) => licenseFeatures ? Object.assign(licenseFeatures, body).save() : null)
    .then((licenseFeatures) => licenseFeatures ? licenseFeatures.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  LicenseFeatures.findById(params.id)
    .then(notFound(res))
    .then((licenseFeatures) => licenseFeatures ? licenseFeatures.remove() : null)
    .then(success(res, 204))
    .catch(next)
