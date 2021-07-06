import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export TapeDecor, { schema } from './model'

const router = new Router()
const {
  MakeId,
  MakeCode,
  MakeImage,
  DNo,
  DName,
  Image,
  displayName,
  matt,
  gloss,
  highGloss,
  active,
} = schema.tree

/**
 * @api {post} /tapeDecors Create tape decor
 * @apiName CreateTapeDecor
 * @apiGroup TapeDecor
 * @apiParam dNo Tape decor's dNo.
 * @apiParam dName Tape decor's dName.
 * @apiSuccess {Object} tapeDecor Tape decor's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Tape decor not found.
 */
router.post('/',
  body({
    MakeId,
    MakeCode,
    MakeImage,
    DNo,
    DName,
    Image,
    displayName,
    matt,
    gloss,
    highGloss,
    active,
  }),
  create)

/**
 * @api {get} /tapeDecors Retrieve tape decors
 * @apiName RetrieveTapeDecors
 * @apiGroup TapeDecor
 * @apiUse listParams
 * @apiSuccess {Object[]} tapeDecors List of tape decors.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /tapeDecors/:id Retrieve tape decor
 * @apiName RetrieveTapeDecor
 * @apiGroup TapeDecor
 * @apiSuccess {Object} tapeDecor Tape decor's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Tape decor not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /tapeDecors/:id Update tape decor
 * @apiName UpdateTapeDecor
 * @apiGroup TapeDecor
 * @apiParam dNo Tape decor's dNo.
 * @apiParam dName Tape decor's dName.
 * @apiSuccess {Object} tapeDecor Tape decor's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Tape decor not found.
 */
router.put('/:id',
  body({
    MakeId,
    MakeCode,
    MakeImage,
    DNo,
    DName,
    Image,
    displayName,
    matt,
    gloss,
    highGloss,
    active,
  }),
  update)

/**
 * @api {delete} /tapeDecors/:id Delete tape decor
 * @apiName DeleteTapeDecor
 * @apiGroup TapeDecor
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Tape decor not found.
 */
router.delete('/:id',
  destroy)

export default router
