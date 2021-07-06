import mongoose, { Schema } from "mongoose";
const userSchema = new Schema({
  userId: { type: String },
  title: { type: String },
  name: { type: String },
  lastName: { type: String },
  email: { type: String },
  mobile: { type: String },
});
const planSchema = new Schema({
  id: { type: String, trim: true },
  code: { type: String, trim: true }, // starter , regular , enterprise
  description: { type: String, trim: true },
  monthlyCost: { type: Number, default: 0 }, // 5500 , 7500,  12500
  sortOrder: { type: Number, default: 0 },
  minCommitment: { type: Number, default: 0 },
  bonus: {
    quarterly: { type: Number, default: 0 }, // 15 days bonus validity
    biannual: { type: Number, default: 0 }, // 30 days bonus
    yearly: { type: Number, default: 0 }, // 60 days bonus
  },
  features: [
    {
      id: { type: String, trim: true },
      sortOrder: { type: Number, default: 0 },
      code: { type: String, trim: true },
      label: { type: String, trim: true },
      isCore: {type: Boolean}
    },
  ],
  active: { type: Boolean, default: false },
});
const addressSchema = new Schema({
  addressCategoryId: { type: String, trim: true },
  addressCategoryCode: { type: String, trim: true },
  addressCategoryDescription: { type: String, trim: true },
  // address
  building: { type: String, trim: true },
  floor: { type: String, trim: true },
  landmark: { type: String, trim: true },
  address: { type: String, trim: true },
  // country
  countryId: { type: String, trim: true },
  countryName: { type: String, trim: true },
  dialingPrefix: { type: String, trim: true },
  flagIcon: { type: String, trim: true },
  iso2: { type: String, trim: true },
  // state
  stateId: { type: String, trim: true },
  stateName: { type: String, trim: true },
  stateCode: { type: String, trim: true },
  // city
  cityId: { type: String, trim: true },
  cityName: { type: String, trim: true },
  lon: { type: Number, default: 0 },
  lat: { type: Number, default: 0 },
  // zip code
  pinCode: { type: Number, default: 0 },
  isPrimary: { type: Boolean, default: false },
});
const partySchema = new Schema({
  id: { type: String, trim: true },
  fullName: { type: String, trim: true },
  companyName: { type: String, trim: true },
  legalName: { type: String, trim: true },
  logo: { type: String, trim: true },
  address: [addressSchema],
});
const cloudPlanSchema = new Schema({
  id: { type: String, trim: true },
  code: { type: String, trim: true },
  description: { type: String, trim: true },
  ram: { type: Number, default: 0 },
  cpu: { type: Number, default: 0 },
  hdd: { type: Number, default: 0 },
  bandwidth: { type: Number, default: 0 },
  validity: { type: Number, default: 0 },
  USD: { type: Number, default: 0 },
  INR: { type: Number, default: 0 },
  backupAddition: { type: Number, default: 0 },
  users: { type: Number, default: 0 },
  active: { type: Boolean, default: true },
});
const paymentDetailsSchema = new Schema({
  id: { type: String, trim: true },
  entity: { type: String, trim: true },
  amount: { type: Number, default: 0 },
  currency: { type: String, trim: true },
  status: { type: String, trim: true },
  method: { type: String, trim: true },
  order_id: { type: String, trim: true },
  description: { type: String, trim: true },
  amount_refunded: { type: Number, default: 0 },
  refund_status: { type: String, trim: true },
  email: { type: String, trim: true },
  contact: { type: String, trim: true },
  notes: { type: String, trim: true },
  fee: { type: Number, default: 0 },
  tax: { type: Number, default: 0 },
  error_code: { type: String, trim: true },
  error_description: { type: String, trim: true },
  created_at: { type: String, trim: true },
});
const renewalSchema = new Schema({
  id: { type: String, trim: true },
  cloudPlan: { type: String, trim: true },
  plan: { type: String, trim: true },
  enableBackup: { type: Boolean, default: false },
  tenure: { type: String, trim: true },
  validity: { type: String, trim: true },
  bonus: { type: String, trim: true },
  startDate: { type: String }, // to be set by user
  endDate: { type: String },
  active: { type: Boolean, default: false },
  amount: { type: Number, default: 0 },
  paid: { type: Boolean, default: false },
  paymentDate: { type: String },
  paymentDetails: paymentDetailsSchema,
});

const licenseSchema = new Schema({
  user: userSchema,
  party: partySchema,
  // dates
  creationDate: { type: Date },
  // cloud plan
  cloudPlan: cloudPlanSchema,
  plan: planSchema,
  // new Additions
  enableBackup: { type: Boolean, default: false },
  planCharges: { type: Number, default: 0 },
  cloudPlanCharges: { type: Number, default: 0 },
  backupCharges: { type: Number, default: 0 },
  demoMode: { type: Boolean, default: false },
  demoExpiry: { type: String },
  renewal: [renewalSchema],
});
// primary schems
const saasSchema = new Schema(
  {
    licenseId: { type: String },
    license: licenseSchema,
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

saasSchema.methods = {
  view(full) {
    const view = {
      // simple view
      id: this.id,
      licenseId: this.licenseId,
      license: this.license,
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

const model = mongoose.model("Saas", saasSchema);

export const schema = model.schema;
export default model;
