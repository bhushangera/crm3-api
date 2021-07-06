import mongoose, { Schema } from 'mongoose'

const featureModulesSchema = new Schema({
  code: { type: String },
  sortOrder: {type: Number},
  label: {type: String},
  description: { type: String },
  dailyCost: {type: Number},
  active: { type: Boolean, default: false },
  isCore: { type: Boolean, default: false }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

featureModulesSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      code: this.code,
      sortOrder: this.sortOrder,
      label: this.label,
      description: this.description,
      dailyCost: this.dailyCost,
      active: this.active,
      isCore: this.isCore,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('FeatureModules', featureModulesSchema)

export const schema = model.schema
export default model
