import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export JobCards, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /JobCards Create job cards
 * @apiName CreateJobCards
 * @apiGroup JobCards
 * @apiParam code Job cards's code.
 * @apiParam description Job cards's description.
 * @apiSuccess {Object} jobCards Job cards's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Job cards not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /JobCards Retrieve job cards
 * @apiName RetrieveJobCards
 * @apiGroup JobCards
 * @apiUse listParams
 * @apiSuccess {Object[]} jobCards List of job cards.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /JobCards/:id Retrieve job cards
 * @apiName RetrieveJobCards
 * @apiGroup JobCards
 * @apiSuccess {Object} jobCards Job cards's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Job cards not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /JobCards/:id Update job cards
 * @apiName UpdateJobCards
 * @apiGroup JobCards
 * @apiParam code Job cards's code.
 * @apiParam description Job cards's description.
 * @apiSuccess {Object} jobCards Job cards's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Job cards not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /JobCards/:id Delete job cards
 * @apiName DeleteJobCards
 * @apiGroup JobCards
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Job cards not found.
 */
router.delete('/:id',
  destroy)

export default router
