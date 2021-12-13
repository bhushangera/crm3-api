import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Articles, { schema } from './model'

const router = new Router()
const {
  uuid,
  code,
  description,
  materialId,
  groupId,
  groupCode,
  groupType,
  entityId,
  entityCode,
  entityCategoryId,
  entityCategoryCode,
  categoryCodeId,
  categoryCode,
  materialCode,
  materialDescription,
  materialImage,
  image,
  componentProps,
  moduleProps,
  moduleParts,
  moduleConsumables,
  componentFittings,
  componentHinges,
  componentAppliances,
  componentModules,
  active, checked,
  hasDrawers,
  hasHinges,
  hasAppliances,
  hasFittings, hasBifoldShutter, isAHU, shutterType
} = schema.tree

router.post(
  '/',
  body({
    uuid,
    code,
    description,
    materialId,
    groupId,
    groupCode,
    groupType,
    entityId,
    entityCode,
    entityCategoryId,
    entityCategoryCode,
    categoryCodeId,
    categoryCode,
    materialCode,
    materialDescription,
    materialImage,
    image,
    componentProps,
    moduleProps,
    moduleParts,
    moduleConsumables,
    componentFittings,
    componentHinges,
    componentAppliances,
    componentModules,
    active,
    checked,
    hasDrawers,
    hasHinges,
    hasAppliances,
    hasFittings,
    hasBifoldShutter,
    isAHU,
    shutterType
  }),
  create
)

router.get('/', query(), index)

router.get('/:id', show)

router.put(
  '/:id',
  body({
    uuid,
    code,
    description,
    materialId,
    groupId,
    groupCode,
    groupType,
    entityId,
    entityCode,
    entityCategoryId,
    entityCategoryCode,
    categoryCodeId,
    categoryCode,
    materialCode,
    materialDescription,
    materialImage,
    image,
    componentProps,
    moduleProps,
    moduleParts,
    moduleConsumables,
    componentFittings,
    componentHinges,
    componentAppliances,
    componentModules,
    active,
    checked,
    hasDrawers,
    hasHinges,
    hasAppliances,
    hasFittings,
    hasBifoldShutter,
    isAHU,
    shutterType
  }),
  update
)

router.delete('/:id', destroy)

export default router
