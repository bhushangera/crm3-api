import mongoose, { Schema } from 'mongoose'

const materialBrandsSchema = new Schema({
  MId: {type: String},
  MCode: {type: String}, // from material
  MakeId: {type: String}, // from makes
  MakeCode: {type: String}, // from makes
  MCId: {type: String}, // from material
  MCCode: {type: String},  // from materials
  SMCId: {type: String}, // from material
  SMCCode: {type: String}, // from materials
  slug: {type: String}, // MCCode-SMCCode-MCode-makeCode
  isActive: {type: Boolean, default: true},
  image: {type: String},
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

materialBrandsSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      MId: this.MId,
      MCode: this.MCode, // from material
      MakeId: this.MakeId, // from makes
      MakeCode: this.MakeCode, // from makes
      MCId: this.MCId, // from material
      MCCode: this.MCCode,  // from materials
      SMCId: this.SMCId, // from material
      SMCCode: this.SMCCode, // from materials
      slug: this.slug, // MCCode-SMCCode-MCode-makeCode
      isActive: this.isActive,
      image: this.image,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('MaterialBrands', materialBrandsSchema)

export const schema = model.schema
export default model
