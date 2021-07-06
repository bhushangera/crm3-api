import mongoose, { Schema } from 'mongoose'

const consumablesSchema = new Schema({
  code: { type: String },
  description: { type: String },
  type: { type: String, trim: 'true' },
  isHinge: {type: Boolean, default: false},
  isGlue: {type: Boolean, default: false},
  isEBGlue: {type: Boolean, default: false},
  rate: {type: Number, default: 0},
  gst: {type: Number, default: 0},
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

consumablesSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      code: this.code,
      type: this.type,
      isHinge: this.isHinge,
      isGlue: this.isGlue,
      isEBGlue: this.isEBGlue,
      description: this.description,
      rate: this.rate,
      gst: this.gst,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Consumables', consumablesSchema)

export const schema = model.schema
export default model
