import mongoose, { Schema } from "mongoose";
const paymentResponseSchema = new Schema({
  id: {type: String, trim: true}, //  // 'pay_FQWVTy43gcmVk8';
  entity: {type: String, trim: true}, // 'payment';
  amount: {type: Number, default: 0}, // 100;
  currency: {type: String, trim: true}, // 'INR';
  status: {type: String, trim: true}, // 'captured';
  order_id: {type: String, trim: true}, // 'order_FQWVQAwkuHD8DM';
  invoice_id: {type: String, trim: true}, // null;
  international: {type: Boolean, default: false}, // false;
  method: {type: String, trim: true}, // 'netbanking';
  amount_refunded: {type: Number, default: 0}, // 0;
  refund_status: {type: String, trim: true}, // null;
  captured: {type: String, trim: true}, // true;
  description: {type: String, trim: true}, // null;
  card_id: {type: String, trim: true}, // null;
  bank: {type: String, trim: true}, // 'ICIC';
  wallet: {type: String, trim: true}, // null;
  vpa: {type: String, trim: true}, // null;
  email: {type: String, trim: true}, // 'bhushangera@gmail.com';
  contact: {type: String, trim: true}, // '+919466600440';
  notes: {type: String, trim: true}, // [];
  fee: {type: Number, default: 0}, // 2;
  tax: {type: Number, default: 0}, // 0;
  error_code: {type: String, trim: true}, // null;
  error_description: {type: String, trim: true}, // null;
  error_source: {type: String, trim: true}, // null;
  error_step: {type: String, trim: true}, // null;
  error_reason: {type: String, trim: true}, // null;
  acquirer_data: { // {
    bank_transaction_id: {type: String, trim: true}, // '2052207785';
  },
  created_at: {type: String} // 1597382021;
})
const planRenewalsSchema = new Schema(
  {
    licenseId: { type: String, trim: true },
    tenure: { type: String, trim: true },
    validity: { type: String, trim: true },
    startDate: { type: Date }, // to be set by user
    endDate: { type: Date },
    active: { type: Boolean, default: false },
    amount: { type: Number, default: 0 },
    paid: { type: Boolean, default: false },
    paymentDate: { type: Date },
    paymentDetails: paymentResponseSchema
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

planRenewalsSchema.methods = {
  view(full) {
    const view = {
      // simple view
      id: this.id,
      licenseId: this.licenseId,
      tenure: this.tenure,
      validity: this.validity,
      startDate: this.startDate,
      endDate: this.endDate,
      active: this.active,
      amount: this.amount,
      paid: this.paid,
      paymentDate: this.paymentDate,
      paymentDetails: this.paymentDetails,
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

const model = mongoose.model("PlanRenewals", planRenewalsSchema);

export const schema = model.schema;
export default model;
