import { Router } from 'express'
import { middleware as query } from 'querymen'
import { create, index, show, update, destroy } from './controller'

const router = new Router()

/**
 * @api {post} /jobDescriptions Create job descriptions
 * @apiName CreateJobDescriptions
 * @apiGroup JobDescriptions
 * @apiSuccess {Object} jobDescriptions Job descriptions's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Job descriptions not found.
 */
router.post('/',
  create)

/**
 * @api {get} /jobDescriptions Retrieve job descriptions
 * @apiName RetrieveJobDescriptions
 * @apiGroup JobDescriptions
 * @apiUse listParams
 * @apiSuccess {Object[]} jobDescriptions List of job descriptions.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /jobDescriptions/:id Retrieve job descriptions
 * @apiName RetrieveJobDescriptions
 * @apiGroup JobDescriptions
 * @apiSuccess {Object} jobDescriptions Job descriptions's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Job descriptions not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /jobDescriptions/:id Update job descriptions
 * @apiName UpdateJobDescriptions
 * @apiGroup JobDescriptions
 * @apiSuccess {Object} jobDescriptions Job descriptions's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Job descriptions not found.
 */
router.put('/:id',
  update)

/**
 * @api {delete} /jobDescriptions/:id Delete job descriptions
 * @apiName DeleteJobDescriptions
 * @apiGroup JobDescriptions
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Job descriptions not found.
 */
router.delete('/:id',
  destroy)

export default router
