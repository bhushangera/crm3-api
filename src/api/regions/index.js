import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Regions, { schema } from './model'

const router = new Router()
const { region, code } = schema.tree

/**
 * @api {post} /regions Create regions
 * @apiName CreateRegions
 * @apiGroup Regions
 * @apiParam region Regions's region.
 * @apiParam code Regions's code.
 * @apiSuccess {Object} regions Regions's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Regions not found.
 */
router.post('/',
  body({ region, code }),
  create)

/**
 * @api {get} /regions Retrieve regions
 * @apiName RetrieveRegions
 * @apiGroup Regions
 * @apiUse listParams
 * @apiSuccess {Object[]} regions List of regions.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /regions/:id Retrieve regions
 * @apiName RetrieveRegions
 * @apiGroup Regions
 * @apiSuccess {Object} regions Regions's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Regions not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /regions/:id Update regions
 * @apiName UpdateRegions
 * @apiGroup Regions
 * @apiParam region Regions's region.
 * @apiParam code Regions's code.
 * @apiSuccess {Object} regions Regions's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Regions not found.
 */
router.put('/:id',
  body({ region, code }),
  update)

/**
 * @api {delete} /regions/:id Delete regions
 * @apiName DeleteRegions
 * @apiGroup Regions
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Regions not found.
 */
router.delete('/:id',
  destroy)

export default router
