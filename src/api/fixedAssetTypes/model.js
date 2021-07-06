import mongoose, { Schema } from 'mongoose'

const fixedAssetTypesSchema = new Schema({
  fixedAssetTypeId: { type: String },
  type: { type: String },
  description: { type: String }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

fixedAssetTypesSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      fixedAssetTypeId: this.fixedAssetTypeId,
      type: this.type,
      description: this.description,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('FixedAssetTypes', fixedAssetTypesSchema)

export const schema = model.schema
export default model
