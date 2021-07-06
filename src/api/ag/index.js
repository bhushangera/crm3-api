import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Ag, { schema } from './model'

const router = new Router()
const { MId, MCode, mType, MCId, MCCode, SMCId, SMCCode, AGCode, AGDescription, image, slug, isActive } = schema.tree

/**
 * @api {post} /ag Create ag
 * @apiName CreateAg
 * @apiGroup Ag
 * @apiParam MId Ag's MId.
 * @apiParam MCode Ag's MCode.
 * @apiParam mType Ag's mType.
 * @apiParam MCId Ag's MCId.
 * @apiParam MCCode Ag's MCCode.
 * @apiParam SMCId Ag's SMCId.
 * @apiParam SMCCode Ag's SMCCode.
 * @apiParam AGCode Ag's AGCode.
 * @apiParam AGDescription Ag's AGDescription.
 * @apiParam image Ag's image.
 * @apiParam slug Ag's slug.
 * @apiParam isActive Ag's isActive.
 * @apiSuccess {Object} ag Ag's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Ag not found.
 */
router.post('/',
  body({ MId, MCode, mType, MCId, MCCode, SMCId, SMCCode, AGCode, AGDescription, image, slug, isActive }),
  create)

/**
 * @api {get} /ag Retrieve ags
 * @apiName RetrieveAgs
 * @apiGroup Ag
 * @apiUse listParams
 * @apiSuccess {Object[]} ags List of ags.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /ag/:id Retrieve ag
 * @apiName RetrieveAg
 * @apiGroup Ag
 * @apiSuccess {Object} ag Ag's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Ag not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /ag/:id Update ag
 * @apiName UpdateAg
 * @apiGroup Ag
 * @apiParam MId Ag's MId.
 * @apiParam MCode Ag's MCode.
 * @apiParam mType Ag's mType.
 * @apiParam MCId Ag's MCId.
 * @apiParam MCCode Ag's MCCode.
 * @apiParam SMCId Ag's SMCId.
 * @apiParam SMCCode Ag's SMCCode.
 * @apiParam AGCode Ag's AGCode.
 * @apiParam AGDescription Ag's AGDescription.
 * @apiParam image Ag's image.
 * @apiParam slug Ag's slug.
 * @apiParam isActive Ag's isActive.
 * @apiSuccess {Object} ag Ag's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Ag not found.
 */
router.put('/:id',
  body({ MId, MCode, mType, MCId, MCCode, SMCId, SMCCode, AGCode, AGDescription, image, slug, isActive }),
  update)

/**
 * @api {delete} /ag/:id Delete ag
 * @apiName DeleteAg
 * @apiGroup Ag
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Ag not found.
 */
router.delete('/:id',
  destroy)

export default router
