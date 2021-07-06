import mongoose, { Schema } from 'mongoose'

const paymentTermsSchema = new Schema({
  code: {
    type: String
  },
  description: {
    type: String
  },
  days: {type: Number, default: 0},
  active: {type: Boolean, default: true},
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

paymentTermsSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      code: this.code,
      description: this.description,
      days: this.days,
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

const model = mongoose.model('PaymentTerms', paymentTermsSchema)

export const schema = model.schema
export default model
