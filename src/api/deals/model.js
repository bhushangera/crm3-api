import mongoose, { Schema } from "mongoose";
import { employeeDetailsSchema } from "../employees/model";
import Leads from "../leads/model";
import Teams from "../Teams/model";
import Parties from '../parties/model';

const dealsSchema = new Schema(
  {
    uuid: { type: String, trim: true },
    dealId: { type: String, trim: true },
    description: { type: String, trim: true },
    scrollNo: { type: Number, trim: 0 },
    dealDetails: { type: String, trim: true },
    generateFrom: { type: String, trim: true }, // from lead or party
    leadId: { type: String, trim: true }, // uuid
    lead: Leads.schema, // lead details
    partyId: { type: String, trim: true },
    party: Parties.schema,
    userId: { type: String, trim: true },
    userName: { type: String, trim: true },
    teamId: { type: String, trim: true },
    team: Teams.schema,
    teamLeaderId: { type: String, trim: true },
    teamLeader: employeeDetailsSchema,
    managerId: { type: String, trim: true },
    manager: employeeDetailsSchema,
    date: { type: Date },
    budget: { type: Number, default: 0 }, // from lead
    probability: { type: Number, default: 0 },
    entityId: { type: String, trim: true },
    entityCode: { type: String, trim: true },
    stateId: { type: String, trim: true },
    state: { type: String, trim: true },
    statusId: { type: String, trim: true },
    status: { type: String, trim: true },
    categoryId: { type: String, trim: true },
    category: { type: String, trim: true },
    categoryCodeId: { type: String, trim: true },
    categoryCode: { type: String, trim: true },

    bestCase: { type: Number, default: 0 },
    worstCase: { type: Number, default: 0 },
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

dealsSchema.methods = {
  view(full) {
    const view = {
      // simple view
      id: this.id,
      scrollNo: this.scrollNo,
      dealId: this.dealId,
      description: this.description,
      uuid: this.uuid,
      dealDetails: this.dealDetails,
      generateFrom: this.generateFrom,
      leadId: this.leadId,
      lead: this.lead,
      partyId: this.partyId,
      party: this.party,
      userId: this.userId,
      userName: this.userName,
      teamId: this.teamId,
      team: this.team,
      teamLeaderId: this.teamLeaderId,
      teamLeader: this.teamLeader,
      managerId: this.managerId,
      manager: this.manager,
      date: this.date,
      budget: this.budget,
      probability: this.probability,
      entityId: this.entityId,
      entityCode: this.entityCode,
      stateId: this.stateId,
      state: this.state,
      statusId: this.statusId,
      status: this.status,
      categoryId: this.categoryId,
      category: this.category,
      categoryCodeId: this.categoryCodeId,
      categoryCode: this.categoryCode,

      bestCase: this.bestCase,
      worstCase: this.worstCase,

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

const model = mongoose.model("Deals", dealsSchema);

export const schema = model.schema;
export default model;
