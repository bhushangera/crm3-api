import mongoose, { Schema } from 'mongoose'

const taxRatesSchema = new Schema({
  code: { type: String},
  descrption: { type: String },
  IGST: {type: Number, default: 0},
  CGST: {type: Number, default: 0},
  SGST: {type: Number, default: 0},
  active: {type: Boolean, default: true},
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

taxRatesSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      code: this.code,
      IGST: this.IGST,
      CGST: this.CGST,
      SGST: this.SGST,
      active: this.active,
      descrption: this.descrption,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('TaxRates', taxRatesSchema)

export const schema = model.schema
export default model
