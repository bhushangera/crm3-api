import mongoose, { Schema } from "mongoose";

const countriesSchema = new Schema(
  {
    country_id: { type: String },
    name: { type: String },
    iso3: { type: String },
    iso2: { type: String },
    icon: { type: String },
    phone_code: { type: String },
    capital: { type: String },
    currency: { type: String }
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

countriesSchema.methods = {
  view(full) {
    const view = {
      // simple view
      id: this.id,
      country_id: this.country_id,
      name: this.name,
      iso3: this.iso3,
      iso2: this.iso2,
      icon: this.icon,
      phone_code: this.phone_code,
      capital: this.capital,
      currency: this.currency,
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

const model = mongoose.model("Countries", countriesSchema);

export const schema = model.schema;
export default model;
