import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export ContactGroup, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /contact-group Create contact group
 * @apiName CreateContactGroup
 * @apiGroup ContactGroup
 * @apiParam code Contact group's code.
 * @apiParam description Contact group's description.
 * @apiSuccess {Object} contactGroup Contact group's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Contact group not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /contact-group Retrieve contact groups
 * @apiName RetrieveContactGroups
 * @apiGroup ContactGroup
 * @apiUse listParams
 * @apiSuccess {Object[]} contactGroups List of contact groups.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /contact-group/:id Retrieve contact group
 * @apiName RetrieveContactGroup
 * @apiGroup ContactGroup
 * @apiSuccess {Object} contactGroup Contact group's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Contact group not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /contact-group/:id Update contact group
 * @apiName UpdateContactGroup
 * @apiGroup ContactGroup
 * @apiParam code Contact group's code.
 * @apiParam description Contact group's description.
 * @apiSuccess {Object} contactGroup Contact group's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Contact group not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /contact-group/:id Delete contact group
 * @apiName DeleteContactGroup
 * @apiGroup ContactGroup
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Contact group not found.
 */
router.delete('/:id',
  destroy)

export default router
