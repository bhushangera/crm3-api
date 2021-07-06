import mongoose, { Schema } from 'mongoose'

const calenderDaysSchema = new Schema({
  APCodeId: { type: String },
  APCode: { type: String },
  APStartDate: {  type: Date },
  APEndDate: { type: Date },
  date: { type: String },
  quarter: {type: String },
  monNo: { type: Number },
  monWords: { type: String},
  weekNo: { type: Number },
  weekDayNo: { type: Number },
  dayWords: { type: String },
  day: { type: String },
  holiday: { type: Boolean, default: false },
  remarks: { type: String }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

calenderDaysSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      APCodeId: this.APCodeId,
      APCode: this.APCode,
      APStartDate: this.APStartDate,
      APEndDate: this.APEndDate,
      date: this.date,
      quarter: this.quarter,
      monNo: this.monNo,
      monWords: this.monWords,
      weekNo: this.weekNo,
      weekDayNo: this.weekDayNo,
      dayWords: this.dayWords,
      day: this.day,
      holiday: this.holiday,
      remarks: this.remarks,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('CalenderDays', calenderDaysSchema)

export const schema = model.schema
export default model
