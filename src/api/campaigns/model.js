import mongoose, { Schema } from "mongoose";
import Entities from '../entities/model'
import EntityState from '../entityState/model'
import EntityCategory from '../entityCategory/model'
import CategoryCodes from '../CategoryCodes/model'
import StatusCodes from '../statusCodes/model'
// import Territories from '../territories/model'
import Employees from '../employees/model'
import Businessunits from '../businessunits/model'
// import Salutations from '../salutations/model'
// import Campaigns from '../campaigns/model'
// import Parties from '../parties/model'
import Countries from '../countries/model'
import States from '../states/model'
import Cities from '../cities/model'

const campaignsSchema = new Schema(
  {
    uuid: {type: String, trim: true},
    scrollNo: {type: Number, default: 0},
    campId: {type: String, trim: true},
    buId: {type: String, trim: true},
    unitName: {type: String, trim: true},
    code: {type: String, trim: true},
    description: {type: String, trim: true},
    sharewithEmpGroup: [EntityCategory.schema],
    splRemarks: {type: String, trim: true},
    startDate: {type: Date},
    endDate: {type: Date},
    entityId: {type: String, trim: true},
    entityCode: {type: String, trim: true},
    stateId: {type: String, trim: true},
    stateCode: {type: String, trim: true},
    categoryId: {type: String, trim: true},
    category: {type: String, trim: true},
    statusId: {type: String, trim: true},
    status: {type: String, trim: true},
    categoryCodeId: {type: String, trim: true},
    categoryCode: {type: String, trim: true},
    managerId: {type: String, trim: true},
    venue: {
      placeName: { type: String, trim: true },
      placeAddress: { type: String, trim: true },
      country: Countries.schema,
      state: States.schema,
      city: Cities.schema,
      lon: String,
      lat: String
    },
    commercials: {
      estimatedBudget: { type: Number, default: 0 },
      sanctionedBudget: { type: Number, default: 0 },
      expectedTurnover: { type: Number, default: 0 },
      expectedLeads: { type: Number, default: 0 },
    },
    response: {
      actualBudget: { type: Number, default: 0 },
      actualTurnover: { type: Number, default: 0 },
      actualLeads: { type: Number, default: 0 },
    },
    slug: String
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

campaignsSchema.methods = {
  view(full) {
    const view = {
      // simple view
      id: this.id,
      uuid: this.uuid,
      scrollNo: this.scrollNo,
      campId: this.campId,
      buId: this.buId,
      unitName: this.unitName,
      code: this.code,
      description: this.description,
      splRemarks: this.splRemarks,
      sharewithEmpGroup: this.sharewithEmpGroup,
      startDate: this.startDate,
      endDate: this.endDate,
      entityId: this.entityId,
      entityCode: this.entityCode,
      stateId: this.stateId,
      stateCode: this.stateCode,
      categoryId: this.categoryId,
      category: this.category,
      statusId: this.statusId,
      status: this.status,
      categoryCodeId: this.categoryCodeId,
      categoryCode: this.categoryCode,
      managerId: this.managerId,
      venue: this.venue,
      commercials: this.commercials,
      response: this.response,
      slug: this.slug,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    };

    return full
      ? {
          ...view,
          // add properties for a full view
        }
      : view;
  },
};

const model = mongoose.model("Campaigns", campaignsSchema);

export const schema = model.schema;
export default model;
