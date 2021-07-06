import mongoose, { Schema } from 'mongoose'

const fiscalYearsSchema = new Schema({
  code: {
    type: String
  },
  description: {
    type: String
  },
  startDate: {
    type: String
  },
  endDate: {
    type: String
  },
  active: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

fiscalYearsSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      code: this.code,
      description: this.description,
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

const model = mongoose.model('FiscalYears', fiscalYearsSchema)

export const schema = model.schema
export default model
