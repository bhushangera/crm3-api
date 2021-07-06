import mongoose, { Schema } from "mongoose";
const bonusSchema = new Schema({
  quarterly: { type: Number, default: 0 }, // 15 days bonus validity
  biannual: { type: Number, default: 0 }, // 30 days bonus
  yearly: { type: Number, default: 0 } // 60 days bonus
})
const featuresSchema = new Schema({
  id: {type: String, trim: true},
  sortOrder: {type: Number},
  code: {type: String, trim: true},
  label: {type: String, trim: true},
  isCore: {type: Boolean}
})
const plansSchema = new Schema(
  {
    code: { type: String, trim: true }, // starter , regular , enterprise
    description: { type: String, trim: true },
    monthlyCost: { type: Number, default: 0 }, // 5500 , 7500,  12500
    sortOrder: { type: Number, default: 0 },
    minCommitment: { type: Number, default: 0 },
    bonus: bonusSchema,
    features: [featuresSchema],
    terms: {type: String, trim: true},
    active: { type: Boolean, default: false }
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

plansSchema.methods = {
  view(full) {
    const view = {
      // simple view
      id: this.id,
      code: this.code,
      description: this.description,
      cloudPlan: this.cloudPlan,
      monthlyCost: this.monthlyCost,
      sortOrder: this.sortOrder,
      minCommitment: this.minCommitment,
      bonus: this.bonus,
      features: this.features,
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

const model = mongoose.model("Plans", plansSchema);

export const schema = model.schema;
export default model;
