import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export CampaignTypes, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /campaignTypes Create campaign types
 * @apiName CreateCampaignTypes
 * @apiGroup CampaignTypes
 * @apiParam code Campaign types's code.
 * @apiParam description Campaign types's description.
 * @apiSuccess {Object} campaignTypes Campaign types's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Campaign types not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /campaignTypes Retrieve campaign types
 * @apiName RetrieveCampaignTypes
 * @apiGroup CampaignTypes
 * @apiUse listParams
 * @apiSuccess {Object[]} campaignTypes List of campaign types.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /campaignTypes/:id Retrieve campaign types
 * @apiName RetrieveCampaignTypes
 * @apiGroup CampaignTypes
 * @apiSuccess {Object} campaignTypes Campaign types's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Campaign types not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /campaignTypes/:id Update campaign types
 * @apiName UpdateCampaignTypes
 * @apiGroup CampaignTypes
 * @apiParam code Campaign types's code.
 * @apiParam description Campaign types's description.
 * @apiSuccess {Object} campaignTypes Campaign types's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Campaign types not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /campaignTypes/:id Delete campaign types
 * @apiName DeleteCampaignTypes
 * @apiGroup CampaignTypes
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Campaign types not found.
 */
router.delete('/:id',
  destroy)

export default router
