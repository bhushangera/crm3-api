import mongoose, { Schema } from 'mongoose'

const brandSeriesSchema = new Schema({
  materialBrandId: {type: String}, // from materialBrands
  materialBrand: {type: String},
  materialId: {type: String},
  material: {type: String}, // from materialBrands
  MCId: {type: String},
  MCCode: {type: String},  // from materialBrands
  SMCId: {type: String},
  SMCCode: {type: String}, // from materialBrands
  makeId: {type: String}, // new addition from materialBrands
  make: {type: String}, // from materialBrands
  series: {type: String},
  slug: {type: String}, // MCCode-SMCCode-Material-Make-Series
  isActive: {type: Boolean, default: true},
  image: {type: String},
  mType: {type: String}, 

}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

brandSeriesSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      materialBrandId: this.materialBrandId, // from materialBrands
      materialBrand: this.materialBrand,
      materialId: this.materialId,
      material: this.material, // from materialBrands
      MCId: this.MCId,
      MCCode: this.MCCode,  // from materialBrands
      SMCId: this.SMCId,
      SMCCode: this.SMCCode, // from materialBrands
      makeId: this.makeId, // new addition from materialBrands
      make: this.make, // from materialBrands
      series: this.series,
      slug: this.slug, // MCCode-SMCCode-Material-Make-Series
      isActive: this.isActive,
      image: this.image,
      mType: this.image, 
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('BrandSeries', brandSeriesSchema)

export const schema = model.schema
export default model
