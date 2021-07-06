import mongoose, { Schema } from 'mongoose'
const entitySchema = new Schema({
  id: { type: String, trim: true },
  code: { type: String },
  description: { type: String },
  sortOrder: { type: Number },
  icon: { type: String },
  colorId: { type: String },
  background: { type: String },
  foreground: { type: String },
  prefix: { type: String },
  group: { type: String },
  active: { type: Boolean, default: true },
  hasState: { type: Boolean, default: false },
  hasCategories: { type: Boolean, default: false },
});
const entityStateShema = new Schema({
  id: { type: String, trim: true },
  entityId: { type: String, trim: true },
  entityCode: { type: String, trim: true },
  entityDescription: { type: String, trim: true },
  code: { type: String, trim: true },
  description: { type: String, trim: true },
  active: { type: Boolean, default: true },
  hasStatusCodes: { type: Boolean, default: false },
});
const entityCategorySchema = new Schema({
  id: { type: String, trim: true },
  entityId: { type: String, trim: true },
  entityCode: { type: String, trim: true },
  entityDescription: { type: String, trim: true },
  code: { type: String, trim: true },
  description: { type: String, trim: true },
  active: { type: Boolean, default: true },
  hasCategoryCodes: { type: Boolean, default: false },
});
const statusCodeSchema = new Schema({
  id: { type: String, trim: true },
  sortOrder: { type: Number },
  entityStateId: { type: String, trim: true },
  entityState: { type: String, trim: true },
  code: { type: String, trim: true },
  description: { type: String, trim: true },
  active: { type: Boolean },
});
const categoryCodeSchema = new Schema({
  id: { type: String, trim: true },
  sortOrder: { type: Number },
  entityCategoryId: { type: String, trim: true },
  entityCategory: { type: String, trim: true },
  code: { type: String, trim: true },
  description: { type: String, trim: true },
  active: { type: Boolean },
});
const payGradesSchema = new Schema({
  code: {type: String, trim: true},
  description: {type: String, trim: true},
  entity: entitySchema,
  entityState: entityStateShema,
  entityCategory: entityCategorySchema,
  statusCode: statusCodeSchema,
  categoryCode: categoryCodeSchema,
  basic: {type: Number, default: 0},
  splPay: {type: Number, default: 0},
  minMax: {type: Boolean, default: false},
  minCTC: {type: Number, default: 0},
  maxCTC: {type: Number, default: 0},
  annualIncrement: {type: Number, default: 0},
  bonus: {type: Number, default: 0},
  allowances: [
    {
      categoryCode: categoryCodeSchema,
      calcMethod: {type: String, trim: true}, // percentage , static
      value: {type: Number, default: 0},
      count: {type: Number, default: 0},
    }
  ],
  deductions: [
    {
      categoryCode: categoryCodeSchema,
      calcMethod: {type: String, trim: true}, // percentage , static
      value: {type: Number, default: 0},
      count: {type: Number, default: 0},
    }
  ]
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

payGradesSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      code: this.code,
      description: this.description,
      entity: this.entity,
      entityState: this.entityState,
      entityCategory: this.entityCategory,
      statusCode: this.statusCode,
      categoryCode: this.categoryCode,
      basic: this.basic,
      splPay: this.splPay,
      minMax: this.minMax,
      minCTC: this.minCTC,
      maxCTC: this.maxCTC,
      annualIncrement: this.annualIncrement,
      bonus: this.bonus,
      allowances: this.allowances,
      deductions: this.deductions,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('PayGrades', payGradesSchema)

export const schema = model.schema
export default model
