import mongoose, { Schema } from "mongoose";
import EntityGroups from "../entityGroups/model";
import Entities from "../entities/model";
import EntityState from "../entityState/model";
import EntityCategory from "../entityCategory/model";
import CateogoryCodes from "../CategoryCodes/model";
import StatusCodes from "../statusCodes/model";
import Businessunits from '../businessunits/model'
const countersSchema = new Schema(
  {
    code: { type: String, trim: true },
    description: { type: String, trim: true },
    welcomeText: { type: String, trim: true },
    prefix: { type: String, trim: true },
    start: { type: Number, deafault: 0 },
    entityGroupId: { type: String, trim: true },
    entityGroupCode: { type: String, trim: true },
    entityGroupDescription: { type: String, trim: true },
    entityId: { type: String, trim: true },
    entityCode: { type: String, trim: true },
    entityDescription: { type: String, trim: true },
    categoryId: { type: String, trim: true },
    categoryCode: { type: String, trim: true },
    stateId: { type: String, trim: true },
    stateCode: { type: String, trim: true },
    stateDescription: { type: String, trim: true },
    statusId: { type: String, trim: true },
    statusCode: { type: String, trim: true },
    statusDescription: { type: String, trim: true },
    validity: { type: Number, default: 0 },
    enabled: { type: Boolean, deafault: false },
    terms: { type: String, trim: true },
    logo: { type: String, trim: true },
    address: { type: String, trim: true },
    showWelcomeText: { type: Boolean, deafault: false },
    bu: Businessunits.schema,
    enableSKU: {type: Boolean, default: false},
    updateSKU: {type: Boolean, default: false},
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

countersSchema.methods = {
  view(full) {
    const view = {
      // simple view
      id: this.id,
      code: this.code,
      description: this.description,
      welcomeText: this.welcomeText,
      prefix: this.prefix,
      start: this.start,
      entityGroupId: this.entityGroupId,
      entityGroupCode: this.entityGroupCode,
      entityGroupDescription: this.entityGroupDescription,
      entityId: this.entityId,
      entityCode: this.entityCode,
      entityDescription: this.entityDescription,
      categoryId: this.categoryId,
      categoryCode: this.categoryCode,
      stateId: this.stateId,
      stateCode: this.stateCode,
      stateDescription: this.stateDescription,
      statusId: this.statusId,
      statusCode: this.statusCode,
      statusDescription: this.statusDescription,
      validity: this.validity,
      enabled: this.enabled,
      terms: this.terms,
      logo: this.logo,
      address: this.address,
      showWelcomeText: this.showWelcomeText,
      bu: this.bu,
      enableSKU: this.enableSKU,
      updateSKU: this.updateSKU,
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

const model = mongoose.model("Counters", countersSchema);

export const schema = model.schema;
export default model;
