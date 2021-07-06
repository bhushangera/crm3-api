import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Dashboards, { schema } from './model'

const router = new Router()
const { code, description, path, active } = schema.tree

/**
 * @api {post} /dashboards Create dashboards
 * @apiName CreateDashboards
 * @apiGroup Dashboards
 * @apiParam code Dashboards's code.
 * @apiParam description Dashboards's description.
 * @apiParam path, active Dashboards's path, active.
 * @apiSuccess {Object} dashboards Dashboards's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Dashboards not found.
 */
router.post('/',
  body({ code, description, path, active }),
  create)

/**
 * @api {get} /dashboards Retrieve dashboards
 * @apiName RetrieveDashboards
 * @apiGroup Dashboards
 * @apiUse listParams
 * @apiSuccess {Object[]} dashboards List of dashboards.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /dashboards/:id Retrieve dashboards
 * @apiName RetrieveDashboards
 * @apiGroup Dashboards
 * @apiSuccess {Object} dashboards Dashboards's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Dashboards not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /dashboards/:id Update dashboards
 * @apiName UpdateDashboards
 * @apiGroup Dashboards
 * @apiParam code Dashboards's code.
 * @apiParam description Dashboards's description.
 * @apiParam path, active Dashboards's path, active.
 * @apiSuccess {Object} dashboards Dashboards's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Dashboards not found.
 */
router.put('/:id',
  body({ code, description, path, active }),
  update)

/**
 * @api {delete} /dashboards/:id Delete dashboards
 * @apiName DeleteDashboards
 * @apiGroup Dashboards
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Dashboards not found.
 */
router.delete('/:id',
  destroy)

export default router
