import { Router } from "express";
import { middleware as query } from "querymen";
import { middleware as body } from "bodymen";
import { master } from "../../services/passport";
import { create, index, show, update, destroy } from "./controller";
import { schema } from "./model";
export Make, { schema } from "./model";

const router = new Router();
const {
  code,
  uuid,
  description,
  isBaseProvider,
  isAccessoryProvider,
  isFinishingProvider,
  isHardwareProvider,
  isApplianceProvider,
  isEdgebandProvider,
  isChemicalProvider, isGlassProvider, isProfileProvider,
  others,
  active,
  logo,
  image,
  slug,
  series,
} = schema.tree;

/**
 * @api {post} /makes Create make
 * @apiName CreateMake
 * @apiGroup Make
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiParam MakeCode.MakeId, MakeName Make's MakeCode.MakeId, MakeName.
 * @apiParam isBaseProvider Make's isBaseProvider.
 * @apiParam isFinishingProvider Make's isFinishingProvider.
 * @apiParam isAccessoryProvider Make's isAccessoryProvider.
 * @apiParam isHardwareProvider Make's isHardwareProvider.
 * @apiParam active Make's active.
 * @apiSuccess {Object} make Make's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Make not found.
 * @apiError 401 master access only.
 */
router.post(
  "/",
  body({
    code,
    uuid,
    description,
    isBaseProvider,
    isAccessoryProvider,
    isFinishingProvider,
    isHardwareProvider,
    isApplianceProvider,
    isEdgebandProvider,
    isChemicalProvider, isGlassProvider, isProfileProvider,
    others,
    active,
    logo,
    image,
    slug,
    series,
  }),
  create
);

/**
 * @api {get} /makes Retrieve makes
 * @apiName RetrieveMakes
 * @apiGroup Make
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of makes.
 * @apiSuccess {Object[]} rows List of makes.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 401 master access only.
 */
router.get("/", query(), index);

/**
 * @api {get} /makes/:id Retrieve make
 * @apiName RetrieveMake
 * @apiGroup Make
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiSuccess {Object} make Make's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Make not found.
 * @apiError 401 master access only.
 */
router.get("/:id", show);

/**
 * @api {put} /makes/:id Update make
 * @apiName UpdateMake
 * @apiGroup Make
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiParam MakeCode.MakeId, MakeName Make's MakeCode.MakeId, MakeName.
 * @apiParam isBaseProvider Make's isBaseProvider.
 * @apiParam isFinishingProvider Make's isFinishingProvider.
 * @apiParam isAccessoryProvider Make's isAccessoryProvider.
 * @apiParam isHardwareProvider Make's isHardwareProvider.
 * @apiParam active Make's active.
 * @apiSuccess {Object} make Make's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Make not found.
 * @apiError 401 master access only.
 */
router.put(
  "/:id",
  body({
    code,
    uuid,
    description,
    isBaseProvider,
    isAccessoryProvider,
    isFinishingProvider,
    isHardwareProvider,
    isApplianceProvider,
    isEdgebandProvider,
    isChemicalProvider, isGlassProvider, isProfileProvider,
    others,
    active,
    logo,
    image,
    slug,
    series,
  }),
  update
);

/**
 * @api {delete} /makes/:id Delete make
 * @apiName DeleteMake
 * @apiGroup Make
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Make not found.
 * @apiError 401 master access only.
 */
router.delete("/:id", destroy);

export default router;
