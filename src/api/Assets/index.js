import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Assets, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /Assets Create assets
 * @apiName CreateAssets
 * @apiGroup Assets
 * @apiParam code Assets's code.
 * @apiParam description Assets's description.
 * @apiSuccess {Object} assets Assets's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Assets not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /Assets Retrieve assets
 * @apiName RetrieveAssets
 * @apiGroup Assets
 * @apiUse listParams
 * @apiSuccess {Object[]} assets List of assets.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /Assets/:id Retrieve assets
 * @apiName RetrieveAssets
 * @apiGroup Assets
 * @apiSuccess {Object} assets Assets's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Assets not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /Assets/:id Update assets
 * @apiName UpdateAssets
 * @apiGroup Assets
 * @apiParam code Assets's code.
 * @apiParam description Assets's description.
 * @apiSuccess {Object} assets Assets's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Assets not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /Assets/:id Delete assets
 * @apiName DeleteAssets
 * @apiGroup Assets
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Assets not found.
 */
router.delete('/:id',
  destroy)

export default router
