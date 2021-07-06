import { Router } from "express";
import { middleware as query } from "querymen";
import { middleware as body } from "bodymen";
import { master } from "../../services/passport";
import { schema } from "./model";
import { create, index, show, update, destroy } from "./controller";
export Company, { schema } from "./model";

const router = new Router();
const {
  companyName,
  shortName,
  prefix,
  tagline,
  building,
  street,
  address,
  cityId,
  city,
  stateId,
  state,
  countryId,
  country,
  email,
  landline,
  mobile,
  logo,
  logo1,
  facebook,
  twitter,
  youtube,
  linkdIn,
  instagram,
  pinterest,
  info,
} = schema.tree;

/**
 * @api {post} /company Create company
 * @apiName CreateCompany
 * @apiGroup Company
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiSuccess {Object} company Company's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Company not found.
 * @apiError 401 master access only.
 */
router.post(
  "/",
  body({
    companyName,
    shortName,
    prefix,
    tagline,
    building,
    street,
    address,
    cityId,
    city,
    stateId,
    state,
    countryId,
    country,
    email,
    landline,
    mobile,
    logo,
    logo1,
    facebook,
    twitter,
    youtube,
    linkdIn,
    instagram,
    pinterest,
    info,
  }),
  create
);

/**
 * @api {get} /company Retrieve companies
 * @apiName RetrieveCompanies
 * @apiGroup Company
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of companies.
 * @apiSuccess {Object[]} rows List of companies.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 401 master access only.
 */
router.get("/", query(), index);

/**
 * @api {get} /company/:id Retrieve company
 * @apiName RetrieveCompany
 * @apiGroup Company
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiSuccess {Object} company Company's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Company not found.
 * @apiError 401 master access only.
 */
router.get("/:id", show);

/**
 * @api {put} /company/:id Update company
 * @apiName UpdateCompany
 * @apiGroup Company
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiSuccess {Object} company Company's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Company not found.
 * @apiError 401 master access only.
 */

router.put(
  "/:id",
  body({
    companyName,
    shortName,
    prefix,
    tagline,
    building,
    street,
    address,
    cityId,
    city,
    stateId,
    state,
    countryId,
    country,
    email,
    landline,
    mobile,
    logo,
    logo1,
    facebook,
    twitter,
    youtube,
    linkdIn,
    instagram,
    pinterest,
    info,
  }),
  update
);

/**
 * @api {delete} /company/:id Delete company
 * @apiName DeleteCompany
 * @apiGroup Company
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Company not found.
 * @apiError 401 master access only.
 */
router.delete("/:id", destroy);

export default router;
