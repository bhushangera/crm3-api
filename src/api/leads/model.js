import mongoose, { Schema } from "mongoose";
import { addressSchema,  employeeDetailsSchema } from "../employees/model";
import Teams from '../Teams/model'

export const leadsSchema = new Schema(
  {
    uuid: {type: String, trim: true},
    leadId: {type: String, trim: true},
    scrollNo: {type: Number, default: 0},
    leadByUserId: { type: String, trim: true },
    leadByUserName: { type: String, trim: true },
    date: { type: Date },
    leadDetails: { type: String, trim: true },
    buId: { type: String, trim: true },
    businessUnit: { type: String, trim: true },
    title: { type: String, trim: true },
    avatar: { type: String, trim: true },
    name: { type: String, trim: true },
    lastName: { type: String, trim: true },
    mobile: { type: Number, default: 0 },
    email: { type: String, trim: true },
    custType: { type: String, trim: true },
    companyCategoryId: { type: String, trim: true },
    companyCategory: { type: String, trim: true },
    companyCategoryCode: { type: String, trim: true },
    companyName: { type: String, trim: true },
    legalName: { type: String, trim: true },
    sectorCategoryId: { type: String, trim: true },
    sectorCategoryCode: { type: String, trim: true },
    address: addressSchema,
    entityId: { type: String, trim: true },
    entityCode: { type: String, trim: true },
    stateId: { type: String, trim: true },
    stateCode: { type: String, trim: true },
    categoryId: { type: String, trim: true },
    category: { type: String, trim: true },
    categoryCodeId: { type: String, trim: true },
    categoryCode: { type: String, trim: true },
    statusId: { type: String, trim: true },
    statusCode: { type: String, trim: true },
    productCategoryId: { type: String, trim: true },
    productCategory: { type: String, trim: true },
    productCategoryCodeId: { type: String, trim: true },
    productCategoryCode: { type: String, trim: true },
    sourceId: { type: String, trim: true },
    sourceCode: { type: String, trim: true },
    sourceCategoryId: { type: String, trim: true },
    sourceCategoryCode: { type: String, trim: true },
    campiagnId: { type: String, trim: true },
    campaignCode: { type: String, trim: true },
    refPartyId: { type: String, trim: true },
    managerId: { type: String, trim: true },
    manager: employeeDetailsSchema,
    reportsToUUID: { type: String, trim: true },
    reportsTo: { type: String, trim: true },
    teamId: { type: String, trim: true },
    team: Teams.schema,
    isProspect: { type: Boolean, default: false },
    converted: { type: Boolean, default: false },
    lostPartyId: { type: String, trim: true },
    lostParty: { type: String, trim: true },
    slug: { type: String, trim: true },
    // old fields
    budget: { type: Number, default: 0 },
    probability: { type: Number, default: 0 },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: (obj, ret) => {
        delete ret._id;
      },
    },
  }
);

leadsSchema.methods = {
  view(full) {
    const view = {
      // simple view
      id: this.id,
      uuid: this.uuid,
      leadId: this.leadId,
      scrollNo: this.scrollNo,
      leadByUserId: this.leadByUserId,
      leadByUserName: this.leadByUserName,
      date: this.date,
      leadDetails: this.leadDetails,
      buId: this.buId,
      businessUnit: this.businessUnit,
      title: this.title,
      avatar: this.avatar,
      name: this.name,
      lastName: this.lastName,
      mobile: this.mobile,
      email: this.email,
      custType: this.custType,
      companyCategoryId: this.companyCategoryId,
      companyCategory: this.companyCategory,
      companyCategoryCode: this.companyCategoryCode,
      companyName: this.companyName,
      legalName: this.legalName,
      sectorCategoryId: this.sectorCategoryId,
      sectorCategoryCode: this.sectorCategoryCode,
      address: this.address,
      entityId: this.entityId,
      entityCode: this.entityCode,
      stateId: this.stateId,
      stateCode: this.stateCode,
      categoryId: this.categoryId,
      category: this.category,
      categoryCodeId: this.categoryCodeId,
      categoryCode: this.categoryCode,
      statusId: this.statusId,
      statusCode: this.statusCode,
      productCategoryId: this.productCategoryId,
      productCategory: this.productCategory,
      productCategoryCodeId: this.productCategoryCodeId,
      productCategoryCode: this.productCategoryCode,
      sourceId: this.sourceId,
      sourceCode: this.sourceCode,
      sourceCategoryId: this.sourceCategoryId,
      sourceCategoryCode: this.sourceCategoryCode,
      campiagnId: this.campiagnId,
      campaignCode: this.campaignCode,
      refPartyId: this.refPartyId,
      managerId: this.managerId,
      manager: this.manager,
      reportsToUUID: this.reportsToUUID,
      reportsTo: this.reportsTo,
      teamId: this.teamId,
      team: this.team,
      isProspect: this.isProspect,
      converted: this.converted,
      lostPartyId: this.lostPartyId,
      lostParty: this.lostParty,
      slug: this.slug,
      budget: this.budget,
      probability: this.probability,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };

    return full
      ? {
          ...view,
          // add properties for a full view
        }
      : view;
  },
};

const model = mongoose.model("Leads", leadsSchema);

export const schema = model.schema;
export default model;
