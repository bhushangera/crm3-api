import { Router } from "express";
import { middleware as query } from "querymen";
import { middleware as body } from "bodymen";
import { create, index, show, update, destroy } from "./controller";
import { schema } from "./model";
export PanelSize, { schema } from "./model";

const router = new Router();
const {
  code,
  description,
  type,
  width,
  height,
  area, active

} = schema.tree;

/**
 * @api {post} /panelSize Create panel size
 * @apiName CreatePanelSize
 * @apiGroup PanelSize
 * @apiParam code Panel size's code.
 * @apiParam description Panel size's description.
 * @apiSuccess {Object} panelSize Panel size's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Panel size not found.
 */
router.post(
  "/",
  body({
    code,
    description,
    type,
    width,
    height,
    area, active

  }),
  create
);

/**
 * @api {get} /panelSize Retrieve panel sizes
 * @apiName RetrievePanelSizes
 * @apiGroup PanelSize
 * @apiUse listParams
 * @apiSuccess {Object[]} panelSizes List of panel sizes.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/", query(), index);

/**
 * @api {get} /panelSize/:id Retrieve panel size
 * @apiName RetrievePanelSize
 * @apiGroup PanelSize
 * @apiSuccess {Object} panelSize Panel size's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Panel size not found.
 */
router.get("/:id", show);

/**
 * @api {put} /panelSize/:id Update panel size
 * @apiName UpdatePanelSize
 * @apiGroup PanelSize
 * @apiParam code Panel size's code.
 * @apiParam description Panel size's description.
 * @apiSuccess {Object} panelSize Panel size's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Panel size not found.
 */
router.put(
  "/:id",
  body({
    code,
    description,
    type,
    width,
    height,
    area, active

  }),
  update
);

/**
 * @api {delete} /panelSize/:id Delete panel size
 * @apiName DeletePanelSize
 * @apiGroup PanelSize
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Panel size not found.
 */
router.delete("/:id", destroy);

export default router;
