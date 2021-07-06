import { Router } from "express";
import { middleware as query } from "querymen";
import { middleware as body } from "bodymen";
import { create, index, show, update, destroy } from "./controller";
import { schema } from "./model";
export CarcaseConfigs, { schema } from "./model";

const router = new Router();
const {
  configType,
  configCode,
  FML,
  FMR,
  BM,
  DBM,
  BGSD,
  BGST,
  DLA,
  DFML,
  DFMR,
  grooves,
  grLeft,
  grRight,
  grTop,
  grBottom,
  TSS,
  shHeightAdj,
  shWidthAdj,
  HM,
  FM,
  shHeightAdj25mm,
  shWidthAdj25mm,
  shutterAdj, bslT,
  shStdHeight,
  shStdWidth,
  hingeGapHeight,
  hingeGapWidth,
} = schema.tree;

/**
 * @api {post} /carcaseConfigs Create carcase configs
 * @apiName CreateCarcaseConfigs
 * @apiGroup CarcaseConfigs
 * @apiParam configType Carcase configs's configType.
 * @apiParam FM Carcase configs's FM.
 * @apiParam BM Carcase configs's BM.
 * @apiParam BGS Carcase configs's BGS.
 * @apiParam DLA Carcase configs's DLA.
 * @apiParam DFM Carcase configs's DFM.
 * @apiSuccess {Object} carcaseConfigs Carcase configs's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Carcase configs not found.
 */
router.post(
  "/",
  body({
    configType,
    configCode,
    FML,
    FMR,
    BM,
    DBM,
    BGSD,
    BGST,
    DLA,
    DFML,
    DFMR,
    grooves,
    grLeft,
    grRight,
    grTop,
    grBottom,
    TSS,
    shHeightAdj,
    shWidthAdj,
    HM,
    FM,
    shHeightAdj25mm,
    shWidthAdj25mm,
    shutterAdj, bslT,
    shStdHeight,
    shStdWidth,
    hingeGapHeight,
    hingeGapWidth,
  }),
  create
);

/**
 * @api {get} /carcaseConfigs Retrieve carcase configs
 * @apiName RetrieveCarcaseConfigs
 * @apiGroup CarcaseConfigs
 * @apiUse listParams
 * @apiSuccess {Object[]} carcaseConfigs List of carcase configs.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/", query(), index);

/**
 * @api {get} /carcaseConfigs/:id Retrieve carcase configs
 * @apiName RetrieveCarcaseConfigs
 * @apiGroup CarcaseConfigs
 * @apiSuccess {Object} carcaseConfigs Carcase configs's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Carcase configs not found.
 */
router.get("/:id", show);

/**
 * @api {put} /carcaseConfigs/:id Update carcase configs
 * @apiName UpdateCarcaseConfigs
 * @apiGroup CarcaseConfigs
 * @apiParam configType Carcase configs's configType.
 * @apiParam FM Carcase configs's FM.
 * @apiParam BM Carcase configs's BM.
 * @apiParam BGS Carcase configs's BGS.
 * @apiParam DLA Carcase configs's DLA.
 * @apiParam DFM Carcase configs's DFM.
 * @apiSuccess {Object} carcaseConfigs Carcase configs's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Carcase configs not found.
 */
router.put(
  "/:id",
  body({
    configType,
    configCode,
    FML,
    FMR,
    BM,
    DBM,
    BGSD,
    BGST,
    DLA,
    DFML,
    DFMR,
    grooves,
    grLeft,
    grRight,
    grTop,
    grBottom,
    TSS,
    shHeightAdj,
    shWidthAdj,
    HM,
    FM,
    shHeightAdj25mm,
    shWidthAdj25mm,
    shutterAdj, bslT,
    shStdHeight,
    shStdWidth,
    hingeGapHeight,
    hingeGapWidth,
  }),
  update
);

/**
 * @api {delete} /carcaseConfigs/:id Delete carcase configs
 * @apiName DeleteCarcaseConfigs
 * @apiGroup CarcaseConfigs
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Carcase configs not found.
 */
router.delete("/:id", destroy);

export default router;
