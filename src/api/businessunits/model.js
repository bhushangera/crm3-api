import mongoose, { Schema } from "mongoose";

const businessunitsSchema = new Schema(
  {
    companyId: { type: String },
    companyName: { type: String },
    unitName: { type: String },
    shortName: { type: String },
    building: { type: String },
    street: { type: String },
    address: { type: String },
    cityId: { type: String },
    city: { type: String },
    stateId: { type: String },
    state: { type: String },
    countryId: { type: String },
    country: { type: String },
    pinCode: { type: String },
    email: { type: String },
    landline: { type: String },
    mobile: { type: String },
    logo: { type: String },
    gstin: { type: String, trim: true },
    pan: { type: String, trim: true },
    tan: { type: String, trim: true },
    bankName: { type: String, trim: true },
    bankBranch: {type: String, trim: true},
    branchAddress: { type: String, trim: true },
    bankAccount: { type: String, trim: true },
    bankACTitle: { type: String, trim: true },
    IFSC: { type: String, trim: true },
    MICR: { type: String, trim: true },
    headerTemplate: { type: String, trim: true },
    footerTemplate: { type: String, trim: true },
    terms: { type: String, trim: true },
    active: { type: Boolean, default: true },
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

businessunitsSchema.methods = {
  view(full) {
    const view = {
      // simple view
      id: this.id,
      companyId: this.companyId,
      companyName: this.companyName,
      unitName: this.unitName,
      shortName: this.shortName,
      building: this.building,
      street: this.street,
      address: this.address,
      cityId: this.cityId,
      city: this.city,
      stateId: this.stateId,
      state: this.state,
      countryId: this.countryId,
      country: this.country,
      pinCode: this.pinCode,
      email: this.email,
      landline: this.landline,
      mobile: this.mobile,
      logo: this.logo,
      gstin: this.gstin,
      pan: this.pan,
      tan: this.tan,
      bankName: this.bankName,
      bankBranch: this.bankBranch,
      branchAddress: this.branchAddress,
      bankAccount: this.bankAccount,
      bankACTitle: this.bankACTitle,
      IFSC: this.IFSC,
      MICR: this.MICR,
      headerTemplate: this.headerTemplate,
      footerTemplate: this.footerTemplate,
      terms: this.terms,
      active: this.active,
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

const model = mongoose.model("Businessunits", businessunitsSchema);

export const schema = model.schema;
export default model;
