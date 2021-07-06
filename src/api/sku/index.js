import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Sku, { schema } from './model'

const router = new Router()
const {
  uuid,
  materialId,

  materialCode,
  materialDescription,
  groupId,
  groupCode,
  groupType,
  entityId,
  entityCode,
  entityCategoryId,
  entityCategoryCode,
  categoryCodeId,
  categoryCode,
  HSNCode,
  costFactor,
  skuClassification,
  DNo,
  DName,
  displayName,
  hasShades, hasRAL,
  hasShade,
  makeId,
  makeImage,
  makeCode,
  seriesId,
  seriesCode,
  seriesDescription,
  shades,
  shade,
  unit,
  image,
  isInventory,
  active,
  premium,
  panelSize,
  unitGroup, // length , mass, volume
  height,
  width,
  depth,
  thickness,
  effThickness,
  sqft,
  listPrice,
  purchasePrice,
  invProps
} = schema.tree

router.post(
  '/',
  body({
    uuid,
    materialId,
    materialCode,
    materialDescription,
    groupId,
    groupCode,
    groupType,
    entityId,
    entityCode,
    entityCategoryId,
    entityCategoryCode,
    categoryCodeId,
    categoryCode,

    HSNCode,
    costFactor,
    skuClassification,
    DNo,
    DName,
    displayName,
    hasShades,
    hasRAL,
    hasShade,
    makeId,
    makeImage,
    makeCode,
    seriesId,
    seriesCode,
    seriesDescription,
    shades,
    shade,
    unit,
    image,
    isInventory,
    active,
    premium,
    panelSize,
    unitGroup, // length , mass, volume
    height,
    width,
    depth,
    thickness,
    effThickness,
    sqft,
    listPrice,
    purchasePrice,
    invProps
  }),
  create
)

router.get('/', query(), index)
router.get('/', index)

router.get('/:id', show)

router.put(
  '/:id',
  body({
    uuid,
    materialId,
    materialCode,
    materialDescription,
    groupId,
    groupCode,
    groupType,
    entityId,
    entityCode,
    entityCategoryId,
    entityCategoryCode,
    categoryCodeId,
    categoryCode,
    HSNCode,
    costFactor,
    skuClassification,
    DNo,
    DName,
    displayName,
    hasShades,
    hasRAL,
    hasShade,
    makeId,
    makeImage,
    makeCode,
    seriesId,
    seriesCode,
    seriesDescription,
    shades,
    shade,
    unit,
    image,
    isInventory,
    active,
    premium,
    panelSize,
    unitGroup, // length , mass, volume
    height,
    width,
    depth,
    thickness,
    effThickness,
    sqft,
    listPrice,
    purchasePrice,
    invProps
  }),
  update
)

router.delete('/:id', destroy)

export default router
