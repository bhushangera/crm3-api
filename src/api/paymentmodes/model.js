import mongoose, { Schema } from 'mongoose'

const paymentModesSchema = new Schema({
  code: { type: String },
  description: { type: String },
  surcharge: {type: Number, default: 0},
  min: {type: Number, default: 0},
  max: {type: Number, default: 0},
  active: {type: Boolean, default: true},
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

paymentModesSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      code: this.code,
      description: this.description,
      surcharge: this.surcharge,
      min: this.min,
      max: this.max,
      active: this.active,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('PaymentModes', paymentModesSchema)

export const schema = model.schema
export default model
