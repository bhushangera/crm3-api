import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Complaints, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /Complaints Create complaints
 * @apiName CreateComplaints
 * @apiGroup Complaints
 * @apiParam code Complaints's code.
 * @apiParam description Complaints's description.
 * @apiSuccess {Object} complaints Complaints's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Complaints not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /Complaints Retrieve complaints
 * @apiName RetrieveComplaints
 * @apiGroup Complaints
 * @apiUse listParams
 * @apiSuccess {Object[]} complaints List of complaints.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /Complaints/:id Retrieve complaints
 * @apiName RetrieveComplaints
 * @apiGroup Complaints
 * @apiSuccess {Object} complaints Complaints's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Complaints not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /Complaints/:id Update complaints
 * @apiName UpdateComplaints
 * @apiGroup Complaints
 * @apiParam code Complaints's code.
 * @apiParam description Complaints's description.
 * @apiSuccess {Object} complaints Complaints's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Complaints not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /Complaints/:id Delete complaints
 * @apiName DeleteComplaints
 * @apiGroup Complaints
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Complaints not found.
 */
router.delete('/:id',
  destroy)

export default router
