import mongoose, { Schema } from 'mongoose'

const calenderWeeksSchema = new Schema({
  weekNo: {type: Number },
  startDate: {type: Date },
  endDate: { type: Date },
  active: { type: Boolean, default: false  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

calenderWeeksSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      weekNo: this.weekNo,
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

const model = mongoose.model('CalenderWeeks', calenderWeeksSchema)

export const schema = model.schema
export default model
