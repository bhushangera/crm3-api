import { Router } from "express";
import { middleware as query } from "querymen";
import { middleware as body } from "bodymen";
import { create, index, show, update, destroy } from "./controller";
import { schema } from "./model";
export PayGrades, { schema } from "./model";

const router = new Router();
const {
  code,
  description,
  entity,
  entityState,
  entityCategory,
  statusCode,
  categoryCode,
  basic,
  splPay,
  minMax,
  minCTC,
  maxCTC,
  annualIncrement,
  bonus,
  allowances,
  deductions,
} = schema.tree;

/**
 * @api {post} /payGrades Create pay grades
 * @apiName CreatePayGrades
 * @apiGroup PayGrades
 * @apiParam grade Pay grades's grade.
 * @apiParam annualIncrement Pay grades's annualIncrement.
 * @apiParam scale Pay grades's scale.
 * @apiParam HRA Pay grades's HRA.
 * @apiParam DA Pay grades's DA.
 * @apiParam SA Pay grades's SA.
 * @apiParam LTA Pay grades's LTA.
 * @apiParam ESI Pay grades's ESI.
 * @apiParam EPFEmployee Pay grades's EPFEmployee.
 * @apiParam EPFEmployer Pay grades's EPFEmployer.
 * @apiParam DutyHours Pay grades's DutyHours.
 * @apiParam Gratuity5yrs Pay grades's Gratuity5yrs.
 * @apiParam Gratuity10yrs Pay grades's Gratuity10yrs.
 * @apiParam OTA Pay grades's OTA.
 * @apiParam CL Pay grades's CL.
 * @apiParam ELConversionFactor Pay grades's ELConversionFactor.
 * @apiParam ML Pay grades's ML.
 * @apiParam maternityLeave Pay grades's maternityLeave.
 * @apiParam RH Pay grades's RH.
 * @apiParam Days Pay grades's Days.
 * @apiParam weeklyOff Pay grades's weeklyOff.
 * @apiParam offAmount Pay grades's offAmount.
 * @apiParam RateHour Pay grades's RateHour.
 * @apiParam RateDay Pay grades's RateDay.
 * @apiParam weeklyHours Pay grades's weeklyHours.
 * @apiParam monthlyHours Pay grades's monthlyHours.
 * @apiParam FestiveBonus Pay grades's FestiveBonus.
 * @apiSuccess {Object} payGrades Pay grades's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Pay grades not found.
 */
router.post(
  "/",
  body({
    code,
    description,
    entity,
    entityState,
    entityCategory,
    statusCode,
    categoryCode,
    basic,
    splPay,
    minMax,
    minCTC,
    maxCTC,
    annualIncrement,
    bonus,
    allowances,
    deductions,
  }),
  create
);

/**
 * @api {get} /payGrades Retrieve pay grades
 * @apiName RetrievePayGrades
 * @apiGroup PayGrades
 * @apiUse listParams
 * @apiSuccess {Object[]} payGrades List of pay grades.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/", query(), index);

/**
 * @api {get} /payGrades/:id Retrieve pay grades
 * @apiName RetrievePayGrades
 * @apiGroup PayGrades
 * @apiSuccess {Object} payGrades Pay grades's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Pay grades not found.
 */
router.get("/:id", show);

/**
 * @api {put} /payGrades/:id Update pay grades
 * @apiName UpdatePayGrades
 * @apiGroup PayGrades
 * @apiParam grade Pay grades's grade.
 * @apiParam annualIncrement Pay grades's annualIncrement.
 * @apiParam scale Pay grades's scale.
 * @apiParam HRA Pay grades's HRA.
 * @apiParam DA Pay grades's DA.
 * @apiParam SA Pay grades's SA.
 * @apiParam LTA Pay grades's LTA.
 * @apiParam ESI Pay grades's ESI.
 * @apiParam EPFEmployee Pay grades's EPFEmployee.
 * @apiParam EPFEmployer Pay grades's EPFEmployer.
 * @apiParam DutyHours Pay grades's DutyHours.
 * @apiParam Gratuity5yrs Pay grades's Gratuity5yrs.
 * @apiParam Gratuity10yrs Pay grades's Gratuity10yrs.
 * @apiParam OTA Pay grades's OTA.
 * @apiParam CL Pay grades's CL.
 * @apiParam ELConversionFactor Pay grades's ELConversionFactor.
 * @apiParam ML Pay grades's ML.
 * @apiParam maternityLeave Pay grades's maternityLeave.
 * @apiParam RH Pay grades's RH.
 * @apiParam Days Pay grades's Days.
 * @apiParam weeklyOff Pay grades's weeklyOff.
 * @apiParam offAmount Pay grades's offAmount.
 * @apiParam RateHour Pay grades's RateHour.
 * @apiParam RateDay Pay grades's RateDay.
 * @apiParam weeklyHours Pay grades's weeklyHours.
 * @apiParam monthlyHours Pay grades's monthlyHours.
 * @apiParam FestiveBonus Pay grades's FestiveBonus.
 * @apiSuccess {Object} payGrades Pay grades's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Pay grades not found.
 */
router.put(
  "/:id",
  body({
    code,
    description,
    entity,
    entityState,
    entityCategory,
    statusCode,
    categoryCode,
    basic,
    splPay,
    minMax,
    minCTC,
    maxCTC,
    annualIncrement,
    bonus,
    allowances,
    deductions,
  }),
  update
);

/**
 * @api {delete} /payGrades/:id Delete pay grades
 * @apiName DeletePayGrades
 * @apiGroup PayGrades
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Pay grades not found.
 */
router.delete("/:id", destroy);

export default router;
