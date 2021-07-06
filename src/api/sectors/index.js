import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Sectors, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /sectors Create sectors
 * @apiName CreateSectors
 * @apiGroup Sectors
 * @apiParam code Sectors's code.
 * @apiParam description Sectors's description.
 * @apiSuccess {Object} sectors Sectors's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Sectors not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /sectors Retrieve sectors
 * @apiName RetrieveSectors
 * @apiGroup Sectors
 * @apiUse listParams
 * @apiSuccess {Object[]} sectors List of sectors.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /sectors/:id Retrieve sectors
 * @apiName RetrieveSectors
 * @apiGroup Sectors
 * @apiSuccess {Object} sectors Sectors's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Sectors not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /sectors/:id Update sectors
 * @apiName UpdateSectors
 * @apiGroup Sectors
 * @apiParam code Sectors's code.
 * @apiParam description Sectors's description.
 * @apiSuccess {Object} sectors Sectors's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Sectors not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /sectors/:id Delete sectors
 * @apiName DeleteSectors
 * @apiGroup Sectors
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Sectors not found.
 */
router.delete('/:id',
  destroy)

export default router
