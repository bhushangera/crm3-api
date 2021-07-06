import mongoose, { Schema } from 'mongoose'

const accountingPeriodsSchema = new Schema({
  code: {type: String},
  startDate: { type: Date },
  endDate: { type: Date },
  active: { type: Boolean, default: false }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

accountingPeriodsSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      code: this.code,
      startDate: this.startDate,
      endDate: this.endDate,
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

const model = mongoose.model('AccountingPeriods', accountingPeriodsSchema)

export const schema = model.schema
export default model
