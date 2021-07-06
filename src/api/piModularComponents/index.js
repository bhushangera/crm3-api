import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export PiModularComponents, { schema } from './model'

const router = new Router()
const {
  id,
  piId,
  itemNo,
  remarks,
  carcassId,
  shutterId,
  exposedId,
  entityId,
  entity,
  categoryId,
  category,
  codeId,
  code,
  materialId,
  articleId,
  classification,
  unitType,
  instType,
  entitySelected,
  categorySelected,
  codeSelected,
  materialSelected,
  articleSelected,
  articleDetails,
  image,
  materialImage,
  hasExposedSides,
  openCarcass,
  carcassColor,
  frontEdgeColor,
  exposedVariant,
  topExposed,
  bottomExposed,
  leftExposed,
  rightExposed,
  backExposed,
  shelfExposed,
  hasDrawer,
  hasHinges,
  hasAppliances,
  hasFittings,
  TDA,
  BDA,
  LDA,
  RDA,
  topDown,
  bottomUp,
  leftHAdj,
  rightHAdj,
  fixedHeight,
  fixedWidth,
  fixedDepth,
  H,
  W,
  W1,
  D,
  qty,
  channelLenght,
  tandemLength,
  hingesPackId,
  hingesQty,
  appliancesPackId,
  appliancesQty, spLocation,
  fittings
} = schema.tree

/**
 * @api {post} /piModularComponents Create pi modular components
 * @apiName CreatePiModularComponents
 * @apiGroup PiModularComponents
 * @apiParam id Pi modular components's id.
 * @apiParam code Pi modular components's code.
 * @apiSuccess {Object} piModularComponents Pi modular components's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Pi modular components not found.
 */
router.post('/',
  body({
    id,
    piId,
    itemNo,
    remarks,
    carcassId,
    shutterId,
    exposedId,
    entityId,
    entity,
    categoryId,
    category,
    codeId,
    code,
    materialId,
    articleId,
    classification,
    unitType,
    instType,
    entitySelected,
    categorySelected,
    codeSelected,
    materialSelected,
    articleSelected,
    articleDetails,
    image,
    materialImage,
    hasExposedSides,
    openCarcass,
    carcassColor,
    frontEdgeColor,
    exposedVariant,
    topExposed,
    bottomExposed,
    leftExposed,
    rightExposed,
    backExposed,
    shelfExposed,
    hasDrawer,
    hasHinges,
    hasAppliances,
    hasFittings,
    TDA,
    BDA,
    LDA,
    RDA,
    topDown,
    bottomUp,
    leftHAdj,
    rightHAdj,
    fixedHeight,
    fixedWidth,
    fixedDepth,
    H,
    W,
    W1,
    D,
    qty,
    channelLenght,
    tandemLength,
    hingesPackId,
    hingesQty,
    appliancesPackId,
    appliancesQty,
    spLocation,
    fittings
  }),
  create)

/**
 * @api {get} /piModularComponents Retrieve pi modular components
 * @apiName RetrievePiModularComponents
 * @apiGroup PiModularComponents
 * @apiUse listParams
 * @apiSuccess {Object[]} piModularComponents List of pi modular components.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /piModularComponents/:id Retrieve pi modular components
 * @apiName RetrievePiModularComponents
 * @apiGroup PiModularComponents
 * @apiSuccess {Object} piModularComponents Pi modular components's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Pi modular components not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /piModularComponents/:id Update pi modular components
 * @apiName UpdatePiModularComponents
 * @apiGroup PiModularComponents
 * @apiParam id Pi modular components's id.
 * @apiParam code Pi modular components's code.
 * @apiSuccess {Object} piModularComponents Pi modular components's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Pi modular components not found.
 */
router.put('/:id',
  body({
    id,
    piId,
    itemNo,
    remarks,
    carcassId,
    shutterId,
    exposedId,
    entityId,
    entity,
    categoryId,
    category,
    codeId,
    code,
    materialId,
    articleId,
    classification,
    unitType,
    instType,
    entitySelected,
    categorySelected,
    codeSelected,
    materialSelected,
    articleSelected,
    articleDetails,
    image,
    materialImage,
    hasExposedSides,
    openCarcass,
    carcassColor,
    frontEdgeColor,
    exposedVariant,
    topExposed,
    bottomExposed,
    leftExposed,
    rightExposed,
    backExposed,
    shelfExposed,
    hasDrawer,
    hasHinges,
    hasAppliances,
    hasFittings,
    TDA,
    BDA,
    LDA,
    RDA,
    topDown,
    bottomUp,
    leftHAdj,
    rightHAdj,
    fixedHeight,
    fixedWidth,
    fixedDepth,
    H,
    W,
    W1,
    D,
    qty,
    channelLenght,
    tandemLength,
    hingesPackId,
    hingesQty,
    appliancesPackId,
    appliancesQty,
    spLocation,
    fittings
  }),
  update)

/**
 * @api {delete} /piModularComponents/:id Delete pi modular components
 * @apiName DeletePiModularComponents
 * @apiGroup PiModularComponents
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Pi modular components not found.
 */
router.delete('/:id',
  destroy)

export default router
