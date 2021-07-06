import mongoose, { Schema } from 'mongoose'

const timeSheetsSchema = new Schema({
  partyId: {type: String},
  currentDate: {type: Date },
  month: {type: String },
  week: {type: String },
  day: {type: String },
  status: {type: String },
  inTime: { type: Date},
  outTime: {type: Date},
  CL: { type: Boolean, default: false },
  EL: { type: Boolean, default: false},
  present: { type: Boolean, default: false },
  absent: { type: Boolean, default: false },
  weeklyOff: { type: Boolean, default: false },
  leave: { type: Boolean, default: false },
  OT: { type: Boolean, default: false },
  OTHrs: { type: Number },
  Remarks: { type: String },
  dutyHrs: { type: Number }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

timeSheetsSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      partyId: this.partyId,
      currentDate: this.currentDate,
      month: this.month,
      week: this.week,
      day: this.day,
      status: this.status,
      inTime: this.in,
      outTime: this.out,
      CL: this.CL,
      EL: this.EL,
      present: this.present,
      absent: this.absent,
      weeklyOff: this.weeklyOff,
      leave: this.leave,
      WeeklyOff: this.WeeklyOff,
      OT: this.OT,
      OTHrs: this.OTHrs,
      Remarks: this.Remarks,
      dutyHrs: this.dutyHrs,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('TimeSheets', timeSheetsSchema)

export const schema = model.schema
export default model
