import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export OfficialDocs, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /officialDocs Create official docs
 * @apiName CreateOfficialDocs
 * @apiGroup OfficialDocs
 * @apiParam code Official docs's code.
 * @apiParam description Official docs's description.
 * @apiSuccess {Object} officialDocs Official docs's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Official docs not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /officialDocs Retrieve official docs
 * @apiName RetrieveOfficialDocs
 * @apiGroup OfficialDocs
 * @apiUse listParams
 * @apiSuccess {Object[]} officialDocs List of official docs.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /officialDocs/:id Retrieve official docs
 * @apiName RetrieveOfficialDocs
 * @apiGroup OfficialDocs
 * @apiSuccess {Object} officialDocs Official docs's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Official docs not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /officialDocs/:id Update official docs
 * @apiName UpdateOfficialDocs
 * @apiGroup OfficialDocs
 * @apiParam code Official docs's code.
 * @apiParam description Official docs's description.
 * @apiSuccess {Object} officialDocs Official docs's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Official docs not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /officialDocs/:id Delete official docs
 * @apiName DeleteOfficialDocs
 * @apiGroup OfficialDocs
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Official docs not found.
 */
router.delete('/:id',
  destroy)

export default router
