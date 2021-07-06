import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Appraisals, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /Appraisals Create appraisals
 * @apiName CreateAppraisals
 * @apiGroup Appraisals
 * @apiParam code Appraisals's code.
 * @apiParam description Appraisals's description.
 * @apiSuccess {Object} appraisals Appraisals's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Appraisals not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /Appraisals Retrieve appraisals
 * @apiName RetrieveAppraisals
 * @apiGroup Appraisals
 * @apiUse listParams
 * @apiSuccess {Object[]} appraisals List of appraisals.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /Appraisals/:id Retrieve appraisals
 * @apiName RetrieveAppraisals
 * @apiGroup Appraisals
 * @apiSuccess {Object} appraisals Appraisals's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Appraisals not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /Appraisals/:id Update appraisals
 * @apiName UpdateAppraisals
 * @apiGroup Appraisals
 * @apiParam code Appraisals's code.
 * @apiParam description Appraisals's description.
 * @apiSuccess {Object} appraisals Appraisals's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Appraisals not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /Appraisals/:id Delete appraisals
 * @apiName DeleteAppraisals
 * @apiGroup Appraisals
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Appraisals not found.
 */
router.delete('/:id',
  destroy)

export default router
