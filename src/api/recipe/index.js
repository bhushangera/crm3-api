import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Recipe, { schema } from './model'

const router = new Router()
const {
  articleId,
  articleCode,
  articleDescription,
  consumableId,
  consumableCode,
  qty,
  unit,
  wPercent,
  calculateBy
} = schema.tree


router.post('/',
  body({
    articleId,
    articleCode,
    articleDescription,
    consumableId,
    consumableCode,
    qty,
    wPercent,
    unit,
    calculateBy
  }),
  create)


router.get('/',
  query(),
  index)

router.get('/:id',
  show)


router.put('/:id',
  body({
    articleId,
    articleCode,
    articleDescription,
    consumableId,
    consumableCode,
    qty,
    wPercent,
    unit,
    calculateBy
  }),
  update)


router.delete('/:id',
  destroy)

export default router
