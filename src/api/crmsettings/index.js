import { Router } from "express";
import { middleware as query } from "querymen";
import { middleware as body } from "bodymen";
import { create, index, show, update, destroy } from "./controller";
import { schema } from "./model";
export Crmsettings, { schema } from "./model";

const router = new Router();
const {
  crm,
  emailAlert,
  smsAlert,
  features,
  location,
  nodemailer,
  api,
  company

} = schema.tree;

router.post(
  "/",
  body({
    crm,
    emailAlert,
    smsAlert,
    features,
    location,
    nodemailer,
    api,
    company
  }),
  create
);

router.get("/", query(), index);

router.get("/:id", show);

router.put(
  "/:id",
  body({
    crm,
    emailAlert,
    smsAlert,
    features,
    location,
    nodemailer,
    api,
    company

  }),
  update
);

/**
 * @api {delete} /crmsettings/:id Delete crmsettings
 * @apiName DeleteCrmsettings
 * @apiGroup Crmsettings
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Crmsettings not found.
 */
router.delete("/:id", destroy);

export default router;
