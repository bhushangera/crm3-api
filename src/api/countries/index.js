import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Countries, { schema } from './model'

const router = new Router()
const {
  country_id,
  name,
  iso3,
  iso2,
  icon,
  phone_code,
  capital,
  currency
} = schema.tree

/**
 * @api {post} /countries Create countries
 * @apiName CreateCountries
 * @apiGroup Countriescountr
 * @apiParam code Countries's code.
 * @apiParam name Countries's name.
 * @apiParam regionId  region,Countries's regionId. region,
 * @apiParam prefix Countries's prefix.
 * @apiParam currency Countries's currency.
 * @apiParam currencyCode Countries's currencyCode.
 * @apiParam USDFactor Countries's USDFactor.
 * @apiParam INRFactor exchangeRate,Countries's INRFactor.exchangeRate,
 * @apiParam PrimaryLanguage Countries's PrimaryLanguage.
 * @apiParam alternateLanguage Countries's alternateLanguage.
 * @apiParam slug Countries's slug.
 * @apiSuccess {Object} countries Countries's data.
 * @apiError {Object} 400 Some paramcountreters may contain invalid values.
 * @apiError 404 Countries not found.
 */
router.post('/',
  body({
    country_id,
    name,
    iso3,
    iso2,
    icon,
    phone_code,
    capital,
    currency,
  }),
  create)

/**
 * @api {get} /countries Retrieve countries
 * @apiName RetrieveCountriescountr
 * @apiGroup Countries
 * @apiUse listParams
 * @apiSuccess {Object[]} countries List of countries.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /countries/:id Retrieve countries
 * @apiName RetrieveCountries
 * @apiGroup Countries
 * @apiSuccess {Object} countries Countries's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Countries not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /countries/:id Update countries
 * @apiName UpdateCountries
 * @apiGroup Countries
 * @apiParam code Countries's code.
 * @apiParam name Countries's name.
 * @apiParam regionId  region,Countries's regionId. region,
 * @apiParam prefix Countries's prefix.
 * @apiParam currency Countries's currency.
 * @apiParam currencyCode Countries's currencyCode.
 * @apiParam USDFactor Countries's USDFactor.
 * @apiParam INRFactor exchangeRate,Countries's INRFactor.exchangeRate,
 * @apiParam PrimaryLanguage Countries's PrimaryLanguage.
 * @apiParam alternateLanguage Countries's alternateLanguage.
 * @apiParam slug Countries's slug.
 * @apiSuccess {Object} countries Countries's data.
 * @apiError {Object} 400 Some paramcountreters may contain invalid values.
 * @apiError 404 Countries not found.
 */
router.put('/:id',
  body({
    country_id,
    name,
    iso3,
    iso2,
    icon,
    phone_code,
    capital,
    currency,
  }),
  update)

/**
 * @api {delete} /countries/:id Delete countries
 * @apiName DeleteCountriescountr
 * @apiGroup Countries
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Countries not found.
 */
router.delete('/:id',
  destroy)

export default router
