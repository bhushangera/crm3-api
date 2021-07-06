import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export WorkEffortTypes, { schema } from './model'

const router = new Router()
const { WorkEffortTypeId, type, stdWorkHours, uomId, uom, conversionFactor } = schema.tree

/**
 * @api {post} /workEffortTypes Create work effort types
 * @apiName CreateWorkEffortTypes
 * @apiGroup WorkEffortTypes
 * @apiParam type Work effort types's type.
 * @apiParam stdWorkHours Work effort types's stdWorkHours.
 * @apiParam uomId Work effort types's uomId.
 * @apiParam uom Work effort types's uom.
 * @apiParam conversionFactor Work effort types's conversionFactor.
 * @apiSuccess {Object} workEffortTypes Work effort types's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Work effort types not found.
 */
router.post('/',
  body({ WorkEffortTypeId, type, stdWorkHours, uomId, uom, conversionFactor }),
  create)

/**
 * @api {get} /workEffortTypes Retrieve work effort types
 * @apiName RetrieveWorkEffortTypes
 * @apiGroup WorkEffortTypes
 * @apiUse listParams
 * @apiSuccess {Object[]} workEffortTypes List of work effort types.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /workEffortTypes/:id Retrieve work effort types
 * @apiName RetrieveWorkEffortTypes
 * @apiGroup WorkEffortTypes
 * @apiSuccess {Object} workEffortTypes Work effort types's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Work effort types not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /workEffortTypes/:id Update work effort types
 * @apiName UpdateWorkEffortTypes
 * @apiGroup WorkEffortTypes
 * @apiParam type Work effort types's type.
 * @apiParam stdWorkHours Work effort types's stdWorkHours.
 * @apiParam uomId Work effort types's uomId.
 * @apiParam uom Work effort types's uom.
 * @apiParam conversionFactor Work effort types's conversionFactor.
 * @apiSuccess {Object} workEffortTypes Work effort types's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Work effort types not found.
 */
router.put('/:id',
  body({ WorkEffortTypeId, type, stdWorkHours, uomId, uom, conversionFactor }),
  update)

/**
 * @api {delete} /workEffortTypes/:id Delete work effort types
 * @apiName DeleteWorkEffortTypes
 * @apiGroup WorkEffortTypes
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Work effort types not found.
 */
router.delete('/:id',
  destroy)

export default router
