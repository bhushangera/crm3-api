import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export PerformanceRating, { schema } from './model'

const router = new Router()
const { stars, rating } = schema.tree

/**
 * @api {post} /performanceRatings Create performance rating
 * @apiName CreatePerformanceRating
 * @apiGroup PerformanceRating
 * @apiParam stars Performance rating's stars.
 * @apiParam rating Performance rating's rating.
 * @apiSuccess {Object} performanceRating Performance rating's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Performance rating not found.
 */
router.post('/',
  body({ stars, rating }),
  create)

/**
 * @api {get} /performanceRatings Retrieve performance ratings
 * @apiName RetrievePerformanceRatings
 * @apiGroup PerformanceRating
 * @apiUse listParams
 * @apiSuccess {Object[]} performanceRatings List of performance ratings.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /performanceRatings/:id Retrieve performance rating
 * @apiName RetrievePerformanceRating
 * @apiGroup PerformanceRating
 * @apiSuccess {Object} performanceRating Performance rating's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Performance rating not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /performanceRatings/:id Update performance rating
 * @apiName UpdatePerformanceRating
 * @apiGroup PerformanceRating
 * @apiParam stars Performance rating's stars.
 * @apiParam rating Performance rating's rating.
 * @apiSuccess {Object} performanceRating Performance rating's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Performance rating not found.
 */
router.put('/:id',
  body({ stars, rating }),
  update)

/**
 * @api {delete} /performanceRatings/:id Delete performance rating
 * @apiName DeletePerformanceRating
 * @apiGroup PerformanceRating
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Performance rating not found.
 */
router.delete('/:id',
  destroy)

export default router
