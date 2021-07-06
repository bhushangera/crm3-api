import mongoose, { Schema } from 'mongoose'

const regionsSchema = new Schema({
  region: { type: String },
  code: { type: String }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

regionsSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      region: this.region,
      code: this.code,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Regions', regionsSchema)

export const schema = model.schema
export default model
