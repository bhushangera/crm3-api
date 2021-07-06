import { Router } from "express";
import { middleware as query } from "querymen";
import { middleware as body } from "bodymen";
import { create, index, show, update, destroy } from "./controller";
import { schema } from "./model";
export WebsiteSettings, { schema } from "./model";

const router = new Router();
const {
  siteTitle,
  logo1,
  logo2,
  description,
  companyName,
  legalName,
  contactPerson,
  address,
  countryId,
  country,
  iso2,
  phone_code,
  capital,
  currency,
  icon,
  stateId,
  state_name,
  state_code,
  cityId,
  city_name,
  lon,
  lat,
  companyPhone,
  email,
  website,
  GSTIN,
  bankAccount,
  bankName,
  IFSC,
  bankBranch,
  MICR,
  branchAddress,
  appURL,
  googleAPIKey,
  recapchaSiteKey,
  recapchaSecretKey,
  linodeTOKEN,
  currencyAPI,
  razorPayKeyId,
  razorPaySecret,
  openWeatherAPIKey,
  openWeatherKeyName,
  ipGeoLocationKey,
  facebook,
  twitter,
  google,
  youtube,
  pinterest,
  about,
  blog,
  products,
  services,
  team,
  testimonials,
  ecommerce,
  offers,
  newsletter,
  pricingTables,
  events,
  careers,
  privacyPolicy,
  projects, manufacturing,
  seo,
  searchable,
} = schema.tree;

/**
 * @api {post} /websiteSettings Create website settings
 * @apiName CreateWebsiteSettings
 * @apiGroup WebsiteSettings
 * @apiParam code Website settings's code.
 * @apiParam description Website settings's description.
 * @apiSuccess {Object} websiteSettings Website settings's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Website settings not found.
 */
router.post(
  "/",
  body({
    siteTitle,
    logo1,
    logo2,
    description,
    companyName,
    legalName,
    contactPerson,
    address,
    countryId,
    country,
    iso2,
    phone_code,
    capital,
    currency,
    icon,
    stateId,
    state_name,
    state_code,
    cityId,
    city_name,
    lon,
    lat,
    companyPhone,
    email,
    website,
    GSTIN,
    bankAccount,
    bankName,
    IFSC,
    bankBranch,
    MICR,
    branchAddress,
    appURL,
    googleAPIKey,
    recapchaSiteKey,
    recapchaSecretKey,
    linodeTOKEN,
    currencyAPI,
    razorPayKeyId,
    razorPaySecret,
    openWeatherAPIKey,
    openWeatherKeyName,
    ipGeoLocationKey,
    facebook,
    twitter,
    google,
    youtube,
    pinterest,
    about,
    blog,
    products,
    services,
    team,
    testimonials,
    ecommerce,
    offers,
    newsletter,
    pricingTables,
    events,
    careers,
    privacyPolicy,
    projects, manufacturing,
    seo,
    searchable,
  }),
  create
);

/**
 * @api {get} /websiteSettings Retrieve website settings
 * @apiName RetrieveWebsiteSettings
 * @apiGroup WebsiteSettings
 * @apiUse listParams
 * @apiSuccess {Object[]} websiteSettings List of website settings.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/", query(), index);

/**
 * @api {get} /websiteSettings/:id Retrieve website settings
 * @apiName RetrieveWebsiteSettings
 * @apiGroup WebsiteSettings
 * @apiSuccess {Object} websiteSettings Website settings's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Website settings not found.
 */
router.get("/:id", show);

/**
 * @api {put} /websiteSettings/:id Update website settings
 * @apiName UpdateWebsiteSettings
 * @apiGroup WebsiteSettings
 * @apiParam code Website settings's code.
 * @apiParam description Website settings's description.
 * @apiSuccess {Object} websiteSettings Website settings's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Website settings not found.
 */
router.put(
  "/:id",
  body({
    siteTitle,
    logo1,
    logo2,
    description,
    companyName,
    legalName,
    contactPerson,
    address,
    countryId,
    country,
    iso2,
    phone_code,
    capital,
    currency,
    icon,
    stateId,
    state_name,
    state_code,
    cityId,
    city_name,
    lon,
    lat,
    companyPhone,
    email,
    website,
    GSTIN,
    bankAccount,
    bankName,
    IFSC,
    bankBranch,
    MICR,
    branchAddress,
    appURL,
    googleAPIKey,
    recapchaSiteKey,
    recapchaSecretKey,
    linodeTOKEN,
    currencyAPI,
    razorPayKeyId,
    razorPaySecret,
    openWeatherAPIKey,
    openWeatherKeyName,
    ipGeoLocationKey,
    facebook,
    twitter,
    google,
    youtube,
    pinterest,
    about,
    blog,
    products,
    services,
    team,
    testimonials,
    ecommerce,
    offers,
    newsletter,
    pricingTables,
    events,
    careers,
    privacyPolicy,
    projects, manufacturing,
    seo,
    searchable,
  }),
  update
);

/**
 * @api {delete} /websiteSettings/:id Delete website settings
 * @apiName DeleteWebsiteSettings
 * @apiGroup WebsiteSettings
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Website settings not found.
 */
router.delete("/:id", destroy);

export default router;
