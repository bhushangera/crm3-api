import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export EnqAttachments, { schema } from './model'

const router = new Router()
const { piId, file, description, fileName, fileType, fileSize,uploaded } = schema.tree

/**
 * @api {post} /enqAttachments Create enq attachments
 * @apiName CreateEnqAttachments
 * @apiGroup EnqAttachments
 * @apiParam piId Enq attachments's piId.
 * @apiParam file Enq attachments's file.
 * @apiParam description Enq attachments's description.
 * @apiSuccess {Object} enqAttachments Enq attachments's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Enq attachments not found.
 */
router.post('/',
  body({ piId, file, description, fileName, fileType, fileSize,uploaded }),
  create)

/**
 * @api {get} /enqAttachments Retrieve enq attachments
 * @apiName RetrieveEnqAttachments
 * @apiGroup EnqAttachments
 * @apiUse listParams
 * @apiSuccess {Object[]} enqAttachments List of enq attachments.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /enqAttachments/:id Retrieve enq attachments
 * @apiName RetrieveEnqAttachments
 * @apiGroup EnqAttachments
 * @apiSuccess {Object} enqAttachments Enq attachments's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Enq attachments not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /enqAttachments/:id Update enq attachments
 * @apiName UpdateEnqAttachments
 * @apiGroup EnqAttachments
 * @apiParam piId Enq attachments's piId.
 * @apiParam file Enq attachments's file.
 * @apiParam description Enq attachments's description.
 * @apiSuccess {Object} enqAttachments Enq attachments's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Enq attachments not found.
 */
router.put('/:id',
  body({ piId, file, description, fileName, fileType, fileSize, uploaded}),
  update)

/**
 * @api {delete} /enqAttachments/:id Delete enq attachments
 * @apiName DeleteEnqAttachments
 * @apiGroup EnqAttachments
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Enq attachments not found.
 */
router.delete('/:id',
  destroy)

export default router
