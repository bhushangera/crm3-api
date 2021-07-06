import { Router } from "express";
import { middleware as query } from "querymen";
import { middleware as body } from "bodymen";
import { create, index, show, update, destroy } from "./controller";
import { schema } from "./model";
export Contacts, { schema } from "./model";

const router = new Router();
const {
  title,
  uuid,
  scrollNo,
  contactId,
  name,
  lastName,
  contact,
  mobile,
  email,
  altContact,
  altEmail,
  avatar,
  profilePicture,
  entityId,
  entityCode,
  stateId,
  state,
  statusId,
  status,
  categoryId,
  category,
  categoryCodeId,
  categoryCode,
  buId,
  unitName,
  partyId,
  personalDetails,
  address,
} = schema.tree;

router.post(
  "/",
  body({
    title,
    uuid,
    scrollNo,
    contactId,
    name,
    lastName,
    contact,
    mobile,
    email,
    altContact,
    altEmail,
    avatar,
    profilePicture,
    entityId,
    entityCode,
    stateId,
    state,
    statusId,
    status,
    categoryId,
    category,
    categoryCodeId,
    categoryCode,
    buId,
    unitName,
    partyId,
    personalDetails,
    address,
  }),
  create
);

router.get("/", query(), index);

router.get("/:id", show);

router.put(
  "/:id",
  body({
    title,
    uuid,
    scrollNo,
    contactId,
    name,
    lastName,
    contact,
    mobile,
    email,
    altContact,
    altEmail,
    avatar,
    profilePicture,
    entityId,
    entityCode,
    stateId,
    state,
    statusId,
    status,
    categoryId,
    category,
    categoryCodeId,
    categoryCode,
    buId,
    unitName,
    partyId,
    personalDetails,
    address,
  }),
  update
);

router.delete("/:id", destroy);

export default router;
