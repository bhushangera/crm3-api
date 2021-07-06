import mongoose, { Schema } from 'mongoose'

const agSchema = new Schema({
  MId: { type: String},
  MCode: {type: String},
  mType: {type: String },
  MCId: {type: String },
  MCCode: { type: String },
  SMCId: {type: String},
  SMCCode: { type: String},
  AGCode: { type: String },
  AGDescription: { type: String },
  image: { type: String},
  slug: {type: String },
  isActive: {type: Boolean, default: true }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

agSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      MId: this.MId,
      MCode: this.MCode,
      mType: this.mType,
      MCId: this.MCId,
      MCCode: this.MCCode,
      SMCId: this.SMCId,
      SMCCode: this.SMCCode,
      AGCode: this.AGCode,
      AGDescription: this.AGDescription,
      image: this.image,
      slug: this.slug,
      isActive: this.isActive,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Ag', agSchema)

export const schema = model.schema
export default model
