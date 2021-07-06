import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export StatusCodes, { schema } from './model'

const router = new Router()
const {
  sortOrder, groupId,
  groupCode,
  entityId,
  entityCode,
  entityStateId,
  entityState,
  entityStateCode,
  code,
  description,
  active
} = schema.tree

/**
 * @api {post} /statusCodes Create status codes
 * @apiName CreateStatusCodes
 * @apiGroup StatusCodes
 * @apiParam code Status codes's code.
 * @apiParam description Status codes's description.
 * @apiSuccess {Object} statusCodes Status codes's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Status codes not found.
 */
router.post(
  '/',
  body({
    sortOrder,
    groupId,
    groupCode,
    entityId,
    entityCode,
    entityStateId,
    entityState,
    entityStateCode,
    code,
    description,
    active
  }),
  create
)

/**
 * @api {get} /statusCodes Retrieve status codes
 * @apiName RetrieveStatusCodes
 * @apiGroup StatusCodes
 * @apiUse listParams
 * @apiSuccess {Object[]} statusCodes List of status codes.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/', query(), index)

/**
 * @api {get} /statusCodes/:id Retrieve status codes
 * @apiName RetrieveStatusCodes
 * @apiGroup StatusCodes
 * @apiSuccess {Object} statusCodes Status codes's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Status codes not found.
 */
router.get('/:id', show)

/**
 * @api {put} /statusCodes/:id Update status codes
 * @apiName UpdateStatusCodes
 * @apiGroup StatusCodes
 * @apiParam code Status codes's code.
 * @apiParam description Status codes's description.
 * @apiSuccess {Object} statusCodes Status codes's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Status codes not found.
 */
router.put(
  '/:id',
  body({
    sortOrder,
    groupId,
    groupCode,
    entityId,
    entityCode,
    entityStateId,
    entityState,
    entityStateCode,
    code,
    description,
    active
  }),
  update
)

/**
 * @api {delete} /statusCodes/:id Delete status codes
 * @apiName DeleteStatusCodes
 * @apiGroup StatusCodes
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Status codes not found.
 */
router.delete('/:id', destroy)

export default router
