import { Router } from "express";
import { middleware as query } from "querymen";
import { middleware as body } from "bodymen";
import { create, index, show, update, destroy } from "./controller";
import { schema } from "./model";
export States, { schema } from "./model";

const router = new Router();
const {
  state_id,
  name,
  country_id,
  country_code,
  state_code,
  GSTCode,
} = schema.tree;

/**
 * @api {post} /states Create states
 * @apiName CreateStates
 * @apiGroup States
 * @apiParam countryId States's countryId.
 * @apiParam country States's country.
 * @apiParam code States's code.
 * @apiParam name States's name.
 * @apiParam slug, zone, GSTCode States's slug, zone, GSTCode.
 * @apiSuccess {Object} states States's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 States not found.
 */
router.post(
  "/",
  body({
    state_id,
    name,
    country_id,
    country_code,
    state_code,
    GSTCode,
  }),
  create
);

/**
 * @api {get} /states Retrieve states
 * @apiName RetrieveStates
 * @apiGroup States
 * @apiUse listParams
 * @apiSuccess {Object[]} states List of states.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/", query(), index);

/**
 * @api {get} /states/:id Retrieve states
 * @apiName RetrieveStates
 * @apiGroup States
 * @apiSuccess {Object} states States's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 States not found.
 */
router.get("/:id", show);

/**
 * @api {put} /states/:id Update states
 * @apiName UpdateStates
 * @apiGroup States
 * @apiParam countryId States's countryId.
 * @apiParam country States's country.
 * @apiParam code States's code.
 * @apiParam name States's name.
 * @apiParam slug, zone, GSTCode States's slug, zone, GSTCode.
 * @apiSuccess {Object} states States's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 States not found.
 */
router.put(
  "/:id",
  body({
    state_id,
    name,
    country_id,
    country_code,
    state_code,
    GSTCode
  }),
  update
);

/**
 * @api {delete} /states/:id Delete states
 * @apiName DeleteStates
 * @apiGroup States
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 States not found.
 */
router.delete("/:id", destroy);

export default router;
