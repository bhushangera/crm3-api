import mongoose, { Schema } from 'mongoose'

const licenseFeaturesSchema = new Schema({
  licenseId: {
    type: String
  },
  fmId: {
    type: String
  },
  code: {
    type: String
  },
  label: {
    type: String
  },
  dailyCost: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

licenseFeaturesSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      licenseId: this.licenseId,
      fmId: this.fmId,
      code: this.code,
      label: this.label,
      dailyCost: this.dailyCost,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('LicenseFeatures', licenseFeaturesSchema)

export const schema = model.schema
export default model
