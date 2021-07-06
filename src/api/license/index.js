import { Router } from "express";
import { middleware as query } from "querymen";
import { middleware as body } from "bodymen";
import { create, index, show, update, destroy } from "./controller";
import { schema } from "./model";
export License, { schema } from "./model";

const router = new Router();
const {
  user,
  party,
  creationDate,
  plan,
  cloudPlan,
  enableBackup,
  planCharges,
  cloudPlanCharges,
  backupCharges,
  demoMode,
  demoExpiry,
} = schema.tree;

router.post(
  "/",
  body({
    user,
    party,
    creationDate,
    plan,
    cloudPlan,
    enableBackup,
    planCharges,
    cloudPlanCharges,
    backupCharges,
    demoMode,
    demoExpiry,
  }),
  create
);

router.get("/", query(), index);

router.get("/:id", show);

router.put(
  "/:id",
  body({
    user,
    party,
    creationDate,
    plan,
    cloudPlan,
    enableBackup,
    planCharges,
    cloudPlanCharges,
    backupCharges,
    demoMode,
    demoExpiry,
  }),
  update
);

/**
 * @api {delete} /license/:id Delete license
 * @apiName DeleteLicense
 * @apiGroup License
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 License not found.
 */
router.delete("/:id", destroy);

export default router;
