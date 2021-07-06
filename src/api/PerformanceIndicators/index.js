import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export PerformanceIndicators, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /PerformanceIndicators Create performance indicators
 * @apiName CreatePerformanceIndicators
 * @apiGroup PerformanceIndicators
 * @apiParam code Performance indicators's code.
 * @apiParam description Performance indicators's description.
 * @apiSuccess {Object} performanceIndicators Performance indicators's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Performance indicators not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /PerformanceIndicators Retrieve performance indicators
 * @apiName RetrievePerformanceIndicators
 * @apiGroup PerformanceIndicators
 * @apiUse listParams
 * @apiSuccess {Object[]} performanceIndicators List of performance indicators.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /PerformanceIndicators/:id Retrieve performance indicators
 * @apiName RetrievePerformanceIndicators
 * @apiGroup PerformanceIndicators
 * @apiSuccess {Object} performanceIndicators Performance indicators's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Performance indicators not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /PerformanceIndicators/:id Update performance indicators
 * @apiName UpdatePerformanceIndicators
 * @apiGroup PerformanceIndicators
 * @apiParam code Performance indicators's code.
 * @apiParam description Performance indicators's description.
 * @apiSuccess {Object} performanceIndicators Performance indicators's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Performance indicators not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /PerformanceIndicators/:id Delete performance indicators
 * @apiName DeletePerformanceIndicators
 * @apiGroup PerformanceIndicators
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Performance indicators not found.
 */
router.delete('/:id',
  destroy)

export default router
