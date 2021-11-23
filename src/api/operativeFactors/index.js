import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export OperativeFactors, { schema } from './model'

const router = new Router()
const {
  entityId,
  entityCode,
  categoryId,
  category,
  categoryCodeId,
  categoryCode,
  code,
  uuid,
  description,
  productionCostPSF,
  productionCostPP,
  packingFactor,
  dealerFactor,
  retailFactor,
  exportFactor,
  active
} = schema.tree

router.post('/',
  body({
    entityId,
    entityCode,
    categoryId,
    category,
    categoryCodeId,
    categoryCode,
    code,
    uuid,
    description,
    productionCostPSF,
    productionCostPP,
    packingFactor,
    dealerFactor,
    retailFactor,
    exportFactor,
    active
  }),
  create)


router.get('/',
  query(),
  index)


router.get('/:id',
  show)


router.put('/:id',
  body({
    entityId,
    entityCode,
    categoryId,
    category,
    categoryCodeId,
    categoryCode,
    code,
    uuid,
    description,
    productionCostPSF,
    productionCostPP,
    packingFactor,
    dealerFactor,
    retailFactor,
    exportFactor,
    active
  }),
  update)


router.delete('/:id',
  destroy)

export default router
