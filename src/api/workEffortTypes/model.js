import mongoose, { Schema } from 'mongoose'

const workEffortTypesSchema = new Schema({
  WorkEffortTypeId: { type: String },
  type: { type: String },
  stdWorkHours: { type: Number },
  uomId: { type: String },
  uom: { type: String },
  conversionFactor: { type: Number }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

workEffortTypesSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      WorkEffortTypeId: this.WorkEffortTypeId,
      type: this.type,
      stdWorkHours: this.stdWorkHours,
      uomId: this.uomId,
      uom: this.uom,
      conversionFactor: this.conversionFactor,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('WorkEffortTypes', workEffortTypesSchema)

export const schema = model.schema
export default model
