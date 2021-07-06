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
const categoryCodeSchema = new Schema({
  id: { type: String, trim: true },
  sortOrder: { type: Number },
  entityCategoryId: { type: String, trim: true },
  entityCategory: { type: String, trim: true },
  code: { type: String, trim: true },
  description: { type: String, trim: true },
  active: { type: Boolean },
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
const leavePoliciesSchema = new Schema({
  code: {type: String, trim: true},
  description: {type: String, trim: true},
  entity: entitySchema,
  entityState: entityStateShema,
  entityCategory: entityCategorySchema,
  statusCode: statusCodeSchema,
  leaves: [
    {
      category: categoryCodeSchema,
      count: {type: Number, default: 0}
    }
  ]
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

leavePoliciesSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      code: this.code,
      description: this.description,
      entity: this.entity,
      entityState: this.entityState,
      entityCategory: this.entityCategory,
      statusCode: statusCodeSchema,
      leaves: this.leaves,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('LeavePolicies', leavePoliciesSchema)

export const schema = model.schema
export default model
