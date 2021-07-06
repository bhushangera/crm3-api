import mongoose, { Schema } from "mongoose";

const companySchema = new Schema(
  {
    companyName: { type: String },
    shortName: { type: String },
    prefix: {type: String},
    tagline: { type: String },
    building: { type: String },
    street: { type: String },
    address: { type: String },
    cityId: { type: String },
    city: { type: String },
    stateId: { type: String },
    state: { type: String },
    countryId: { type: String },
    country: { type: String },
    email: { type: String },
    landline: { type: String },
    mobile: { type: String },
    logo: { type: String },
    logo1: { type: String },
    facebook: { type: String },
    twitter: { type: String },
    youtube: { type: String },
    linkdIn: { type: String },
    instagram: { type: String },
    pinterest: { type: String },
    info: { type: String },
  },
  { timestamps: true }
);

companySchema.methods = {
  view(full) {
    const view = {
      // simple view
      id: this.id,
      companyName: this.companyName,
      shortName: this.shortName,
      prefix: this.prefix,
      tagline: this.tagline,
      building: this.building,
      street: this.street,
      address: this.address,
      cityId: this.cityId,
      city: this.city,
      stateId: this.stateId,
      state: this.state,
      countryId: this.countryId,
      country: this.country,
      email: this.email,
      landline: this.landline,
      mobile: this.mobile,
      logo: this.logo,
      logo1: this.logo1,
      facebook: this.facebook,
      twitter: this.twitter,
      youtube: this.youtube,
      linkdIn: this.linkdIn,
      instagram: this.instagram,
      pinterest: this.pinterest,
      info: this.info
    };

    return full
      ? {
          ...view,
          // add properties for a full view
        }
      : view;
  },
};

const model = mongoose.model("Company", companySchema);

export const schema = model.schema;
export default model;
