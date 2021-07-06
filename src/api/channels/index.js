import { Router } from "express";
import { middleware as query } from "querymen";
import { middleware as body } from "bodymen";
import { create, index, show, update, destroy } from "./controller";
import { schema } from "./model";
export Channels, { schema } from "./model";

const router = new Router();
const {
  uuid,
  CHTypeId,
  CHDescription,
  CHCode,
  HTypeId,
  HTypeCode,
  HTypeDescription,
  code,
  description,
  makeId,
  makeCode,
  makeImage,
  CML,
  CMR,
  ibaseHAdj,
  ibaseWAdj,
  ibackHAdj,
  ibackWAdj,
  TDA,
  BDA,
  LDA,
  RDA,
  EPH,
  image,
  cLength,
  cHeight,
} = schema.tree;

router.post(
  "/",
  body({
    uuid,
    CHTypeId,
    CHDescription,
    CHCode,
    HTypeId,
    HTypeCode,
    HTypeDescription,
    code,
    description,
    makeId,
    makeCode,
    makeImage,
    CML,
    CMR,
    ibaseHAdj,
    ibaseWAdj,
    ibackHAdj,
    ibackWAdj,
    TDA,
    BDA,
    LDA,
    RDA,
    EPH,
    image,
    cLength,
    cHeight,
  }),
  create
);

router.get("/", query(), index);

router.get("/:id", show);

router.put(
  "/:id",
  body({
    uuid,
    CHTypeId,
    CHDescription,
    CHCode,
    HTypeId,
    HTypeCode,
    HTypeDescription,
    code,
    description,
    makeId,
    makeCode,
    makeImage,
    CML,
    CMR,
    ibaseHAdj,
    ibaseWAdj,
    ibackHAdj,
    ibackWAdj,
    TDA,
    BDA,
    LDA,
    RDA,
    EPH,
    image,
    cLength,
    cHeight,
  }),
  update
);

/**
 * @api {delete} /channels/:id Delete channels
 * @apiName DeleteChannels
 * @apiGroup Channels
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Channels not found.
 */
router.delete("/:id", destroy);

export default router;
