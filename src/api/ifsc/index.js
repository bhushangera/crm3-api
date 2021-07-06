import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Ifsc, { schema } from './model'

const router = new Router()
const {
  BANK,
  IFSC,
  MICR,
  BRANCH,
  ADDRESS,
  STD,
  CONTACT,
  CITY,
  DISTRICT,
  STATE
} = schema.tree

/**
 * @api {post} /ifsc Create ifsc
 * @apiName CreateIfsc
 * @apiGroup Ifsc
 * @apiParam code Ifsc's code.
 * @apiParam description Ifsc's description.
 * @apiSuccess {Object} ifsc Ifsc's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Ifsc not found.
 */
router.post(
  '/',
  body({
    BANK,
    IFSC,
    MICR,
    BRANCH,
    ADDRESS,
    STD,
    CONTACT,
    CITY,
    DISTRICT,
    STATE
  }),
  create
)


router.get('/', query(), index)


router.get('/:id', show)


router.put(
  '/:id',
  body({
    BANK,
    IFSC,
    MICR,
    BRANCH,
    ADDRESS,
    STD,
    CONTACT,
    CITY,
    DISTRICT,
    STATE
  }),
  update
)

/**
 * @api {delete} /ifsc/:id Delete ifsc
 * @apiName DeleteIfsc
 * @apiGroup Ifsc
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Ifsc not found.
 */
router.delete('/:id', destroy)

export default router
