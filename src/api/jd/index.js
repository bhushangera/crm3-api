import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Jd, { schema } from './model'

const router = new Router()
const { jd, level, description } = schema.tree

/**
 * @api {post} /jd Create jd
 * @apiName CreateJd
 * @apiGroup Jd
 * @apiParam jd Jd's jd.
 * @apiParam level Jd's level.
 * @apiParam description Jd's description.
 * @apiSuccess {Object} jd Jd's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Jd not found.
 */
router.post('/',
  body({ jd, level, description }),
  create)

/**
 * @api {get} /jd Retrieve jds
 * @apiName RetrieveJds
 * @apiGroup Jd
 * @apiUse listParams
 * @apiSuccess {Object[]} jds List of jds.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /jd/:id Retrieve jd
 * @apiName RetrieveJd
 * @apiGroup Jd
 * @apiSuccess {Object} jd Jd's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Jd not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /jd/:id Update jd
 * @apiName UpdateJd
 * @apiGroup Jd
 * @apiParam jd Jd's jd.
 * @apiParam level Jd's level.
 * @apiParam description Jd's description.
 * @apiSuccess {Object} jd Jd's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Jd not found.
 */
router.put('/:id',
  body({ jd, level, description }),
  update)

/**
 * @api {delete} /jd/:id Delete jd
 * @apiName DeleteJd
 * @apiGroup Jd
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Jd not found.
 */
router.delete('/:id',
  destroy)

export default router
