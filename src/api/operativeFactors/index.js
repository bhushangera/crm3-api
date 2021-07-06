import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export OperativeFactors, { schema } from './model'

const router = new Router()
const { code, uuid, entityId,
  entityCode,
  categoryId,
  category,
  categoryCodeId,
  categoryCode,
  description,
  forexFactor,
  exportFactor,
  overheads,
  packaging,
  production,
  operativeMargin,
  dealerFactor,
  retailFactor,
  totalDomestic,
  totalExport, active } = schema.tree

router.post('/',
  body({
    code, uuid, entityId,
    entityCode,
    categoryId,
    category,
    categoryCodeId,
    categoryCode,
    description,
    forexFactor,
    exportFactor,
    overheads,
    packaging,
    production,
    operativeMargin,
    dealerFactor,
    retailFactor,
    totalDomestic,
    totalExport, active
  }),
  create)


router.get('/',
  query(),
  index)


router.get('/:id',
  show)


router.put('/:id',
  body({
    code, uuid, entityId,
    entityCode,
    categoryId,
    category,
    categoryCodeId,
    categoryCode,
    description,
    forexFactor,
    exportFactor,
    overheads,
    packaging,
    production,
    operativeMargin,
    dealerFactor,
    retailFactor,
    totalDomestic,
    totalExport, active
  }),
  update)


router.delete('/:id',
  destroy)

export default router
