import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Icons, { schema } from './model'

const router = new Router()
const { selector, family, label } = schema.tree

/**
 * @api {post} /icons Create icons
 * @apiName CreateIcons
 * @apiGroup Icons
 * @apiParam selector, family Icons's selector, family.
 * @apiParam label Icons's label.
 * @apiSuccess {Object} icons Icons's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Icons not found.
 */
router.post('/',
  body({ selector, family, label }),
  create)

/**
 * @api {get} /icons Retrieve icons
 * @apiName RetrieveIcons
 * @apiGroup Icons
 * @apiUse listParams
 * @apiSuccess {Object[]} icons List of icons.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /icons/:id Retrieve icons
 * @apiName RetrieveIcons
 * @apiGroup Icons
 * @apiSuccess {Object} icons Icons's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Icons not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /icons/:id Update icons
 * @apiName UpdateIcons
 * @apiGroup Icons
 * @apiParam selector, family Icons's selector, family.
 * @apiParam label Icons's label.
 * @apiSuccess {Object} icons Icons's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Icons not found.
 */
router.put('/:id',
  body({ selector, family, label }),
  update)

/**
 * @api {delete} /icons/:id Delete icons
 * @apiName DeleteIcons
 * @apiGroup Icons
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Icons not found.
 */
router.delete('/:id',
  destroy)

export default router
