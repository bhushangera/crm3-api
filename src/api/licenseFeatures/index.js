import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export LicenseFeatures, { schema } from './model'

const router = new Router()
const { licenseId, fmId, code, label, dailyCost } = schema.tree

/**
 * @api {post} /licenseFeatures Create license features
 * @apiName CreateLicenseFeatures
 * @apiGroup LicenseFeatures
 * @apiParam licenseId License features's licenseId.
 * @apiParam fmId License features's fmId.
 * @apiParam code License features's code.
 * @apiParam label License features's label.
 * @apiParam dailyCost License features's dailyCost.
 * @apiSuccess {Object} licenseFeatures License features's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 License features not found.
 */
router.post('/',
  body({ licenseId, fmId, code, label, dailyCost }),
  create)

/**
 * @api {get} /licenseFeatures Retrieve license features
 * @apiName RetrieveLicenseFeatures
 * @apiGroup LicenseFeatures
 * @apiUse listParams
 * @apiSuccess {Object[]} licenseFeatures List of license features.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /licenseFeatures/:id Retrieve license features
 * @apiName RetrieveLicenseFeatures
 * @apiGroup LicenseFeatures
 * @apiSuccess {Object} licenseFeatures License features's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 License features not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /licenseFeatures/:id Update license features
 * @apiName UpdateLicenseFeatures
 * @apiGroup LicenseFeatures
 * @apiParam licenseId License features's licenseId.
 * @apiParam fmId License features's fmId.
 * @apiParam code License features's code.
 * @apiParam label License features's label.
 * @apiParam dailyCost License features's dailyCost.
 * @apiSuccess {Object} licenseFeatures License features's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 License features not found.
 */
router.put('/:id',
  body({ licenseId, fmId, code, label, dailyCost }),
  update)

/**
 * @api {delete} /licenseFeatures/:id Delete license features
 * @apiName DeleteLicenseFeatures
 * @apiGroup LicenseFeatures
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 License features not found.
 */
router.delete('/:id',
  destroy)

export default router
