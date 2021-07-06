import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export ProductionPlan, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /ProductionPlan Create production plan
 * @apiName CreateProductionPlan
 * @apiGroup ProductionPlan
 * @apiParam code Production plan's code.
 * @apiParam description Production plan's description.
 * @apiSuccess {Object} productionPlan Production plan's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Production plan not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /ProductionPlan Retrieve production plans
 * @apiName RetrieveProductionPlans
 * @apiGroup ProductionPlan
 * @apiUse listParams
 * @apiSuccess {Object[]} productionPlans List of production plans.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /ProductionPlan/:id Retrieve production plan
 * @apiName RetrieveProductionPlan
 * @apiGroup ProductionPlan
 * @apiSuccess {Object} productionPlan Production plan's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Production plan not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /ProductionPlan/:id Update production plan
 * @apiName UpdateProductionPlan
 * @apiGroup ProductionPlan
 * @apiParam code Production plan's code.
 * @apiParam description Production plan's description.
 * @apiSuccess {Object} productionPlan Production plan's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Production plan not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /ProductionPlan/:id Delete production plan
 * @apiName DeleteProductionPlan
 * @apiGroup ProductionPlan
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Production plan not found.
 */
router.delete('/:id',
  destroy)

export default router
