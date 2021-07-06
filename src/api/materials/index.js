import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Materials, { schema } from './model'

const router = new Router()
const {
  uuid,
  groupId,
  groupCode,
  groupType,
  entityId,
  entityCode,
  entityCategoryId,
  entityCategoryCode,
  categoryCodeId,
  categoryCode,
  code,
  description,
  HSNCode,
  taxRate,
  pbType,
  baseRate,
  image,
  slug,
  unit,
  procurementType,
  active, checked,
  brands,
  heights,
  widths,
  depths,
  diameters,
  thickness,
  size,
  generalProps,
  cabinatoryParameters,
  dimensions,
  partProps
} = schema.tree

router.post(
  '/',
  body({
    uuid,
    groupId,
    groupCode,
    groupType,
    entityId,
    entityCode,
    entityCategoryId,
    entityCategoryCode,
    categoryCodeId,
    categoryCode,
    code,
    description,
    HSNCode,
    taxRate,
    pbType,
    baseRate,
    image,
    slug,
    unit,
    procurementType,
    active,
    checked,
    brands,
    heights,
    widths,
    depths,
    diameters,
    thickness,
    size,
    generalProps,
    cabinatoryParameters,
    dimensions,
    partProps
  }),
  create
)

router.get('/', query(), index)

// router.get('/', show)

// router.get('/:uuid', show)

router.get('/:id', show)

router.put(
  '/:id',
  body({
    uuid,
    groupId,
    groupCode,
    groupType,
    entityId,
    entityCode,
    entityCategoryId,
    entityCategoryCode,
    categoryCodeId,
    categoryCode,
    code,
    description,
    HSNCode,
    taxRate,
    pbType,
    baseRate,
    image,
    slug,
    unit,
    procurementType,
    active,
    checked,
    brands,
    heights,
    widths,
    depths,
    diameters,
    thickness,
    size,
    generalProps,
    cabinatoryParameters,
    dimensions,
    partProps
  }),
  update
)

router.delete('/:id', destroy)

export default router
