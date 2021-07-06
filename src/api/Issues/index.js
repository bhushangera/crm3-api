import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Issues, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /Issues Create issues
 * @apiName CreateIssues
 * @apiGroup Issues
 * @apiParam code Issues's code.
 * @apiParam description Issues's description.
 * @apiSuccess {Object} issues Issues's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Issues not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /Issues Retrieve issues
 * @apiName RetrieveIssues
 * @apiGroup Issues
 * @apiUse listParams
 * @apiSuccess {Object[]} issues List of issues.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /Issues/:id Retrieve issues
 * @apiName RetrieveIssues
 * @apiGroup Issues
 * @apiSuccess {Object} issues Issues's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Issues not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /Issues/:id Update issues
 * @apiName UpdateIssues
 * @apiGroup Issues
 * @apiParam code Issues's code.
 * @apiParam description Issues's description.
 * @apiSuccess {Object} issues Issues's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Issues not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /Issues/:id Delete issues
 * @apiName DeleteIssues
 * @apiGroup Issues
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Issues not found.
 */
router.delete('/:id',
  destroy)

export default router
