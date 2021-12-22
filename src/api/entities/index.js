import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Entities, { schema } from './model'

const router = new Router()
const {
  code,
  groupId,
  groupCode,
  groupType,
  description,
  icon,
  colorId,
  background,
  foreground,
  prefix,
  active,
  hasState,
  hasCategories,
  image,
  definition,
  notes,
  terms,
  unit,
  calculate, taxId,
  tax, componentStandards
} = schema.tree

router.post(
  '/',
  body({
    code,
    groupId,
    groupCode,
    groupType,
    description,
    icon,
    colorId,
    background,
    foreground,
    prefix,
    active,
    hasState,
    hasCategories,
    image,
    definition,
    notes,
    terms,
    unit,
    calculate,
    taxId,
    tax,
    componentStandards
  }),
  create
)

router.get('/', query(), index)

router.get('/:id', show)

router.put(
  '/:id',
  body({
    code,
    groupId,
    groupCode,
    groupType,
    description,
    icon,
    colorId,
    background,
    foreground,
    prefix,
    active,
    hasState,
    hasCategories,
    image,
    definition,
    notes,
    terms,
    unit,
    calculate,
    taxId,
    tax,
    componentStandards
  }),
  update
)

/**
 * @api {delete} /entities/:id Delete entities
 * @apiName DeleteEntities
 * @apiGroup Entities
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Entities not found.
 */
router.delete('/:id', destroy)

export default router
