import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export WorkStations, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /WorkStations Create work stations
 * @apiName CreateWorkStations
 * @apiGroup WorkStations
 * @apiParam code Work stations's code.
 * @apiParam description Work stations's description.
 * @apiSuccess {Object} workStations Work stations's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Work stations not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /WorkStations Retrieve work stations
 * @apiName RetrieveWorkStations
 * @apiGroup WorkStations
 * @apiUse listParams
 * @apiSuccess {Object[]} workStations List of work stations.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /WorkStations/:id Retrieve work stations
 * @apiName RetrieveWorkStations
 * @apiGroup WorkStations
 * @apiSuccess {Object} workStations Work stations's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Work stations not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /WorkStations/:id Update work stations
 * @apiName UpdateWorkStations
 * @apiGroup WorkStations
 * @apiParam code Work stations's code.
 * @apiParam description Work stations's description.
 * @apiSuccess {Object} workStations Work stations's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Work stations not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /WorkStations/:id Delete work stations
 * @apiName DeleteWorkStations
 * @apiGroup WorkStations
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Work stations not found.
 */
router.delete('/:id',
  destroy)

export default router
