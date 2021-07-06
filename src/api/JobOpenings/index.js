import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export JobOpenings, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /JobOpenings Create job openings
 * @apiName CreateJobOpenings
 * @apiGroup JobOpenings
 * @apiParam code Job openings's code.
 * @apiParam description Job openings's description.
 * @apiSuccess {Object} jobOpenings Job openings's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Job openings not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /JobOpenings Retrieve job openings
 * @apiName RetrieveJobOpenings
 * @apiGroup JobOpenings
 * @apiUse listParams
 * @apiSuccess {Object[]} jobOpenings List of job openings.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /JobOpenings/:id Retrieve job openings
 * @apiName RetrieveJobOpenings
 * @apiGroup JobOpenings
 * @apiSuccess {Object} jobOpenings Job openings's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Job openings not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /JobOpenings/:id Update job openings
 * @apiName UpdateJobOpenings
 * @apiGroup JobOpenings
 * @apiParam code Job openings's code.
 * @apiParam description Job openings's description.
 * @apiSuccess {Object} jobOpenings Job openings's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Job openings not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /JobOpenings/:id Delete job openings
 * @apiName DeleteJobOpenings
 * @apiGroup JobOpenings
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Job openings not found.
 */
router.delete('/:id',
  destroy)

export default router
