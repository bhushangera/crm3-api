import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export FixedAssetTypes, { schema } from './model'

const router = new Router()
const { fixedAssetTypeId,type, description } = schema.tree

/**
 * @api {post} /fixedAssetTypes Create fixed asset types
 * @apiName CreateFixedAssetTypes
 * @apiGroup FixedAssetTypes
 * @apiParam type Fixed asset types's type.
 * @apiParam description Fixed asset types's description.
 * @apiSuccess {Object} fixedAssetTypes Fixed asset types's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Fixed asset types not found.
 */
router.post('/',
  body({ fixedAssetTypeId,type, description }),
  create)

/**
 * @api {get} /fixedAssetTypes Retrieve fixed asset types
 * @apiName RetrieveFixedAssetTypes
 * @apiGroup FixedAssetTypes
 * @apiUse listParams
 * @apiSuccess {Object[]} fixedAssetTypes List of fixed asset types.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /fixedAssetTypes/:id Retrieve fixed asset types
 * @apiName RetrieveFixedAssetTypes
 * @apiGroup FixedAssetTypes
 * @apiSuccess {Object} fixedAssetTypes Fixed asset types's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Fixed asset types not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /fixedAssetTypes/:id Update fixed asset types
 * @apiName UpdateFixedAssetTypes
 * @apiGroup FixedAssetTypes
 * @apiParam type Fixed asset types's type.
 * @apiParam description Fixed asset types's description.
 * @apiSuccess {Object} fixedAssetTypes Fixed asset types's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Fixed asset types not found.
 */
router.put('/:id',
  body({ fixedAssetTypeId,type, description }),
  update)

/**
 * @api {delete} /fixedAssetTypes/:id Delete fixed asset types
 * @apiName DeleteFixedAssetTypes
 * @apiGroup FixedAssetTypes
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Fixed asset types not found.
 */
router.delete('/:id',
  destroy)

export default router
