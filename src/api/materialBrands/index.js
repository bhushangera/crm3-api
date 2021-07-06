import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export MaterialBrands, { schema } from './model'

const router = new Router()
const { 
  MId,
  MCode,
  MakeId,
  MakeCode,
  MCId,
  MCCode,
  SMCId,
  SMCCode,
  slug,
  isActive,
  image,
 } = schema.tree

/**
 * @api {post} /materialBrands Create material brands
 * @apiName CreateMaterialBrands
 * @apiGroup MaterialBrands
 * @apiParam materialId Material brands's materialId.
 * @apiParam material Material brands's material.
 * @apiParam makeId Material brands's makeId.
 * @apiParam make Material brands's make.
 * @apiParam SMCId Material brands's SMCId.
 * @apiParam MCId Material brands's MCId.
 * @apiParam MCCode Material brands's MCCode.
 * @apiParam SMCCode Material brands's SMCCode.
 * @apiParam slug Material brands's slug.
 * @apiParam isActive Material brands's isActive.
 * @apiParam image Material brands's image.
 * @apiParam mType Material brands's mType.
 * @apiSuccess {Object} materialBrands Material brands's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Material brands not found.
 */
router.post('/',
  body({ 
    MId,
  MCode,
  MakeId,
  MakeCode,
  MCId,
  MCCode,
  SMCId,
  SMCCode,
  slug,
  isActive,
  image,
  }),
  create)

/**
 * @api {get} /materialBrands Retrieve material brands
 * @apiName RetrieveMaterialBrands
 * @apiGroup MaterialBrands
 * @apiUse listParams
 * @apiSuccess {Object[]} materialBrands List of material brands.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /materialBrands/:id Retrieve material brands
 * @apiName RetrieveMaterialBrands
 * @apiGroup MaterialBrands
 * @apiSuccess {Object} materialBrands Material brands's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Material brands not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /materialBrands/:id Update material brands
 * @apiName UpdateMaterialBrands
 * @apiGroup MaterialBrands
 * @apiParam materialId Material brands's materialId.
 * @apiParam material Material brands's material.
 * @apiParam makeId Material brands's makeId.
 * @apiParam make Material brands's make.
 * @apiParam SMCId Material brands's SMCId.
 * @apiParam MCId Material brands's MCId.
 * @apiParam MCCode Material brands's MCCode.
 * @apiParam SMCCode Material brands's SMCCode.
 * @apiParam slug Material brands's slug.
 * @apiParam isActive Material brands's isActive.
 * @apiParam image Material brands's image.
 * @apiParam mType Material brands's mType.
 * @apiSuccess {Object} materialBrands Material brands's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Material brands not found.
 */
router.put('/:id',
  body({
    MId,
    MCode,
    MakeId,
    MakeCode,
    MCId,
    MCCode,
    SMCId,
    SMCCode,
    slug,
    isActive,
    image,
     }),
  update)

/**
 * @api {delete} /materialBrands/:id Delete material brands
 * @apiName DeleteMaterialBrands
 * @apiGroup MaterialBrands
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Material brands not found.
 */
router.delete('/:id',
  destroy)

export default router
