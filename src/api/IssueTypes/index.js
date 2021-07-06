import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export IssueTypes, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /IssueTypes Create issue types
 * @apiName CreateIssueTypes
 * @apiGroup IssueTypes
 * @apiParam code Issue types's code.
 * @apiParam description Issue types's description.
 * @apiSuccess {Object} issueTypes Issue types's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Issue types not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /IssueTypes Retrieve issue types
 * @apiName RetrieveIssueTypes
 * @apiGroup IssueTypes
 * @apiUse listParams
 * @apiSuccess {Object[]} issueTypes List of issue types.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /IssueTypes/:id Retrieve issue types
 * @apiName RetrieveIssueTypes
 * @apiGroup IssueTypes
 * @apiSuccess {Object} issueTypes Issue types's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Issue types not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /IssueTypes/:id Update issue types
 * @apiName UpdateIssueTypes
 * @apiGroup IssueTypes
 * @apiParam code Issue types's code.
 * @apiParam description Issue types's description.
 * @apiSuccess {Object} issueTypes Issue types's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Issue types not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /IssueTypes/:id Delete issue types
 * @apiName DeleteIssueTypes
 * @apiGroup IssueTypes
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Issue types not found.
 */
router.delete('/:id',
  destroy)

export default router
