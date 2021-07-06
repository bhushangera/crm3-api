import mongoose, { Schema } from "mongoose";

const departmentsSchema = new Schema(
  {
    companyId: { type: String },
    company: { type: String },
    businessUnitId: { type: String },
    businessUnit: { type: String },
    deptName: { type: String },
    description: { type: String },
    active: { type: String },
    building: { type: String },
    roomNo: { type: String },
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
    extension: { type: String },
    mobile: { type: String },
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

departmentsSchema.methods = {
  view(full) {
    const view = {
      // simple view
      id: this.id,
      companyId: this.companyId,
      company: this.company,
      businessUnitId: this.businessUnitId,
      businessUnit: this.businessUnit,
      deptName: this.deptName,
      description: this.description,
      active: this.active,
      building: this.building,
      roomNo: this.roomNo,
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
      extension: this.extension,
      mobile: this.mobile,
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

const model = mongoose.model("Departments", departmentsSchema);

export const schema = model.schema;
export default model;
