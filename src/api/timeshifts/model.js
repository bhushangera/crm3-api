import mongoose, { Schema } from 'mongoose'

const timeshiftsSchema = new Schema({
  code: { type: String },
  description: { type: String },
  startTime: {
    // "hour": 1,
    // "minute": 1,
    // "second": 0
    hour: {type: Number},
    minute: {type: Number},
    second: {type: Number}
  },
  endTime: {
    hour: {type: Number},
    minute: {type: Number},
    second: {type: Number}
  },
  breakStartTime: {
    hour: {type: Number},
    minute: {type: Number},
    second: {type: Number}
  },
  breakEndTime: {
    hour: {type: Number},
    minute: {type: Number},
    second: {type: Number}
  },
  otHrs: {type: Number, default: 0},
  active: {type: Boolean, default: true}
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

timeshiftsSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      code: this.code,
      description: this.description,
      startTime: this.startTime,
      endTime: this.endTime,
      breakStartTime: this.breakStartTime,
      breakEndTime: this.breakEndTime,
      otHrs: this.otHrs,
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

const model = mongoose.model('Timeshifts', timeshiftsSchema)

export const schema = model.schema
export default model
