import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export ChannelTypes, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /channelTypes Create channel types
 * @apiName CreateChannelTypes
 * @apiGroup ChannelTypes
 * @apiParam type Channel types's type.
 * @apiSuccess {Object} channelTypes Channel types's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Channel types not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /channelTypes Retrieve channel types
 * @apiName RetrieveChannelTypes
 * @apiGroup ChannelTypes
 * @apiUse listParams
 * @apiSuccess {Object[]} channelTypes List of channel types.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /channelTypes/:id Retrieve channel types
 * @apiName RetrieveChannelTypes
 * @apiGroup ChannelTypes
 * @apiSuccess {Object} channelTypes Channel types's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Channel types not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /channelTypes/:id Update channel types
 * @apiName UpdateChannelTypes
 * @apiGroup ChannelTypes
 * @apiParam type Channel types's type.
 * @apiSuccess {Object} channelTypes Channel types's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Channel types not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /channelTypes/:id Delete channel types
 * @apiName DeleteChannelTypes
 * @apiGroup ChannelTypes
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Channel types not found.
 */
router.delete('/:id',
  destroy)

export default router
