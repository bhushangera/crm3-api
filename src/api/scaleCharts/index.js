import { Router } from "express";
import { middleware as query } from "querymen";
import { middleware as body } from "bodymen";
import { create, index, show, update, destroy } from "./controller";
import { schema } from "./model";
export ScaleCharts, { schema } from "./model";

const router = new Router();
const { mm, cm, inch, ft, m, frac } = schema.tree;

/**
 * @api {post} /scaleCharts Create scale charts
 * @apiName CreateScaleCharts
 * @apiGroup ScaleCharts
 * @apiParam mm Scale charts's mm.
 * @apiParam in Scale charts's in.
 * @apiSuccess {Object} scaleCharts Scale charts's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Scale charts not found.
 */
router.post("/", body({ mm, cm, inch, ft, m, frac }), create);

/**
 * @api {get} /scaleCharts Retrieve scale charts
 * @apiName RetrieveScaleCharts
 * @apiGroup ScaleCharts
 * @apiUse listParams
 * @apiSuccess {Object[]} scaleCharts List of scale charts.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/", query(), index);

/**
 * @api {get} /scaleCharts/:id Retrieve scale charts
 * @apiName RetrieveScaleCharts
 * @apiGroup ScaleCharts
 * @apiSuccess {Object} scaleCharts Scale charts's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Scale charts not found.
 */
router.get("/:id", show);

/**
 * @api {put} /scaleCharts/:id Update scale charts
 * @apiName UpdateScaleCharts
 * @apiGroup ScaleCharts
 * @apiParam mm Scale charts's mm.
 * @apiParam in Scale charts's in.
 * @apiSuccess {Object} scaleCharts Scale charts's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Scale charts not found.
 */
router.put("/:id", body({ mm, cm, inch, ft, m, frac }), update);

/**
 * @api {delete} /scaleCharts/:id Delete scale charts
 * @apiName DeleteScaleCharts
 * @apiGroup ScaleCharts
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Scale charts not found.
 */
router.delete("/:id", destroy);

export default router;
