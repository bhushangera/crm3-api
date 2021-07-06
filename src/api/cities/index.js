import { Router } from "express";
import { middleware as query } from "querymen";
import { middleware as body } from "bodymen";
import { create, index, show, update, destroy } from "./controller";
import { schema } from "./model";
export Cities, { schema } from "./model";

const router = new Router();
const {
  name,
  state_id,
  state_code,
  country_id,
  country_code,
  longitude,
  latitude,
} = schema.tree;

/**
 * @api {post} /cities Create cities
 * @apiName CreateCities
 * @apiGroup Cities
 * @apiParam name Cities's name.
 * @apiSuccess {Object} cities Cities's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Cities not found.
 */
router.post(
  "/",
  body({
    name,
    state_id,
    state_code,
    country_id,
    country_code,
    longitude,
    latitude,
  }),
  create
);

/**
 * @api {get} /cities Retrieve cities
 * @apiName RetrieveCities
 * @apiGroup Cities
 * @apiUse listParams
 * @apiSuccess {Object[]} cities List of cities.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/", query(), index);

/**
 * @api {get} /cities/:id Retrieve cities
 * @apiName RetrieveCities
 * @apiGroup Cities
 * @apiSuccess {Object} cities Cities's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Cities not found.
 */
router.get("/:id", show);

/**
 * @api {put} /cities/:id Update cities
 * @apiName UpdateCities
 * @apiGroup Cities
 * @apiParam name Cities's name.
 * @apiSuccess {Object} cities Cities's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Cities not found.
 */
router.put(
  "/:id",
  body({
    name,
    state_id,
    state_code,
    country_id,
    country_code,
    longitude,
    latitude,
  }),
  update
);

/**
 * @api {delete} /cities/:id Delete cities
 * @apiName DeleteCities
 * @apiGroup Cities
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Cities not found.
 */
router.delete("/:id", destroy);

export default router;
