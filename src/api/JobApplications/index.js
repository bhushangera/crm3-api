import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export JobApplications, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /JobApplications Create job applications
 * @apiName CreateJobApplications
 * @apiGroup JobApplications
 * @apiParam code Job applications's code.
 * @apiParam description Job applications's description.
 * @apiSuccess {Object} jobApplications Job applications's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Job applications not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /JobApplications Retrieve job applications
 * @apiName RetrieveJobApplications
 * @apiGroup JobApplications
 * @apiUse listParams
 * @apiSuccess {Object[]} jobApplications List of job applications.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /JobApplications/:id Retrieve job applications
 * @apiName RetrieveJobApplications
 * @apiGroup JobApplications
 * @apiSuccess {Object} jobApplications Job applications's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Job applications not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /JobApplications/:id Update job applications
 * @apiName UpdateJobApplications
 * @apiGroup JobApplications
 * @apiParam code Job applications's code.
 * @apiParam description Job applications's description.
 * @apiSuccess {Object} jobApplications Job applications's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Job applications not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /JobApplications/:id Delete job applications
 * @apiName DeleteJobApplications
 * @apiGroup JobApplications
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Job applications not found.
 */
router.delete('/:id',
  destroy)

export default router
